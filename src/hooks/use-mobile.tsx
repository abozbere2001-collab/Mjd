
"use client";

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // This code now runs only on the client, after the component has mounted.
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Initial check
    checkIsMobile();

    // Listen for resize events
    window.addEventListener("resize", checkIsMobile);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []); // Empty dependency array ensures this runs only once on mount

  return isMobile; // Can be undefined on the very first render, which is safe.
}
