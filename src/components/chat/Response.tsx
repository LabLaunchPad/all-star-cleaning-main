interface ResponseProps {
  text: string;
}

// The system prompt asks the model for short, plain-language answers (no corporate
// jargon), so replies aren't expected to carry rich markdown — preserving whitespace
// and line breaks is enough. Not pulling in a markdown parser for this.
export function Response({ text }: ResponseProps) {
  return <p className="whitespace-pre-wrap">{text}</p>;
}
