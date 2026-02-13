"use client";

import { useState, useEffect } from "react";

const INTRO_KEY = "aw-trades-intro-seen";

interface AnimationState {
  overlayVisible: boolean;
  navbarVisible: boolean;
  badgeVisible: boolean;
  headlineVisible: boolean;
  subheadlineVisible: boolean;
  buttonsVisible: boolean;
}

export function useIntroAnimation() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>({
    overlayVisible: true,
    navbarVisible: true,
    badgeVisible: true,
    headlineVisible: true,
    subheadlineVisible: true,
    buttonsVisible: true,
  });

  useEffect(() => {
    // Check if user has seen intro before
    const hasSeenIntro = localStorage.getItem(INTRO_KEY);

    if (!hasSeenIntro) {
      setShouldAnimate(true);
      // Start with everything hidden
      setAnimationState({
        overlayVisible: false,
        navbarVisible: false,
        badgeVisible: false,
        headlineVisible: false,
        subheadlineVisible: false,
        buttonsVisible: false,
      });

      // Animation timeline (faster)
      const timers: NodeJS.Timeout[] = [];

      // 1s - Overlay fades in
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, overlayVisible: true }));
        }, 1000)
      );

      // 1.3s - Navbar appears
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, navbarVisible: true }));
        }, 1300)
      );

      // 1.5s - Badge appears
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, badgeVisible: true }));
        }, 1500)
      );

      // 1.7s - Headline appears
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, headlineVisible: true }));
        }, 1700)
      );

      // 1.9s - Subheadline appears
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, subheadlineVisible: true }));
        }, 1900)
      );

      // 2.1s - Buttons appear
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => ({ ...prev, buttonsVisible: true }));
        }, 2100)
      );

      // Mark as seen after animation completes
      timers.push(
        setTimeout(() => {
          localStorage.setItem(INTRO_KEY, "true");
        }, 2500)
      );

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, []);

  return { shouldAnimate, animationState };
}
