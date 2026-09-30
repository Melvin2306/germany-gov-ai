// Tiny renderer for the subset of Markdown the Beamten-KI uses:
// paragraphs, "1." / "-" lists, **bold**, *italic* and _italic_ lines.

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
    if (p.startsWith("*") && p.endsWith("*") && p.length > 2) return <em key={i}>{p.slice(1, -1)}</em>;
    return p;
  });
}

export function Markdownish({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className="space-y-3 leading-relaxed">
      {blocks.map((block, i) => {
        const lines = block.split("\n").filter(Boolean);
        if (lines.length && lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ol key={i} className="list-decimal space-y-1.5 pl-5">
              {lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\.\s/, ""))}</li>)}
            </ol>
          );
        }
        if (lines.length && lines.every((l) => /^-\s/.test(l))) {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5">
              {lines.map((l, j) => <li key={j}>{inline(l.replace(/^-\s/, ""))}</li>)}
            </ul>
          );
        }
        if (lines.length && lines.every((l) => /^>\s?/.test(l))) {
          return (
            <blockquote key={i} className="border-l-4 border-gold bg-[#faf8f2] py-2 pl-4 pr-2 text-neutral-700">
              {lines.map((l, j) => (
                <p key={j}>{inline(l.replace(/^>\s?/, ""))}</p>
              ))}
            </blockquote>
          );
        }
        if (/^_.*_$/.test(block.trim())) {
          return <p key={i} className="text-sm italic text-neutral-500">{block.trim().slice(1, -1)}</p>;
        }
        return (
          <p key={i}>
            {lines.map((l, j) => (
              <span key={j}>
                {inline(l)}
                {j < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
