import RuleLine from "./RuleLine";

interface DoubleRuleProps {
  color?: string;
  /** strokeWidth for the thick (top) line */
  thickWidth?: number;
  /** strokeWidth for the thin (bottom) line */
  thinWidth?: number;
  /** gap between lines as a Tailwind margin class, e.g. "mt-1", "mt-2" */
  gap?: string;
  className?: string;
}

export default function DoubleRule({
  color = "var(--color-ink)",
  thickWidth = 3,
  thinWidth = 2,
  gap = "mt-1.5",
  className,
}: DoubleRuleProps) {
  return (
    <div className={className}>
      <RuleLine strokeWidth={thickWidth} color={color} height={Math.ceil(thickWidth)} />
      <RuleLine strokeWidth={thinWidth} color={color} height={Math.ceil(thinWidth)} className={gap} />
    </div>
  );
}
