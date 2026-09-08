export function AboutFilmmaker() {
  return (
    <section className="grid min-h-0 grid-cols-1 gap-12 bg-black px-6 py-[90px] text-white min-[1025px]:grid-cols-[minmax(0,1fr)_minmax(0,.95fr)] min-[1025px]:items-stretch min-[1025px]:gap-[4vw] min-[1025px]:px-[4.2vw] min-[1025px]:pt-[4.5vw] min-[1025px]:pb-[4.5vw]" id="about">
      <div>
        <h1 className="m-0 mb-7 text-[clamp(2rem,3.2vw,3.5rem)] leading-none font-bold tracking-[-.025em] uppercase">About the Filmmaker</h1>
        <div className="w-full font-[Jost,sans-serif] text-[15px] leading-[1.5] font-normal text-white [&_p]:mb-[1.25em]">
        <p>Josh Sternfeld developed an interest in filmmaking as a teenager, and studied at NYU Graduate Film School, where he wrote and directed the award-winning short film <em>Balloons, Streamers</em>. The film screened at the 1997 New York Film Festival, 1998 Sundance Film Festival, and was distributed by the Sundance Channel and Canal+, where it broadcast from 1999-2003.</p>
        <p>After completing his master’s degree, Josh worked as an assistant editor for Steeplechase Films on the Emmy-nominated PBS series New York: A Documentary Film. Concurrent with that series, Josh wrote his first feature screenplay Winter Solstice. He developed the project at the 2001 Sundance Screenwriters Lab, and directed the film in 2004; starring Anthony LaPaglia (Golden Globe Winner), Allison Janney (Academy Award Winner), Michelle Monaghan and Mark Webber. The film premiered at the Tribeca Film Festival and was acquired by Paramount Classics, who released it internationally in April 2005.</p>
        <p>In 2008 Josh followed up with his next feature Meskada, a police drama set in Catskill, New York. The film stars Nick Stahl, Norman Reedus (The Walking Dead), Kellan Lutz (Twilight films), Jonathan Tucker and Rachel Nichols; it premiered at the 2010 Tribeca Film Festival. Time Warner Home Entertainment and Showtime Networks released it in 2011, with foreign sales handled by Inferno Entertainment.</p>
        <p>In 2014 Josh co-produced the thriller Darkroom, starring Kaylee Defer, Elisabeth Röhm and Christian Campbell. In 2017, Josh wrote and directed the thriller Amy Makes Three, starring Torrey DeVitto and Mike Doyle. And in 2019 Josh co-produced Infamous, a crime thriller starring Bella Thorne and Jake Manley; Lucidity Entertainment produced the film and Vertical Entertainment released it June 2020.</p>
        <p>In 2021 Josh directed the action film Fortress: Sniper’s Eye, produced by Emmett/Furla/Oasis and Grindstone Entertainment Group; starring Bruce Willis, Chad Michael Murray and Jesse Metcalfe. Lionsgate and Highland Film Group released the film internationally in April 2022.</p>
        <p>Josh is currently contracted to direct the sci-fi action film Final Invasion, for Centerboro Productions and Convoke Media, with production slated for winter 2023. He is also contracted by Centerboro Productions to direct The Unearthly, a comedy-horror satire, in 2024.</p>
        <p>In addition to his feature work, Josh also directs brand campaigns for online media – notably StyleCaster, Peloton Cycle and the Viñoly Foundation. He has also taught screenwriting and film production at New York University/Tisch School of the Arts.</p>
        <p>Josh lives in New York City with his wife and daughter.</p>
        </div>
      </div>
      <div className="min-h-0 overflow-hidden">
        <img className="aspect-[3/4] h-full max-h-[1050px] w-full object-cover object-top" src="/images/Josh-Sternfeld-headshot.webp" alt="Josh Sternfeld" loading="lazy" decoding="async" />
      </div>
    </section>
  );
}
