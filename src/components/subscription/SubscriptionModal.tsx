"use client";

import { useEffect } from "react";
import { useSubscriptionModal } from "@/contexts/SubscriptionModalContext";
import SubscriptionFlow from "./SubscriptionFlow";

export default function SubscriptionModal() {
  const { isOpen, close } = useSubscriptionModal();

  // Lock body scroll when open
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 py-6 overflow-y-auto"
      onClick={close}
    >
      {/* Modal container */}
      <div
        className="relative w-full max-w-[420px] lg:max-w-[1100px] my-auto rounded-[20px] lg:rounded-[30px] border border-black overflow-hidden bg-[url('/images/paper-texture.png')] bg-cover"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-[url('/images/paper-texture.png')] bg-cover opacity-90 pointer-events-none rounded-[20px] lg:rounded-[30px]" />

        {/* Inner border — matches Figma */}
        <div className="absolute inset-[12px] rounded-[14px] lg:rounded-[20px] border border-black/20 pointer-events-none" />

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-[10px] right-[10px] lg:top-5 lg:right-5 z-20 w-[32px] h-[32px] lg:w-[36px] lg:h-[36px] rounded-full border border-black/60 bg-white/30 hover:bg-white/60 flex items-center justify-center transition-colors shrink-0"
          aria-label="Close"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="lg:w-[18px] lg:h-[18px]"
          >
            <path
              d="M1 1L15 15M15 1L1 15"
              stroke="#1e1e1e"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Subscription flow content */}
        <div className="relative z-10">
          <SubscriptionFlow />
        </div>
      </div>
    </div>
  );
}
