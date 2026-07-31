import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "hero-dark" | "hero-light";
  size?: "full" | "auto";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "full",
  className = "",
}: CTAButtonProps) {
  const base =
    "font-[family-name:var(--font-crimson)] font-semibold text-[22px] px-6 py-3 rounded-[9px] border transition-all text-center";

  const sizeClass = size === "full" ? "block w-full" : "inline-block";

  const variants = {
    primary:
      "bg-navy-dark text-cream-light border-ink hover:bg-navy",
    secondary:
      "bg-gradient-to-b from-cream-fill to-cream-fill-dark text-ink border-cream-border hover:from-cream-fill-hover hover:to-cream-fill-dark-hover",
    "hero-dark":
      "text-cream-light border-ink rounded-[10px] shadow-[1px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-px hover:translate-y-px overflow-hidden",
    "hero-light":
      "text-ink border-ink rounded-[10px] shadow-[1px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-px hover:translate-y-px overflow-hidden",
  };

  const bgStyles: Record<string, React.CSSProperties> = {
    "hero-dark": {
      backgroundImage: "url('/images/button-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    "hero-light": {
      backgroundImage: "url('/images/btn-light-beige-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizeClass} ${variants[variant]} ${className}`}
      style={bgStyles[variant]}
    >
      {children}
    </Link>
  );
}
