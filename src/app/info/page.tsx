import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = { title: "Info" };

export default function InfoPage() {
  return <PageContainer className="py-section"><h1 className="text-3xl sm:text-4xl">Info</h1></PageContainer>;
}
