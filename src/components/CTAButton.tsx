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
      "bg-[#324f76] text-[#fbf0ed] border-[#1e1e1e] hover:bg-[#2f5082]",
    secondary:
      "bg-gradient-to-b from-[#efe3d3] to-[#e0d7cc] text-[#1e1e1e] border-[#a69d94] hover:from-[#e8daca] hover:to-[#d6ccbf]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
