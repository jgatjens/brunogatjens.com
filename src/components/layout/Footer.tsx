import { CopyrightIcon, LocationIcon } from "@/components/icons";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="site-footer">
      <PageContainer>
        <ul className="footer-content">
          <li>Bruno Gätjens</li>
          <li><a href="mailto:gatjensb@gmail.com" className="hover:underline">gatjensb@gmail.com</a></li>
          <li><CopyrightIcon /><span className="sr-only">Copyright </span>{new Date().getFullYear()}</li>
          <li><LocationIcon />Heredia, Costa Rica</li>
        </ul>
      </PageContainer>
    </footer>
  );
}
