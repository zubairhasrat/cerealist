import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import Link from "next/link";

const INSIDE_THIS_EDITION = [
  {
    section: "POLITICS",
    headline: "The War Ends. The Party Starts.",
    blurb: "A cartoonist's view of parades, patriotism, and national birthday parties.",
  },
  {
    section: "SPORTS",
    headline: "New York Knicks Championship Win",
    blurb: "A cartoonist's take on an area dad that can finally stop talking about 1973.",
  },
  {
    section: "THE FUNNIES",
    headline: "Everything is a Superfood",
    blurb: "A cartoonist's view of nutritional inflation.",
  },
  {
    section: "OPINION",
    headline: "Musk Bags a Thousand Billion",
    blurb: "A cartoonist's view of the first man to need a longer calculator.",
  },
];

const WHY_ADULTS = [
  "For people who miss the childhood breakfast experience.",
  "For people who still love print culture.",
  "For people who want a morning ritual that brings back memories.",
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1e9e4]">
      <Masthead />
      <NavBar />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="grid grid-cols-[1fr_1px_480px] gap-0 pt-8 pb-6 border-b-2 border-[#1e1e1e]">
          {/* Left: text */}
          <div className="pr-8">
            <h2 className="font-[family-name:var(--font-crimson)] font-bold text-[64px] leading-[1.0] tracking-[-1px] text-[#1e1e1e] mb-4">
              The Morning Paper, Now on Cereal.
            </h2>
            <p className="font-[family-name:var(--font-crimson)] italic text-[28px] leading-[1.3] text-[#17100e] mb-4">
              A monthly cereal for people who grew up, but never stopped liking cereal.
            </p>
            <div className="border-t border-[#1e1e1e] mb-4" />
            <p className="font-[family-name:var(--font-crimson)] text-[22px] leading-[1.5] text-[#2a2929] mb-4">
              <span className="font-bold text-[60px] leading-none float-left mr-2 mt-1">P</span>
              art breakfast, part cultural digest. Every box is filled with cereal, cartoons
              commentary, and collectible front page energy that&apos;s meant to be read as
              much as it is eaten. Just like cereal always was, only now grown up. A new edition
              arrives every month, current with the headlines you woke up to. Read it over
              breakfast, then keep it. Each one is a small time capsule of the month it belongs to.
            </p>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-[family-name:var(--font-crimson)] font-bold text-[32px] text-[#1e1e1e]">$19.99</span>
              <span className="font-[family-name:var(--font-crimson)] italic text-[22px] text-[#17100e]">per monthly edition</span>
            </div>
            <div className="border-t border-[#1e1e1e] mb-5" />
            <div className="flex flex-col gap-3 max-w-[400px]">
              <CTAButton href="/subscription" variant="primary">
                Get this Month&apos;s Issue
              </CTAButton>
              <CTAButton href="/subscription" variant="secondary">
                Preview Last Month&apos;s Issue
              </CTAButton>
            </div>
          </div>

          {/* Column rule */}
          <div className="bg-[#1e1e1e]" />

          {/* Right: cereal box placeholder */}
          <div className="pl-8 flex items-center justify-center">
            <div className="w-full aspect-[3/4] bg-gradient-to-b from-[#efe3d3] to-[#e0d7cc] border border-[#a69d94] rounded-lg flex flex-col items-center justify-center gap-4 p-6">
              <div className="text-center">
                <p className="font-[family-name:var(--font-crimson)] font-bold text-[24px] text-[#1e1e1e]">The Cerealist</p>
                <p className="font-[family-name:var(--font-crimson)] italic text-[16px] text-[#2a2929]">FOX Kicks Carbon to the Curb</p>
              </div>
              <div className="w-full h-px bg-[#a69d94]" />
              <p className="font-[family-name:var(--font-crimson)] text-[14px] text-[#2a2929] text-center italic">
                [Cereal Box Image]
              </p>
              <div className="w-full h-px bg-[#a69d94]" />
              <p className="font-[family-name:var(--font-crimson)] text-[13px] text-[#2a2929] text-center">
                Climate Policy Power Play<br />Turns &amp; So-Ons
              </p>
            </div>
          </div>
        </section>

        {/* ── OPINION SECTION ──────────────────────────────────── */}
        <section className="pt-6 pb-6 border-b-2 border-[#1e1e1e]">
          <SectionHeader label="Opinion" sublabel="The Editorial Side" center />

          <div className="grid grid-cols-[1fr_1px_1fr] gap-0 pt-6">
            {/* Right editorial */}
            <div className="pr-8">
              <h3 className="font-[family-name:var(--font-crimson)] font-bold text-[52px] leading-[1.0] tracking-[-1px] text-[#1e1e1e] mb-3">
                It Was Never Just About the Cereal
              </h3>
              <p className="font-[family-name:var(--font-crimson)] italic text-[22px] leading-[1.3] text-[#17100e] mb-4">
                How breakfast lost its stories, and what happened next.
              </p>
              <div className="border-t border-[#1e1e1e] mb-3" />
              <p className="font-[family-name:var(--font-crimson)] font-semibold text-[14px] tracking-[2px] text-[#1e1e1e] uppercase mb-4">
                By The Editorial Board
              </p>
            </div>

            <div className="bg-[#1e1e1e]" />

            <div className="pl-8">
              <p className="font-[family-name:var(--font-crimson)] text-[22px] leading-[1.6] text-[#2a2929] mb-4">
                <span className="font-bold text-[56px] leading-none float-left mr-2 mt-1">C</span>
                ereal used to be more than cereal. It was something you wanted to eat, and something
                you wanted to look at. Flavor, color, crunch, alongside games, stories, characters.
                It wasn&apos;t just breakfast. It was an <em>experience</em>.
              </p>
              <blockquote className="border-t border-b border-[#1e1e1e] py-3 my-4 text-center">
                <p className="font-[family-name:var(--font-crimson)] italic text-[26px] text-[#2a2929]">
                  &ldquo;It wasn&apos;t just breakfast. It was an experience.&rdquo;
                </p>
              </blockquote>
              <p className="font-[family-name:var(--font-crimson)] text-[22px] leading-[1.6] text-[#2a2929]">
                As it turns out, that&apos;s not a small thing to lose. We brought it back, just{" "}
                <em>differently</em>. The Cerealist is the adult version of what cereal always was,
                something delicious and something entertaining, only now the entertainment grew up too.
                Instead of games and mascots, it&apos;s cartoons, commentary, and headlines.
              </p>
            </div>
          </div>
        </section>

        {/* ── INSIDE THIS MONTH'S EDITION ──────────────────────── */}
        <section className="pt-6 pb-6 border-b-2 border-[#1e1e1e]">
          <SectionHeader label="Inside This Month's Edition" center />

          <div className="grid grid-cols-4 pt-6">
            {INSIDE_THIS_EDITION.map((item, i) => (
              <div
                key={item.section}
                className={`px-5 ${i < 3 ? "border-r border-[#1e1e1e]" : ""}`}
              >
                <p className="font-[family-name:var(--font-crimson)] font-bold text-[14px] tracking-[2px] text-[#2f5082] uppercase mb-2">
                  {item.section}
                </p>
                <h4 className="font-[family-name:var(--font-crimson)] font-bold text-[24px] leading-[1.2] text-[#1e1e1e] mb-3">
                  {item.headline}
                </h4>
                <div className="border-t border-[#1e1e1e] mb-3" />
                <p className="font-[family-name:var(--font-crimson)] text-[18px] leading-[1.5] text-[#2a2929]">
                  {item.blurb}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY ADULTS LOVE THE CEREALIST ────────────────────── */}
        <section className="pt-6 pb-6 border-b-2 border-[#1e1e1e]">
          <SectionHeader label="Why Adults Love The Cerealist" center />

          <div className="flex items-center justify-center gap-6 pt-6">
            {WHY_ADULTS.map((text) => (
              <div
                key={text}
                className="bg-[rgba(233,219,203,0.3)] border border-[#7f7c7c] rounded-[18px] px-8 py-5 flex-1 max-w-[320px] text-center"
              >
                <p className="font-[family-name:var(--font-crimson)] text-[18px] leading-[1.4] text-[#2a2929]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SOCIAL FOLLOW ────────────────────────────────────── */}
        <section className="pt-6 pb-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {["Facebook", "Instagram", "TikTok", "X"].map((platform) => (
              <div
                key={platform}
                className="w-12 h-12 rounded-full bg-[#1e1e1e] flex items-center justify-center"
                title={platform}
              >
                <span className="text-[#f1e9e4] text-[11px] font-semibold">
                  {platform[0]}
                </span>
              </div>
            ))}
          </div>
          <p className="font-[family-name:var(--font-crimson)] text-[20px] text-[#1e1e1e] text-center">
            Follow, Post, &amp; Tag{" "}
            <Link href="#" className="font-semibold hover:underline">
              @theCerealist
            </Link>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
