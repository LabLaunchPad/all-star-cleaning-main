import { useRef, type SyntheticEvent, type KeyboardEvent } from 'react';
import { cn } from '@/lib/utils';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled: boolean;
  placeholder: string;
  sendLabel: string;
}

export function PromptInput({ value, onChange, onSubmit, disabled, placeholder, sendLabel }: PromptInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (disabled || !value.trim()) return;
    onSubmit();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2 border-t border-border p-3">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
        disabled={disabled}
        className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-midnight-indigo disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        aria-label={sendLabel}
        className={cn(
          'touch-target inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-midnight-indigo text-text-on-dark transition-colors duration-200',
          'hover:bg-midnight-indigo-dark focus-visible:ring-2 focus-visible:ring-midnight-indigo focus-visible:ring-offset-2 disabled:opacity-40'
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </button>
    </form>
  );
}
