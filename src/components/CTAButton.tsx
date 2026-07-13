import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "font-[family-name:var(--font-crimson)] font-semibold text-[22px] px-6 py-3 rounded-[9px] border transition-colors block w-full text-center";

  const variants = {
    primary:
      "bg-navy-dark text-cream-light border-ink hover:bg-navy",
    secondary:
      "bg-gradient-to-b from-cream-fill to-cream-fill-dark text-ink border-cream-border hover:from-cream-fill-hover hover:to-cream-fill-dark-hover",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
