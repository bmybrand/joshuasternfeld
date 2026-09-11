import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section className="grid min-h-[39vw] grid-cols-1 grid-rows-[auto_auto_auto] gap-10 bg-black px-6 py-10 text-white min-[1025px]:grid-cols-[minmax(0,1fr)_minmax(420px,.78fr)] min-[1025px]:grid-rows-[auto_auto] min-[1025px]:gap-x-[clamp(55px,8vw,145px)] min-[1025px]:gap-y-6 min-[1025px]:pt-0 min-[1025px]:pr-[4.2vw] min-[1025px]:pb-6 min-[1025px]:pl-0" id="contact">
      <Reveal className="overflow-hidden min-[1025px]:self-stretch" from="left">
        <img
          className="h-auto w-full aspect-[16/10] object-cover min-[1025px]:h-full min-[1025px]:min-h-[540px] min-[1025px]:aspect-auto"
          src="/images/Josh-Sternfeld-behind-the-scenes.webp"
          loading="lazy"
          decoding="async"
          alt="Production still from Josh Sternfeld’s filmmaking work"
        />
      </Reveal>
      <Reveal className="row-start-2 w-full max-w-none min-[1025px]:col-start-2 min-[1025px]:row-start-1 min-[1025px]:w-[min(100%,530px)] min-[1025px]:pt-[4vw]" from="right" delay={100}>
        <h2 className="m-0 mb-7 font-[Inter,sans-serif] text-[25px] leading-none font-semibold tracking-[-.025em] text-white uppercase min-[801px]:text-[54px]">Contact Info</h2>
        <ContactForm />
        <div className="mt-[38px] font-[Jost,sans-serif] text-[17px] leading-[1.5] [&_p]:mb-5 [&_a:hover]:text-[#f0ef18]">
          <p>Josh Sternfeld<br /><a href="mailto:jjlustern@gmail.com">jjlustern@gmail.com</a></p>
          <p>Representation:<br />Law Office of Robert L. Seigel<br />575 Madison Ave., 10th Floor<br />New York, NY 10022</p>
          <p><a href="tel:+12126050301">212-605-0301</a><br /><a href="mailto:rlsentlaw@aol.com">rlsentlaw@aol.com</a></p>
        </div>
      </Reveal>
      <p className="col-start-1 row-start-3 m-0 text-center font-[Jost,sans-serif] text-[17px] leading-6 font-normal text-white min-[1025px]:row-start-2">
        © 2026 Joshua Sternfeld – Filmmaker. All rights reserved
      </p>
    </section>
  );
}
