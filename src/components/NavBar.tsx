import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-[#f1e9e4] border-b border-[#1e1e1e]">
      <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center gap-6">
        {/* Date */}
        <span className="font-[family-name:var(--font-crimson)] italic text-[16px] text-[#1e1e1e] shrink-0">
          Wednesday, March 25, 2026
        </span>

        {/* Divider */}
        <div className="w-px h-5 bg-[#1e1e1e] shrink-0" />

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {[
            { label: "Home", href: "/" },
            { label: "Cartoons", href: "#cartoons" },
            { label: "Contact the Desk", href: "/contact" },
          ].map((item, i, arr) => (
            <span key={item.href} className="flex items-center gap-6">
              <Link
                href={item.href}
                className="font-[family-name:var(--font-crimson)] text-[18px] text-[#1e1e1e] hover:underline whitespace-nowrap"
              >
                {item.label}
              </Link>
              {i < arr.length - 1 && (
                <div className="w-px h-4 bg-[#1e1e1e]" />
              )}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        {/* CTA */}
        <Link
          href="/subscription"
          className="bg-[#365274] text-[#fbf0ed] font-[family-name:var(--font-crimson)] font-semibold text-[16px] px-4 py-1.5 rounded-[6px] hover:bg-[#2f5082] transition-colors whitespace-nowrap"
        >
          Get this Month&apos;s Issue
        </Link>
      </div>
    </nav>
  );
}
