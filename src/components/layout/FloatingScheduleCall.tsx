"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import UilPhone from "@iconscout/react-unicons/icons/uil-phone";
import { scheduleCallUrl } from "@/content/links";

export function FloatingScheduleCall() {
  const pathname = usePathname();
  const [isHomepageCallVisible, setIsHomepageCallVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsHomepageCallVisible(false);
      return;
    }

    const homepageCall = document.getElementById("homepage-schedule-call");
    if (!homepageCall) {
      setIsHomepageCallVisible(false);
      return;
    }

    const updateVisibility = () => {
      const bounds = homepageCall.getBoundingClientRect();
      setIsHomepageCallVisible(bounds.top < window.innerHeight && bounds.bottom > 0);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname]);

  if (isHomepageCallVisible) return null;

  return (
    <div className="fixed bottom-[calc(16px+env(safe-area-inset-bottom))] left-1/2 z-50 w-max max-w-[calc(100vw-32px)] -translate-x-1/2 rounded-full bg-floating-cta-surface px-[10px] py-2 shadow-[0_4px_4px_rgba(0,0,0,0.12)]">
      <a
        href={scheduleCallUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Schedule a call with Bruno"
        className="schedule-call-button focus-visible:outline-offset-2"
      >
        <UilPhone size={20} color="#f8fafd" aria-hidden="true" focusable="false" className="shrink-0" />
        <span className="whitespace-nowrap">Schedule a Call</span>
      </a>
    </div>
  );
}
