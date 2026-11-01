import { SocialLinks } from "@/components/info/SocialLinks";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="pt-footer-top pb-10">
      <PageContainer>
        <SocialLinks className="min-w-0" />
      </PageContainer>
    </footer>
  );
}
