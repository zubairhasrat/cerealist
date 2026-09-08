"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePreviewIssueModal } from "@/contexts/PreviewIssueModalContext";
import { useSubscriptionModal } from "@/contexts/SubscriptionModalContext";

const SLIDES = [
  { src: "/images/article-cereal-box-image.png", alt: "The Cerealist — front view" },
  { src: "/images/article-cereal-box-image.png", alt: "The Cerealist — back panel" },
  { src: "/images/article-cereal-box-image.png", alt: "The Cerealist — side panel" },
  { src: "/images/article-cereal-box-image.png", alt: "The Cerealist — detail" },
];

export default function PreviewIssueModal() {
  const { isOpen, close } = usePreviewIssueModal();
  const { open: openSubscription } = useSubscriptionModal();
  const [activeSlide, setActiveSlide] = useState(0);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  if (!isOpen) return null;

  function handleCTA() {
    close();
    openSubscription();
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 px-4 py-6 overflow-y-auto"
      onClick={close}
    >
      <div
        className="relative w-full max-w-[375px] md:max-w-[400px] my-auto rounded-[20px] border border-black overflow-hidden bg-[url('/images/paper-texture.png')] bg-cover"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] bg-cover opacity-90 pointer-events-none rounded-[20px]" />

        {/* Inner border */}
        <div className="absolute inset-[10px] rounded-[14px] border border-black/15 pointer-events-none" />

        {/* Close button — dark circle with X */}
        <button
          onClick={close}
          className="absolute top-[18px] right-[18px] z-20 w-[33px] h-[33px] rounded-full border flex items-center justify-center shrink-0"
          aria-label="Close preview"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 1L12 12M12 1L1 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10 pt-8 pb-7 px-6 flex flex-col items-center">
          {/* Title */}
          <h2 className="font-[family-name:var(--font-crimson)] font-semibold text-[41px] leading-none tracking-[-0.826px] text-ink text-center">
            Inside View
          </h2>

          {/* Subtitle */}
          <p className="font-[family-name:var(--font-crimson)] text-[20px] leading-[1.274] text-[#2a2929] text-center mt-3 max-w-[315px]">
            A look at our latest issue filled with cartoons, headlines, and commentary.
          </p>

          {/* Rule */}
          <hr className="border-0 border-t border-black w-full mt-4" />

          {/* Carousel image */}
          <div className="relative w-[275px] h-[380px] mt-4">
            <Image
              src={SLIDES[activeSlide].src}
              alt={SLIDES[activeSlide].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-[10px] mt-4" role="tablist" aria-label="Slide indicators">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveSlide(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === activeSlide
                    ? "w-[28px] h-[11px] bg-[#1e1e1e]"
                    : "w-[11px] h-[11px] border-[2px] border-[#1e1e1e] bg-transparent"
                }`}
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-[6px] mt-5">
            <span className="font-[family-name:var(--font-crimson)] font-bold text-[27px] text-ink">
              $19.99
            </span>
            <span className="font-[family-name:var(--font-crimson)] text-[22px] text-ink-warm">
              per monthly edition
            </span>
          </div>

          {/* CTA — Get this Month's Issue */}
          <button
            onClick={handleCTA}
            className="relative mt-4 w-full h-[50px] overflow-hidden rounded-[8px] border-[2.3px] border-[#606060] shadow-[0px_5px_3px_0px_black,0px_6px_9px_0px_rgba(0,0,0,0.25)] hover:shadow-[0px_3px_2px_0px_black,0px_4px_6px_0px_rgba(0,0,0,0.25)] hover:translate-y-px transition-all"
          >
            <div className="absolute inset-0 bg-[#365274] rounded-[5px]" />
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('/images/button-bg.png')] bg-cover bg-center" />
            <span className="relative z-10 font-[family-name:var(--font-crimson)] font-semibold text-[29px] text-[#f8ede7] leading-none">
              Get this Month&apos;s Issue
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
