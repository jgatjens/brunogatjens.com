"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import UilPhone from "@iconscout/react-unicons/icons/uil-phone";
import { scheduleCallUrl } from "@/content/links";

function subscribeToViewport(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

function getHomepageCallVisibility(pathname: string) {
  if (pathname !== "/") return false;

  const homepageCall = document.getElementById("homepage-schedule-call");
  if (!homepageCall) return false;

  const bounds = homepageCall.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}

function getServerSnapshot() {
  return false;
}

export function FloatingScheduleCall() {
  const pathname = usePathname();
  const isHomepageCallVisible = useSyncExternalStore(
    subscribeToViewport,
    () => getHomepageCallVisibility(pathname),
    getServerSnapshot,
  );
  if (isHomepageCallVisible) return null;

  return (
    <div className="fixed bottom-[calc(16px+env(safe-area-inset-bottom))] left-1/2 z-50 w-max max-w-[calc(100vw-32px)] -translate-x-1/2 rounded-full bg-floating-cta-surface p-1 shadow-[0_4px_4px_rgba(0,0,0,0.12)]">
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
