"use client";

import { useState } from "react";
import ChoosePlanStep from "./ChoosePlanStep";
import PickCerealStep from "./PickCerealStep";

export default function SubscriptionFlow() {
  const [step, setStep] = useState<1 | 2>(1);
  const [plan, setPlan] = useState<"monthly" | "single" | null>(null);

  return (
    <div className="py-8 mx-auto">
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
