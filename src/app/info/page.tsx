import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { InfoContent } from "@/components/info/InfoContent";

export const metadata: Metadata = { title: "Info" };

export default function InfoPage() {
  return (
    <PageContainer className="info-page">
      <h1 className="info-title">Info</h1>
      <InfoContent />
    </PageContainer>
  );
}
