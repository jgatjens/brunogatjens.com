import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { InfoContent } from "@/components/info/InfoContent";

export const metadata: Metadata = { title: "Info" };

export default function InfoPage() {
  return (
    <PageContainer className="grid gap-8 py-section lg:grid-cols-[minmax(0,1fr)_19.75rem] lg:gap-x-12 lg:gap-y-12 lg:pt-20">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:col-start-1 lg:row-start-1">Info</h1>
      <InfoContent />
    </PageContainer>
  );
}
