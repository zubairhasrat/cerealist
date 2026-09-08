"use client";

import { SubscriptionModalProvider } from "@/contexts/SubscriptionModalContext";
import { PreviewIssueModalProvider } from "@/contexts/PreviewIssueModalContext";
import SubscriptionModal from "@/components/subscription/SubscriptionModal";
import PreviewIssueModal from "@/components/subscription/PreviewIssueModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SubscriptionModalProvider>
      <PreviewIssueModalProvider>
        {children}
        <SubscriptionModal />
        <PreviewIssueModal />
      </PreviewIssueModalProvider>
    </SubscriptionModalProvider>
  );
}
