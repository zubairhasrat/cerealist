"use client";

import { createContext, useContext, useState } from "react";

interface PreviewIssueModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const PreviewIssueModalContext = createContext<PreviewIssueModalContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function PreviewIssueModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PreviewIssueModalContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </PreviewIssueModalContext.Provider>
  );
}

export function usePreviewIssueModal() {
  return useContext(PreviewIssueModalContext);
}
