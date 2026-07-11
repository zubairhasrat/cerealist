import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* CTA banner */}
      <div className="bg-[#f1e9e4] border-t-2 border-b-2 border-[#1e1e1e] py-6 text-center">
        <p className="font-[family-name:var(--font-crimson)] font-bold text-[42px] leading-tight text-[#1e1e1e]">
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
                className="font-[family-name:var(--font-crimson)] font-bold text-[22px] text-[#1e1e1e] hover:underline"
              >
                {item.label}
              </Link>
              {i < arr.length - 1 && (
                <div className="w-px h-5 bg-[#1e1e1e]" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Legal links */}
      <div className="border-t border-[#1e1e1e] py-2 px-6 max-w-[1440px] mx-auto flex items-center gap-6">
        <span className="font-[family-name:var(--font-crimson)] text-[14px] text-[#2a2929]">
          Terms of Service
        </span>
        <span className="font-[family-name:var(--font-crimson)] text-[14px] text-[#2a2929]">
          Privacy Policy
        </span>
        <span className="font-[family-name:var(--font-crimson)] text-[14px] text-[#2a2929]">
          Accessibility
        </span>
      </div>

      {/* Wordmark */}
      <div className="bg-[#1e1e1e] py-8 text-center">
        <p className="font-[family-name:var(--font-crimson)] font-bold text-[80px] leading-none text-[#f1e9e4]">
          &copy; The Cerealist
        </p>
        <div className="border-t border-[#f1e9e4] mt-3 pt-3 max-w-sm mx-auto">
          <p className="font-[family-name:var(--font-crimson)] italic text-[28px] text-[#f1e9e4]">
            Cereal, Grown Up.
          </p>
        </div>
      </div>
    </footer>
  );
}
