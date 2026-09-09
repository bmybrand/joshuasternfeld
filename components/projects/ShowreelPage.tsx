import { ProjectShareLinks } from "@/components/projects/ProjectShareLinks";
import { Reveal } from "@/components/Reveal";

export function ShowreelPage() {
  const labels = ["Director", "Year", "Link"];
  const values = [
    "Josh Sternfeld",
    "2023",
    <a className="transition-colors hover:text-[#f0ef18]" href="https://www.imdb.com/name/nm0973835/" target="_blank" rel="noreferrer" key="imdb">imdb.com</a>,
  ];

  return (
    <main className="relative min-h-screen bg-[#f4f7f9] font-[Jost,sans-serif]">
      <div className="h-[100px] bg-[#15171a]" aria-hidden="true" />
      <section className="bg-black px-4 pt-12 pb-6 text-white max-[1024px]:px-0 max-[1024px]:pt-0">
        <div className="grid w-full grid-cols-1 items-start min-[768px]:grid-cols-[70%_30%] min-[768px]:max-[1024px]:grid-cols-[65%_35%]">
          <Reveal className="min-w-0 px-[10px] pr-[26px] max-[767px]:px-0" from="left">
            <video className="aspect-video w-full bg-black object-contain" controls playsInline preload="metadata" poster="/images/JS-Showreel_Title-768x432.webp">
              <source src="/videos/Josh-Sternfeld-full-showreel.webm" type="video/webm" />
            </video>
          </Reveal>

          <Reveal from="right" delay={100}>
          <aside className="px-[35px] pt-[35px] pb-[50px] text-[17px] leading-[1.5] max-[1024px]:p-[25px] max-[767px]:p-3">
            <p className="mt-0 mb-0 border-b border-white/12 pb-6">
              A collection of footage from Josh Sternfeld&apos;s narrative work. Projects include Fortress: Sniper&apos;s Eye (2022), Amy Makes Three (2020), Market Trip (2014), Meskada (2010), and Winter Solstice (2004)
            </p>

            <div className="grid grid-cols-2 border-b border-white/12 py-5 font-[Roboto,sans-serif] leading-[1.55] max-[767px]:grid-cols-[35%_65%]">
              <ul className="m-0 list-none p-0 font-medium">{labels.map((label) => <li key={label}>{label}</li>)}</ul>
              <ul className="m-0 list-none p-0 font-light">{values.map((value, index) => <li key={labels[index]}>{value}</li>)}</ul>
            </div>

            <div className="grid grid-cols-[41%_55%] items-center gap-[4%] pt-5 font-[Roboto,sans-serif]">
              <span className="font-medium">Share</span>
              <ProjectShareLinks pageUrl="https://joshuasternfeld.com/showreel/" title="Showreel" />
            </div>
          </aside>
          </Reveal>
        </div>

        <p className="mx-auto mt-[280px] mb-0 w-full max-w-[1140px] text-[15px] leading-6 text-white">© 2026 Joshua Sternfeld – Filmmaker. All rights reserved</p>
      </section>
    </main>
  );
}
