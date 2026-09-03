import Image from "next/image";
import StepPills from "./StepPills";

interface ChoosePlanStepProps {
  onSelectPlan: (plan: "monthly" | "single") => void;
}

function CheckIcon() {
  return <Image src="/images/check-mark.png" alt="✓" width={23} height={17} className="shrink-0 mt-0.5" />;
}

export default function ChoosePlanStep({ onSelectPlan }: ChoosePlanStepProps) {
  return (
    <div className="mx-auto px-2">
      <StepPills currentStep={1} />

      <h1 className="text-[41.29px] font-semibold text-ink text-center mb-2 leading-[100%] tracking-[-0.826px]">
        Choose your pick
      </h1>
      <p className="text-[20px] font-normal text-ink-mid text-center mb-6 leading-[127.413%]">
        How would you like to receive The Cerealist?
      </p>

      <div className="flex flex-col gap-4">
        {/* ── Monthly Edition Card ─────────────────────── */}
        <div
          className="relative border-[1.5px] border-black rounded-[11.993px] overflow-hidden cursor-pointer shadow-[0px_3px_3px_black]"
          onClick={() => onSelectPlan("monthly")}
        >
          {/* Paper texture bg */}
          <div className="absolute inset-0 pointer-events-none bg-[url('/images/paper-texture.png')] bg-cover bg-center rotate-1 skew-x-1 scale-105" />

          <div className="relative z-10 px-5 py-5 text-center">
            <p className="text-[34px] phone:text-[38px] font-semibold text-ink leading-none tracking-[-0.667px] mb-2">
              Monthly Edition
            </p>

            <p className="text-[18px] phone:text-[20px] font-normal text-ink-mid mb-2">
              A new issue. A new cereal. Every month.
            </p>

            <div className="flex items-baseline justify-center mb-2">
              <span className="text-[27.991px] phone:text-[32px] font-bold text-ink">$19.99</span>
              <span className="text-[22.955px] phone:text-[26px] font-normal text-ink-warm">/month</span>
            </div>

            {/* Subscribe & Save button */}
            <button
              className="relative h-[44px] phone:h-[50px] w-[80%] overflow-hidden text-center mb-3.5 rounded-[6px] border-[1.799px] border-border-outline shadow-[0px_4.198px_2.399px_0px_black,0px_4.797px_7.196px_0px_rgba(0,0,0,0.25)]"
              onClick={(e) => { e.stopPropagation(); onSelectPlan("monthly"); }}
            >
              <div className="absolute inset-0 bg-navy-mid rounded-[4.414px]" />
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/images/button-bg.png')] bg-cover bg-center" />
              <span className="relative z-10 text-[22px] phone:text-[25px] font-semibold text-footer whitespace-nowrap">
                Subscribe &amp; Save
              </span>
            </button>

            {/* Feature list */}
            <div className="flex justify-center">
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-[17px] phone:text-[19px] font-normal text-ink-mid">Includes every new release</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-[17px] phone:text-[19px] font-normal text-ink-mid">Pause or cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Just This Issue Card ─────────────────────── */}
        <div
          className="relative border-[1.5px] border-black rounded-[11.984px] overflow-hidden cursor-pointer"
          onClick={() => onSelectPlan("single")}
        >
          {/* Paper texture bg */}
          <div className="absolute inset-0 pointer-events-none bg-[url('/images/paper-texture.png')] bg-cover bg-center rotate-1 skew-x-1 scale-105" />

          <div className="relative z-10 px-5 py-5 text-center">
            <p className="text-[34px] phone:text-[38px] font-semibold text-ink leading-none tracking-[-0.667px] mb-2">
              Just This Issue
            </p>

            <p className="text-[18px] phone:text-[20px] font-normal text-ink-mid mb-2">
              One box. One story.
            </p>

            <p className="text-[28px] phone:text-[32px] font-bold text-ink mb-2">
              $28.99
            </p>

            {/* Get This Month's Issue button */}
            <button
              className="relative w-[80%] h-[44px] phone:h-[50px] overflow-hidden text-center mb-2 rounded-[6px] border-[1.798px] border-border-dark shadow-[0px_4.198px_2.399px_0px_black,0px_4.797px_7.196px_0px_rgba(0,0,0,0.25)]"
              onClick={(e) => { e.stopPropagation(); onSelectPlan("single"); }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#EFE3D3] to-[#E0D7CC] rounded-[4.411px] border-[1.448px] border-cream-border" />
              <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('/images/btn-light-beige-bg.png')] bg-cover bg-center" />
              <span className="relative z-10 text-[20px] phone:text-[23px] font-semibold text-black whitespace-nowrap">
                Get This Month&apos;s Issue
              </span>
            </button>

            {/* Feature list */}
            <div className="flex items-center justify-center gap-2">
              <CheckIcon />
              <span className="text-[17px] phone:text-[19px] font-normal text-ink-mid">A one-time purchase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
