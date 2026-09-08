"use client";

import { usePreviewIssueModal } from "@/contexts/PreviewIssueModalContext";

interface PreviewIssueButtonProps {
  className?: string;
}

export default function PreviewIssueButton({ className = "" }: PreviewIssueButtonProps) {
  const { open } = usePreviewIssueModal();

  return (
    <button
      onClick={open}
      className={`font-[family-name:var(--font-crimson)] font-semibold text-[22px] px-6 py-3 rounded-[10px] border border-ink text-ink block w-full text-center shadow-[1px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-px hover:translate-y-px active:shadow-none active:translate-x-[2px] active:translate-y-[2px] overflow-hidden transition-all ${className}`}
      style={{
        backgroundImage: "url('/images/btn-light-beige-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      Preview Last Month&apos;s Issue
    </button>
  );
}
