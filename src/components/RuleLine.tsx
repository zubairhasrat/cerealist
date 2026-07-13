interface RuleLineProps {
  strokeWidth?: number;
  color?: string;
  height?: number;
  className?: string;
}

export default function RuleLine({
  strokeWidth = 2,
  color = "var(--color-ink)",
  height = 3,
  className,
}: RuleLineProps) {
  const mid = height / 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height={height}
      viewBox={`0 0 1383 ${height}`}
      preserveAspectRatio="none"
      fill="none"
      className={className}
    >
      <path d={`M0 ${mid}H1383`} stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}
