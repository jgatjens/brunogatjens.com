import { CopyrightIcon, LocationIcon } from "@/components/icons";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="pt-footer-top pb-10">
      <PageContainer>
        <ul className="footer-content flex flex-wrap items-center gap-x-5 gap-y-3 text-footer">
          <li className="inline-flex items-center gap-2">Bruno Gätjens</li>
          <li className="inline-flex items-center gap-2"><a href="mailto:gatjensb@gmail.com" className="hover:underline">gatjensb@gmail.com</a></li>
          <li className="inline-flex items-center gap-2"><CopyrightIcon className="size-4" /><span className="sr-only">Copyright </span>{new Date().getFullYear()}</li>
          <li className="inline-flex items-center gap-2"><LocationIcon className="size-4" />Heredia, Costa Rica</li>
        </ul>
      </PageContainer>
    </footer>
  );
}
