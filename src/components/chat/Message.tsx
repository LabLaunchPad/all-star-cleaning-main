import type { UIMessage } from 'ai';
import { cn } from '@/lib/utils';
import { Response } from './Response';

interface MessageProps {
  message: UIMessage;
}

// Extracted from `message.parts` rather than a flat `content` string — the AI SDK's
// UIMessage format splits a message into typed parts (text, tool calls, etc.); this
// widget only ever renders the text parts.
function textFromParts(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === 'text')
    .map((part) => part.text)
    .join('');
}

export function Message({ message }: MessageProps) {
  const isUser = message.role === 'user';
  const text = textFromParts(message);
  if (!text) return null;

  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
          isUser
            ? 'bg-midnight-indigo text-text-on-dark'
            : 'bg-off-white-dark text-navy'
        )}
      >
        <Response text={text} />
      </div>
    </div>
  );
}
