import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* CTA banner */}
      <div className="bg-paper border-t-2 border-b-2 border-ink py-6 text-center">
        <p className="font-[family-name:var(--font-crimson)] font-bold text-[42px] leading-tight text-ink">
          The Morning Paper,<br />Now on Cereal!
        </p>
        <div className="flex items-center justify-center gap-8 mt-3">
          {[
            { label: "Cereal", href: "/cereals" },
            { label: "Granola", href: "/cereals" },
            { label: "Contact the Desk", href: "/contact" },
          ].map((item, i, arr) => (
            <span key={item.href} className="flex items-center gap-8">
              <Link
                href={item.href}
                className="font-[family-name:var(--font-crimson)] font-bold text-[22px] text-ink hover:underline"
              >
                {item.label}
              </Link>
              {i < arr.length - 1 && (
                <div className="w-px h-5 bg-ink" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Legal links */}
      <div className="border-t border-ink py-2 px-6 max-w-[1440px] mx-auto flex items-center gap-6">
        <span className="font-[family-name:var(--font-crimson)] text-[14px] text-ink-mid">
          Terms of Service
        </span>
        <span className="font-[family-name:var(--font-crimson)] text-[14px] text-ink-mid">
          Privacy Policy
        </span>
        <span className="font-[family-name:var(--font-crimson)] text-[14px] text-ink-mid">
          Accessibility
        </span>
      </div>

      {/* Wordmark */}
      <div className="bg-ink py-8 text-center">
        <p className="font-[family-name:var(--font-crimson)] font-bold text-[80px] leading-none text-paper">
          &copy; The Cerealist
        </p>
        <div className="border-t border-paper mt-3 pt-3 max-w-sm mx-auto">
          <p className="font-[family-name:var(--font-crimson)] italic text-[28px] text-paper">
            Cereal, Grown Up.
          </p>
        </div>
      </div>
    </footer>
  );
}
