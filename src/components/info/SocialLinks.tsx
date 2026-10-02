import { LinkedInIcon, DribbbleIcon, BehanceIcon, XIcon } from "@/components/icons";

const socialLinks = [
  { icon: LinkedInIcon, label: "in/gatjensb", href: "https://www.linkedin.com/in/gatjensb/" },
  { icon: DribbbleIcon, label: "gatjensb", href: "https://dribbble.com/gatjensb" },
  { icon: BehanceIcon, label: "gatjensb", href: "https://www.artstation.com/gatjensb" },
  { icon: XIcon, label: "gatjensb", href: "https://x.com/gatjensb" },
] as const;

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="min-w-0 lg:col-span-2 lg:row-start-3">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <li key={href}>
            <a href={href} target="_blank" className="inline-flex min-h-11 items-center gap-3 underline decoration-1 underline-offset-2">
              <Icon className="size-5 shrink-0 text-accent" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
