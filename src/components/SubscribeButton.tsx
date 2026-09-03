"use client";

import Link from "next/link";
import { useSubscriptionModal } from "@/contexts/SubscriptionModalContext";

interface SubscribeButtonProps {
  className: string;
  style?: React.CSSProperties;
  size: "desktop" | "mobile";
}

export default function SubscribeButton({ className, style, size }: SubscribeButtonProps) {
  const { open } = useSubscriptionModal();

  // Desktop: open modal. Mobile: navigate to /subscription page.
  if (size === "desktop") {
    return (
      <button
        onClick={open}
        className={className}
        style={style}
      >
        SUBSCRIBE FOR $19/ MONTH
      </button>
    );
  }

  return (
    <Link href="/subscription" className={className} style={style}>
      SUBSCRIBE FOR $19/ MONTH
    </Link>
  );
}
