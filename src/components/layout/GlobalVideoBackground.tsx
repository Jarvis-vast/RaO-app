"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

export function GlobalVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 1) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isLoaded || !videoRef.current) return;

    let rafId: number;
    let targetTime = 0;
    let currentTime = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const renderFrame = () => {
      if (!videoRef.current) return;
      
      // Calculate the target time based on scroll
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      const maxScroll = Math.max(docHeight - winHeight, 1);
      const rawProgress = scrollY / maxScroll;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      
      const duration = videoRef.current.duration;
      if (duration && Number.isFinite(duration)) {
        targetTime = progress * duration;
      }

      // Smoothly interpolate current time towards target time
      // 0.05 is the smoothing factor (lower = smoother but more delayed)
      currentTime = lerp(currentTime, targetTime, 0.05);
      
      // Only update if there's a meaningful difference
      const diff = Math.abs(currentTime - videoRef.current.currentTime);
      
      // CRITICAL PERFORMANCE FIX: 
      // Do not assign currentTime if the video is already actively seeking.
      // Assigning it too rapidly forces the browser to abort and restart seeks,
      // which blocks the main thread and causes severe scroll lag (jank).
      if (diff > 0.03 && !videoRef.current.seeking) {
        videoRef.current.currentTime = currentTime;
      }
      
      rafId = requestAnimationFrame(renderFrame);
    };

    // Start the render loop
    rafId = requestAnimationFrame(renderFrame);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion, isLoaded]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none bg-black">
      {mounted && (
        <video
          ref={videoRef}
          key={theme === "dark" ? "dark-video" : "light-video"}
          src={theme === "dark" ? "/videos/gemini_generated_video_ae238e90.mp4" : "/videos/rao-hero.mp4"}
          poster="/images/Logo.jpeg"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedMetadata={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}
