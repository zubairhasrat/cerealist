import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const EDITIONS = [
  {
    name: "Monthly Edition",
    price: "$19.99",
    description: "One box of cereal + the month's front page, delivered monthly.",
  },
  {
    name: "Just This Issue",
    price: "$22.99",
    description: "A single issue, no commitment. Great for gifts.",
  },
];

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1e9e4]">
      <Masthead />
      <NavBar />

      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-12">
        <div className="border-2 border-[#1e1e1e] bg-[#f1e9e4] p-10">
          <div className="border-b-2 border-[#1e1e1e] pb-6 mb-8 text-center">
            <h1 className="font-[family-name:var(--font-crimson)] font-bold text-[48px] text-[#1e1e1e] leading-none">
              Choose Your Edition
            </h1>
            <p className="font-[family-name:var(--font-crimson)] italic text-[22px] text-[#2a2929] mt-2">
              Select the plan that&apos;s right for you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {EDITIONS.map((edition) => (
              <div
                key={edition.name}
                className="border border-[#1e1e1e] p-6 cursor-pointer hover:bg-[rgba(233,219,203,0.4)] transition-colors"
              >
                <h2 className="font-[family-name:var(--font-crimson)] font-bold text-[28px] text-[#1e1e1e] mb-1">
                  {edition.name}
                </h2>
                <p className="font-[family-name:var(--font-crimson)] font-semibold text-[24px] text-[#2f5082] mb-3">
                  {edition.price}
                </p>
                <p className="font-[family-name:var(--font-crimson)] text-[18px] text-[#2a2929]">
                  {edition.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTAButton href="/checkout" variant="primary">
              Subscribe Now
            </CTAButton>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
