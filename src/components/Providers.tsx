"use client";

import { SubscriptionModalProvider } from "@/contexts/SubscriptionModalContext";
import SubscriptionModal from "@/components/subscription/SubscriptionModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SubscriptionModalProvider>
      {children}
      <SubscriptionModal />
    </SubscriptionModalProvider>
  );
}
