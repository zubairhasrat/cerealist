"use client";

import { useEffect, useState } from "react";
import CTAButton from "@/components/CTAButton";
import PreviewIssueButton from "@/components/home/PreviewIssueButton";

export default function StickyCTABar() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`block md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        footerVisible ? "translate-y-full" : "translate-y-0"
      }`}
      style={{
        backgroundColor: "#f1e9e4",
        backgroundImage: "url('/images/btn-light-beige-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <hr className="border-ink border-t border-b-0 mx-0" />
      <div className="px-4 pt-3 pb-5">
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="font-[family-name:var(--font-crimson)] font-bold text-[28px] text-ink">
            $19.99
          </span>
          <span className="font-[family-name:var(--font-crimson)] italic text-[20px] text-ink-warm">
            per monthly edition
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <CTAButton
            href="/subscription"
            variant="hero-dark"
            size="full"
            className="text-[22px] px-8 py-3 text-center"
          >
            Get this Month&apos;s Issue
          </CTAButton>
          <PreviewIssueButton className="px-8 py-3" />
        </div>
      </div>
    </div>
  );
}
