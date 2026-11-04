"use client";

import { useEffect, useRef, useState } from "react";
import { MainNavigation } from "./MainNavigation";

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const previousScrollY = useRef(0);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    const clearHideTimer = () => {
      if (hideTimer.current === null) return;
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    };

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const previousY = previousScrollY.current;
      const wasAtTop = previousY === 0;
      previousScrollY.current = currentScrollY;

      if (currentScrollY === 0 || currentScrollY < previousY) {
        clearHideTimer();
        setIsHidden(false);
        return;
      }

      if (currentScrollY > previousY) {
        if (hideTimer.current !== null) return;
        if (!wasAtTop) {
          setIsHidden(true);
          return;
        }

        hideTimer.current = window.setTimeout(() => {
          setIsHidden(true);
          hideTimer.current = null;
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearHideTimer();
    };
  }, []);

  const showOnFocus = () => {
    if (hideTimer.current !== null) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    previousScrollY.current = window.scrollY;
    setIsHidden(false);
  };

  return (
    <header
      onFocusCapture={showOnFocus}
      className="sticky top-0 z-40 h-20 w-full px-2 pt-2 md:h-[80px] md:px-4"
    >
      <div
        className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${
            isHidden ? "site-header-panel--hidden" : "translate-y-0"
        }`}
      >
        <MainNavigation />
      </div>
    </header>
  );
}
