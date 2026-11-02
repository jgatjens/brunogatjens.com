import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { InfoContent } from "@/components/info/InfoContent";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageContainer className="flex flex-col gap-12 py-section lg:pt-20">
      <h1 className="text-center font-[family-name:var(--font-noto-serif)] text-5xl leading-[1.2] font-bold lg:text-left">About</h1>
      <InfoContent />
    </PageContainer>
  );
}
