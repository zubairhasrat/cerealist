"use client";

import { useState } from "react";
import ChoosePlanStep from "./ChoosePlanStep";
import PickCerealStep from "./PickCerealStep";

export default function SubscriptionFlow() {
  const [step, setStep] = useState<1 | 2>(1);
  const [plan, setPlan] = useState<"monthly" | "single" | null>(null);

  return (
    <div className="pt-8 pb-8 md:pb-24 mx-auto max-w-[420px] lg:max-w-[1100px] lg:px-4">
      {step === 1 && (
        <ChoosePlanStep
          onSelectPlan={(p) => {
            setPlan(p);
            setStep(2);
          }}
        />
      )}
      {step === 2 && plan && (
        <PickCerealStep
          plan={plan}
          onCheckout={() => {
            // TODO: redirect to Shopify
          }}
        />
      )}
    </div>
  );
}
