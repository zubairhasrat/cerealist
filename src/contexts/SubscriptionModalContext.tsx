"use client";

import { createContext, useContext, useState } from "react";

interface SubscriptionModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SubscriptionModalContext = createContext<SubscriptionModalContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function SubscriptionModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SubscriptionModalContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </SubscriptionModalContext.Provider>
  );
}

export function useSubscriptionModal() {
  return useContext(SubscriptionModalContext);
}
