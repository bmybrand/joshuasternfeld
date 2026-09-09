import type { Metadata } from "next";
import { ShowreelPage } from "@/components/projects/ShowreelPage";

export const metadata: Metadata = {
  title: "Showreel",
  description: "A collection of footage from Josh Sternfeld's narrative work.",
};

export default function Page() {
  return <ShowreelPage />;
}
