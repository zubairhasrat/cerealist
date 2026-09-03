interface StepPillsProps {
  currentStep: 1 | 2;
}

export default function StepPills({ currentStep }: StepPillsProps) {
  const activeCls =
    "bg-navy-alt text-white border-[1.5px] capitalize border-border-warm rounded-[var(--radius-pill)] px-4 py-1 text-[17px] phone:text-[19px] md:text-[24px] font-semibold uppercase tracking-wide font-[family-name:var(--font-crimson)]";
  const inactiveCls =
    "bg-transparent text-ink border-[1.5px] capitalize border-border-warm rounded-[var(--radius-pill)] px-4 py-1 text-[17px] phone:text-[19px] md:text-[24px] font-semibold uppercase tracking-wide font-[family-name:var(--font-crimson)]";

  return (
    <div className="flex justify-center mb-6">
      <div className="flex items-center gap-0">
        <span className={currentStep === 1 ? activeCls : inactiveCls}>Step 1 Of 2</span>
        <span className="w-8 h-0.5 bg-border-warm mx-2 shrink-0" />
        <span className={currentStep === 2 ? activeCls : inactiveCls}>Step 2 Of 2</span>
      </div>
    </div>
  );
}
