"use client";

import { FormEvent, useState } from "react";

const labelClass = "block font-[Jost,sans-serif] text-[17px] normal-case tracking-normal text-white";
const fieldClass = "mt-[5px] w-full resize-y rounded-[2px] border border-[#ddd] bg-white px-[11px] py-[10px] text-[17px] text-[#111] outline-none focus:border-[#f0ef18]";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:jjlustern@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  }

  return (
    <form className="flex flex-col gap-[13px]" onSubmit={submit}>
      <div className="grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
        <label className={labelClass}>Name <span className="text-[#f22]">*</span><input className={fieldClass} name="name" autoComplete="name" placeholder="Name" required /></label>
        <label className={labelClass}>Email <span className="text-[#f22]">*</span><input className={fieldClass} name="email" type="email" autoComplete="email" placeholder="Email" required /></label>
      </div>
      <label className={labelClass}>Comment or Message<textarea className={`${fieldClass} min-h-[102px]`} name="message" rows={5} required /></label>
      <button className="self-start rounded-[5px] border-0 bg-[#fff900] px-[25px] py-[9px] font-[Inter,sans-serif] text-[17px] font-medium text-black uppercase transition-colors hover:bg-white" type="submit">Submit</button>
      <p className="m-0 min-h-[1.2em] text-[17px] text-[#a4a39d]" aria-live="polite">{status}</p>
    </form>
  );
}
