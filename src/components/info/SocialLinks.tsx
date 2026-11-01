import { LinkedInIcon, DribbbleIcon, BehanceIcon, XIcon } from "@/components/icons";

const socialLinks = [
  { icon: LinkedInIcon, label: "linkedin", href: "https://www.linkedin.com/in/gatjensb/" },
  { icon: DribbbleIcon, label: "dribbble", href: "https://dribbble.com/gatjensb" },
  { icon: BehanceIcon, label: "artstation", href: "https://www.artstation.com/gatjensb" },
  { icon: XIcon, label: "x", href: "https://x.com/gatjensb" },
] as const;

export function SocialLinks({ className = "mt-12 min-w-0" }: { className?: string }) {
  return (
    <nav aria-label="Social links" className={className}>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
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
