"use client";

import { useState, useEffect } from "react";

const INTRO_KEY = "aw-trades-intro-seen";

interface AnimationState {
  blurAmount: number;
  contentVisible: boolean;
  navbarVisible: boolean;
}

/**
 * Blur to Focus Animation
 * - Everything starts heavily blurred
 * - Gradually sharpens into focus
 * - Content fades in during focus
 */
export function useIntroAnimation() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    blurAmount: 20,
    contentVisible: false,
    navbarVisible: false,
  });

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(INTRO_KEY);

    if (!hasSeenIntro) {
      const timers: NodeJS.Timeout[] = [];

      // Start blur reduction - slower
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, blurAmount: 0 }));
        }, 300)
      );

      // Navbar appears - slower
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, navbarVisible: true }));
        }, 1200)
      );

      // Content appears - slower
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, contentVisible: true }));
        }, 1800)
      );

      // Mark as seen
      timers.push(
        setTimeout(() => {
          sessionStorage.setItem(INTRO_KEY, "true");
        }, 3500)
      );

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    } else {
      // Skip animation
      setAnimationState({
        blurAmount: 0,
        contentVisible: true,
        navbarVisible: true,
      });
    }
  }, []);

  return { animationState };
}
