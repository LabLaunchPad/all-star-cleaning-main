import { useEffect, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import type { Translation } from '@/i18n/translations';
import { Conversation } from './chat/Conversation';
import { Message } from './chat/Message';
import { PromptInput } from './chat/PromptInput';

interface ChatWidgetProps {
  locale: 'en' | 'fr';
  t: Translation['chat'];
}

export default function ChatWidget({ locale, t }: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ body: { locale } }),
  });

  const isBusy = status === 'submitted' || status === 'streaming';

  function handleSubmit() {
    const text = input.trim();
    if (!text) return;
    sendMessage({ text });
    setInput('');
  }

  function closeAndReturnFocus() {
    setOpen(false);
    launcherRef.current?.focus();
  }

  // Same focus-trap / Escape-to-close / return-focus pattern as the mobile nav
  // dialog in Header.astro — reused here rather than reinvented.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const firstFocusable = panel?.querySelector<HTMLElement>('textarea, button, a[href]');
    firstFocusable?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeAndReturnFocus();
        return;
      }
      if (e.key === 'Tab' && panel) {
        const focusable = panel.querySelectorAll<HTMLElement>('a[href], button, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.launcherLabel}
        aria-expanded={open}
        className="touch-target fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-midnight-indigo text-text-on-dark shadow-lg shadow-midnight-indigo/30 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-midnight-indigo focus-visible:ring-offset-2 active:scale-95 md:bottom-6 md:right-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-navy/20 p-0 md:items-end md:p-6">
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-widget-title"
            className="flex h-[min(32rem,80vh)] w-full flex-col overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl md:h-[32rem] md:w-96 md:rounded-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h2 id="chat-widget-title" className="font-heading text-sm font-extrabold text-midnight-indigo">
                {t.panelTitle}
              </h2>
              <button
                type="button"
                onClick={closeAndReturnFocus}
                aria-label={t.close}
                className="touch-target flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-off-white-dark focus-visible:ring-2 focus-visible:ring-midnight-indigo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <Conversation scrollKey={messages.length + (messages.at(-1)?.parts.length ?? 0)}>
              {messages.length === 0 ? (
                <p className="px-1 text-sm text-muted-foreground">{t.emptyState}</p>
              ) : (
                messages.map((message) => <Message key={message.id} message={message} />)
              )}
              {error && <p className="px-1 text-sm text-destructive">{t.errorMessage}</p>}
            </Conversation>

            <PromptInput
              value={input}
              onChange={setInput}
              onSubmit={handleSubmit}
              disabled={isBusy}
              placeholder={t.inputPlaceholder}
              sendLabel={t.send}
            />
          </div>
        </div>
      )}
    </>
  );
}
