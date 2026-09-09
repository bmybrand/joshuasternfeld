"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

function Brand({ menu = false }: { menu?: boolean }) {
  return (
    <Link
      className={menu ? "mt-[3px] block w-[190px]" : "block w-[clamp(295px,23vw,390px)] max-[1024px]:w-[clamp(205px,30vw,285px)] max-[520px]:w-[190px]"}
      href="/"
      aria-label="Josh Sternfeld, director — home"
    >
      <img className="block h-auto w-full" src="/images/JS-Header_Image-V2.png" width="2350" height="300" alt="Josh Sternfeld | Director" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  function scrollToSection(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu = false,
  ) {
    const sectionId = href.split("#")[1];
    const section = sectionId ? document.getElementById(sectionId) : null;

    if (!section) return;

    event.preventDefault();
    if (closeMenu) {
      document.body.style.overflow = "";
      setOpen(false);
    }
    window.history.replaceState(null, "", href);
    requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const heroVideo = document.querySelector<HTMLVideoElement>("[data-hero-video]");
    if (heroVideo) {
      if (open) {
        heroVideo.pause();
      } else {
        void heroVideo.play().catch(() => undefined);
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <header className={`absolute top-3 right-[18px] left-[18px] z-20 flex h-[70px] items-center justify-between border-0 px-1.5 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none max-[520px]:top-2 max-[520px]:right-3 max-[520px]:left-3 max-[520px]:px-2 ${ready ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
        <Brand />
        <nav className="hidden items-center min-[1025px]:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link className="inline-flex min-h-10 items-center bg-transparent px-[15px] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Arial,sans-serif] text-[23px] leading-none font-semibold text-white transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[5px] focus-visible:outline-white" href={link.href} key={link.href} onClick={(event) => scrollToSection(event, link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="flex h-[31px] w-[45px] cursor-pointer flex-col justify-center gap-[5px] rounded-[2px] border border-[#aaa] bg-white px-2 py-1.5 min-[1025px]:hidden" type="button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
          <span className="block h-px w-full bg-[#111]" /><span className="block h-px w-full bg-[#111]" /><span className="block h-px w-full bg-[#111]" />
        </button>
      </header>

      <div className={`fixed inset-0 z-[100] min-[1025px]:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <button className={`absolute inset-0 h-full w-full border-0 bg-black/60 transition-transform duration-300 ease-out ${open ? "translate-x-0 delay-0" : "-translate-x-full delay-[420ms]"}`} type="button" aria-label="Close navigation" onClick={() => setOpen(false)} />
        <aside className={`absolute inset-y-0 left-0 w-[min(350px,88vw)] bg-white px-3.5 py-[21px] text-[#111] transition-transform duration-[420ms] ease-[cubic-bezier(.22,.61,.36,1)] ${open ? "translate-x-0 delay-300" : "-translate-x-full delay-0"}`} id="mobile-menu" aria-label="Mobile navigation">
          <div className="flex items-start justify-between gap-[15px]">
            <Brand menu />
            <button className="h-12 w-[45px] shrink-0 cursor-pointer rounded-[2px] border border-[#888] bg-white font-[Arial,sans-serif] text-[25px] leading-none font-light text-[#111]" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}>×</button>
          </div>
          <nav className="mt-[38px] flex flex-col items-start gap-[25px]">
            {links.map((link) => (
              <Link className="p-0 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Arial,sans-serif] text-[23px] leading-[1.3] font-medium text-[#111] uppercase" href={link.href} key={link.href} onClick={(event) => scrollToSection(event, link.href, true)}>{link.label}</Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
