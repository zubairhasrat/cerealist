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
  inverse?: boolean;
}

export default function DoubleRule({
  color = "var(--color-ink)",
  thickWidth = 3,
  thinWidth = 2,
  gap = "mt-1.5",
  className,
  inverse = false,
}: DoubleRuleProps) {
  if (inverse) {
    return (
      <div className={className}>
        <RuleLine strokeWidth={thinWidth} color={color} height={Math.ceil(thinWidth)}  />
        <RuleLine strokeWidth={thickWidth} color={color} height={Math.ceil(thickWidth)} className={gap} />
      </div>
    );
  }
  return (
    <div className={className}>
      <RuleLine strokeWidth={thickWidth} color={color} height={Math.ceil(thickWidth)} />
      <RuleLine strokeWidth={thinWidth} color={color} height={Math.ceil(thinWidth)} className={gap} />
    </div>
  );
}
