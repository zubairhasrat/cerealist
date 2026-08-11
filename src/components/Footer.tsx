import Image from "next/image";
import Link from "next/link";
import ContentContainer from "./ui/ContentContainer";

const NAV_ITEMS = [
  { label: "Cereal", href: "/cereals" },
  { label: "Granola", href: "/cereals" },
  { label: "Contact the Desk", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-auto md:px-10">
      {/* ── Promo strip: headline + cereal box ─────────────────── */}
      <div className="bg-paper">
        <ContentContainer className="px-4 md:px-[30px]">
          <div className="relative flex items-end pt-6 pb-0">
            {/* Headline */}
            <h2 className="font-[family-name:var(--font-crimson)] font-bold text-[32px] md:text-[78px] leading-[1.1] text-ink max-w-[55%] pb-4">
              The Morning Paper,<br />Now on Cereal!
            </h2>

            {/* Cereal box — top-right, overflows into nav bar slightly */}
            <div className="absolute right-0 bottom-0 w-[42%] md:w-[45%] max-w-[443px]">
              <Image
                src="/images/footer-cerealist-box.png"
                alt="The Cerealist newspaper"
                width={360}
                height={420}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </ContentContainer>
      </div>

      {/* ── Footer nav bar ─────────────────────────────────────── */}
      <div
        className="w-full py-[14px] relative z-10"
        style={{
          backgroundImage: "url('/images/button-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ContentContainer className="px-4 md:px-[30px] flex items-center gap-0">
          {NAV_ITEMS.map((item, i) => (
            <span key={item.label} className="flex items-center md:ml-6">
              {i > 0 && (
                <span className="mx-6 md:mx-10 w-[2px] h-[24px] bg-cream-light block shrink-0" />
              )}
              <Link
                href={item.href}
                className="font-[family-name:var(--font-crimson)] font-semibold text-[20px] md:text-[27px] leading-none text-cream-light hover:opacity-75 whitespace-nowrap"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </ContentContainer>
      </div>

      {/* ── Footer body ────────────────────────────────────────── */}
      <div className="pt-4 pb-10">
        <ContentContainer>
          {/* Legal links — left-aligned, uppercase */}
          <div className="flex gap-4 md:gap-8 py-3 mb-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-crimson)] font-semibold text-[13px] md:text-[17px] uppercase tracking-widest text-ink hover:opacity-75 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Wordmark + tagline — centered, tagline lines match wordmark width */}
          <div className="flex flex-col items-center mx-auto w-fit mt-6 md:mt-[90px]">
            {/* © + wordmark image — © vertically centered */}
            <div className="flex items-center">
              <span className="font-[family-name:var(--font-crimson)] font-bold text-[40px] md:text-[70px] leading-none text-ink shrink-0">
                ©
              </span>
              <Image
                src="/images/the-cerealist-text.png"
                alt="The Cerealist"
                width={900}
                height={140}
                className="h-auto w-full max-w-[240px] md:max-w-[580px] lg:max-w-[820px]"
              />
            </div>

            {/* Tagline — constrained to same width as wordmark row above */}
            <div className="flex items-center gap-3 md:gap-6 w-full mt-2">
              <hr className="flex-1 border-ink border-[1.5px]" />
              <span className="font-[family-name:var(--font-crimson)] font-semibold text-[18px] md:text-[28px] text-ink whitespace-nowrap">
                Cereal, Grown Up.
              </span>
              <hr className="flex-1 border-ink border-[1.5px]" />
            </div>
          </div>
        </ContentContainer>
      </div>
    </footer>
  );
}
