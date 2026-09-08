import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-[#0a0a09] px-[8vw] pt-[130px] pb-20 text-[#f1f0eb]">
      <p className="m-0 mb-6 text-[.68rem] font-semibold tracking-[.24em] text-[#f0ef18] uppercase">404 / Cut</p>
      <h1 className="m-0 mb-[45px] max-w-[900px] text-[clamp(3rem,8vw,8rem)] leading-[.9] font-light uppercase">This scene isn’t in the final edit.</h1>
      <Link className="inline-flex border-b border-current pb-2 text-[.75rem] tracking-[.15em] uppercase hover:text-[#f0ef18]" href="/">Return home →</Link>
    </main>
  );
}
