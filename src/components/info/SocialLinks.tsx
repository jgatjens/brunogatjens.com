import { LinkedInIcon, DribbbleIcon, BehanceIcon, XIcon } from "@/components/icons";

const socialLinks = [
  { type: "icon", icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/gatjensb/" },
  { type: "icon", icon: DribbbleIcon, label: "Dribbble", href: "https://dribbble.com/gatjensb" },
  { type: "icon", icon: BehanceIcon, label: "ArtStation", href: "https://www.artstation.com/gatjensb" },
  { type: "image", label: "Instagram", href: "https://www.instagram.com/gatjensb/", src: "/images/instagram-icon.png" },
  { type: "icon", icon: XIcon, label: "X", href: "https://x.com/gatjensb" },
] as const;

export function SocialLinks({ className = "mt-12 min-w-0" }: { className?: string }) {
  return (
    <nav aria-label="Social links" className={className}>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {socialLinks.map((social) => {
          const icon =
            social.type === "icon" ? (
              <social.icon className="size-5 shrink-0 text-[#CB998F] transition-colors group-hover:text-[#E73266] group-focus-visible:text-[#E73266]" />
            ) : (
              <span
                aria-hidden="true"
                className="size-5 shrink-0 bg-[#CB998F] transition-colors group-hover:bg-[#E73266] group-focus-visible:bg-[#E73266]"
                style={{
                  maskImage: `url("${social.src}")`,
                  maskPosition: "center",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskImage: `url("${social.src}")`,
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                }}
              />
            );

          return (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.label}`}
                className="group inline-flex size-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
