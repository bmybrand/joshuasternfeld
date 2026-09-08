"use client";

import Link from "next/link";

export function HomeHero() {
  function scrollToShowreel(event: React.MouseEvent<HTMLAnchorElement>) {
    const showreel = document.getElementById("showreel");
    if (!showreel) return;

    event.preventDefault();
    showreel.scrollIntoView({ behavior: "smooth", block: "center" });
    window.history.replaceState(null, "", "/#showreel");
  }

  return (
    <section className="relative h-[53.55vw] min-h-[560px] max-h-screen w-full overflow-hidden bg-[#00211c] px-[18px] pt-3 pb-[18px] max-[800px]:h-[72svh] max-[800px]:min-h-[500px] max-[520px]:px-3 max-[520px]:pt-2 max-[520px]:pb-3" aria-label="Josh Sternfeld director showreel">
      <video data-hero-video className="block h-full w-full object-cover object-center" autoPlay muted playsInline loop preload="metadata" poster="/images/Josh_Sternfeld-Winter_Solstice-Michelle_Monaghan-06-uai-720x405-1.webp" aria-hidden="true">
        <source src="/videos/SizzleTrim-1-1.webm" type="video/webm" />
      </video>
      <Link className="absolute bottom-[13%] left-1/2 inline-flex -translate-x-1/2 items-center rounded-xl bg-white px-[30px] py-[21px] font-[Roboto,sans-serif] text-[20px] font-medium whitespace-nowrap text-[#191919] uppercase transition-colors hover:bg-[#f0ef18] max-[800px]:bottom-[10%] max-[800px]:p-[15px] max-[800px]:text-[13px]" href="/#showreel" onClick={scrollToShowreel}>
        Watch the showreel
      </Link>
    </section>
  );
}
