import { CopyrightIcon, LocationIcon } from "@/components/icons";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="pt-footer-top pb-10">
      <PageContainer>
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-base leading-normal">
          <li className="inline-flex items-center whitespace-nowrap">Bruno Gätjens</li>
          <li aria-hidden="true" className="hidden text-xs leading-none md:list-item">|</li>
          <li className="inline-flex items-center whitespace-nowrap">
            <a href="mailto:gatjensb@gmail.com" className="hover:underline">gatjensb@gmail.com</a>
          </li>
          <li aria-hidden="true" className="hidden text-xs leading-none md:list-item">|</li>
          <li className="inline-flex items-center gap-2 whitespace-nowrap">
            <CopyrightIcon className="size-5" style={{ width: 20, height: 20 }} />
            <span className="sr-only">Copyright </span>
            {new Date().getFullYear()}
          </li>
          <li aria-hidden="true" className="hidden text-xs leading-none md:list-item">|</li>
          <li className="inline-flex items-center gap-2 whitespace-nowrap">
            <LocationIcon className="size-5" />
            Heredia, Costa Rica
          </li>
        </ul>
      </PageContainer>
    </footer>
  );
}
