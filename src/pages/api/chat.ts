import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { streamText, convertToModelMessages, createUIMessageStreamResponse, toUIMessageStream, type UIMessage } from 'ai';
import { createWorkersAI } from 'workers-ai-provider';
import { services } from '@/data/services';
import settings from '@/content/settings.json';

export const prerender = false;

// Small, neuron-cheap instruct model — a full back-and-forth stays well inside
// the shared 10k free-neurons/day Workers AI budget for the whole site.
const MODEL = '@cf/meta/llama-3.1-8b-instruct';

// Best-effort per-IP guard on top of the account's own free-tier ceiling —
// without it, a handful of bot hits can exhaust the whole site's daily quota.
const RATE_LIMIT_KEY_FALLBACK = 'unknown';

function buildSystemPrompt(locale: 'en' | 'fr'): string {
  const serviceList = services
    .map((s) => (locale === 'fr' ? s.frName : s.name))
    .join(', ');

  if (locale === 'fr') {
    return `Tu es l'assistant virtuel d'All Star Cleaning, une entreprise de nettoyage extérieur à Ottawa. Ton ton : fiable, local, digne de confiance — direct et confiant, jamais insistant, avec une fierté locale sans provincialisme.

Services offerts : ${serviceList}.
Téléphone : ${settings.phone}. Heures : ${settings.hoursFr}.

Règles :
- Réponds uniquement aux questions concernant ces services, notre zone de service (région d'Ottawa) et l'entreprise.
- Si la question est hors sujet, redirige poliment vers ces services.
- Pour toute demande de devis, de réservation ou de renseignements précis sur une propriété, dirige toujours la personne vers le formulaire de devis gratuit ou le numéro de téléphone — ne confirme jamais un prix ou un rendez-vous toi-même.
- Réponses courtes et concrètes, pas de jargon corporatif.`;
  }

  return `You are All Star Cleaning's virtual assistant, an Ottawa exterior cleaning company. Voice: reliable, local, trustworthy — direct and confident, never salesy, with local pride without provincialism.

Services offered: ${serviceList}.
Phone: ${settings.phone}. Hours: ${settings.hoursEn}.

Rules:
- Only answer questions about these services, our service area (Ottawa region), and the company.
- If asked something off-topic, politely redirect to these services.
- For any quote request, booking, or property-specific pricing, always direct the person to the free quote form or the phone number — never confirm a price or appointment yourself.
- Keep answers short and concrete, no corporate jargon.`;
}

export const POST: APIRoute = async ({ request }) => {
  const clientIp = request.headers.get('cf-connecting-ip') ?? RATE_LIMIT_KEY_FALLBACK;
  const { success } = await env.CHAT_RATE_LIMITER.limit({ key: clientIp });
  if (!success) {
    return new Response(JSON.stringify({ error: 'Too many requests — please wait a moment.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = (await request.json()) as { messages: UIMessage[]; locale?: 'en' | 'fr' };
  const locale = body.locale === 'fr' ? 'fr' : 'en';

  const workersai = createWorkersAI({ binding: env.AI });

  const result = streamText({
    model: workersai(MODEL),
    system: buildSystemPrompt(locale),
    messages: await convertToModelMessages(body.messages),
  });

  return createUIMessageStreamResponse({ stream: toUIMessageStream({ stream: result.stream }) });
};
