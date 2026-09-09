import type { Metadata } from "next";
import "@fontsource/jost/400.css";
import "@fontsource/jost/600.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/300.css";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joshuasternfeld.com"),
  title: {
    default: "Josh Sternfeld — Director",
    template: "%s — Josh Sternfeld",
  },
  description:
    "Selected filmmaking work by award-winning New York writer and director Josh Sternfeld.",
  icons: { icon: "/images/cropped-JS_Website-Logo.webp" },
  openGraph: {
    title: "Josh Sternfeld — Director",
    description: "Narrative films, documentaries, and commercial work.",
    images: ["/images/Josh-Sternfeld-behind-the-scenes.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0a0a09]">
      <body className="m-0 bg-[#0a0a09] font-[Jost,sans-serif] text-[#f1f0eb] selection:bg-[#f0ef18] selection:text-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
