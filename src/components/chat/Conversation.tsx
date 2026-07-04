import { useEffect, useRef, type ReactNode } from 'react';

interface ConversationProps {
  children: ReactNode;
  /** Re-runs the auto-scroll-to-bottom effect whenever this changes (e.g. message count, streaming text length). */
  scrollKey: unknown;
}

export function Conversation({ children, scrollKey }: ConversationProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [scrollKey]);

  return (
    <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
      {children}
    </div>
  );
}
