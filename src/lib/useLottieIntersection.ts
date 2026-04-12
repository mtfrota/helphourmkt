"use client";

import { useEffect, useRef } from "react";
import type { LottieRefCurrentProps } from "lottie-react";

type UseLottieIntersectionReturn = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  lottieRef: React.RefObject<LottieRefCurrentProps | null>;
};

export function useLottieIntersection(threshold = 0.2): UseLottieIntersectionReturn {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!lottieRef.current) return;
        if (entry.isIntersecting) lottieRef.current.play();
        else lottieRef.current.pause();
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { containerRef, lottieRef };
}
