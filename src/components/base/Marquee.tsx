interface MarqueeProps {
  items: string[];
  dark?: boolean;
  separator?: string;
}

export default function Marquee({ items, dark = false, separator = '/' }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-6 select-none">
      <div className="flex w-max animate-marquee-slow items-center gap-10 whitespace-nowrap">
        {loop.map((item, index) => (
          <span key={index} className="flex items-center gap-10">
            <span
              className={`font-courier text-[11px] uppercase tracking-[0.35em] ${dark ? 'text-clavia-lilac/50' : 'text-clavia-purple/50'}`}
            >
              {item}
            </span>
            <span className={`${dark ? 'text-clavia-lilac/25' : 'text-clavia-purple/25'} text-xs`}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}