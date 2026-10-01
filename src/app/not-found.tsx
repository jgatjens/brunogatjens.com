import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer className="space-y-6 py-section">
      <h1 className="text-3xl sm:text-4xl">Page not found</h1>
      <Link href="/" className="underline">Return home</Link>
    </PageContainer>
  );
}
