type ProjectShareLinksProps = {
  pageUrl: string;
  title: string;
};

export function ProjectShareLinks({ pageUrl, title }: ProjectShareLinksProps) {
  const encodedUrl = encodeURIComponent(pageUrl);
  const links = [
    { label: "Facebook", mark: "f", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, className: "rounded-full bg-white text-black" },
    { label: "X", mark: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}`, className: "text-white" },
    { label: "LinkedIn", mark: "in", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, className: "rounded-[1px] bg-white text-[9px] text-black" },
    { label: "Pinterest", mark: "p", href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}`, className: "rounded-full border border-white text-[11px] text-white" },
    { label: "Xing", mark: "x", href: `https://www.xing.com/spi/shares/new?url=${encodedUrl}`, className: "text-white" },
    { label: "WhatsApp", mark: "w", href: `https://wa.me/?text=${encodedUrl}`, className: "rounded-full border border-white text-[9px] text-white" },
  ];

  return (
    <div className="flex items-center justify-between gap-3">
      {links.map((link) => (
        <a className="inline-flex h-4 w-4 items-center justify-center font-[Arial,sans-serif] text-[12px] font-semibold transition-opacity hover:opacity-70" href={link.href} key={link.label} target="_blank" rel="noreferrer" aria-label={`Share ${title} on ${link.label}`}>
          <span className={`inline-flex h-[14px] min-w-[14px] items-center justify-center leading-none ${link.className}`} aria-hidden="true">{link.mark}</span>
        </a>
      ))}
    </div>
  );
}
