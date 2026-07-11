import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const INQUIRY_TYPES = [
  "General Inquiry",
  "Subscriptions / Orders",
  "Editorial Desk",
  "Press & Partnerships",
  "Submit a Cartoon",
  "Submit a Headline",
  "Something Went Wrong",
  "Just Saying Hello",
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1e9e4]">
      <Masthead />
      <NavBar />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 py-8">
        <SectionHeader label="Write to the Desk" />

        <div className="grid grid-cols-[1fr_1px_360px] gap-0 pt-8">
          {/* Left: form */}
          <div className="pr-10">
            <p className="font-[family-name:var(--font-crimson)] italic text-[26px] text-[#2a2929] mb-6">
              Questions, thoughts, submissions, or complaints. We read everything. Probably.
            </p>

            <div className="space-y-4 mb-6">
              {["From", "Reply To", "Subject"].map((field) => (
                <div key={field}>
                  <label className="font-[family-name:var(--font-crimson)] font-semibold text-[16px] text-[#1e1e1e] block mb-1">
                    {field}
                  </label>
                  <input
                    type="text"
                    placeholder={field}
                    className="w-full border border-[#1e1e1e] bg-[#f1e9e4] px-3 py-2 font-[family-name:var(--font-crimson)] text-[18px] text-[#1e1e1e] focus:outline-none focus:ring-1 focus:ring-[#2f5082]"
                  />
                </div>
              ))}
              <div>
                <label className="font-[family-name:var(--font-crimson)] font-semibold text-[16px] text-[#1e1e1e] block mb-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full border border-[#1e1e1e] bg-[#f1e9e4] px-3 py-2 font-[family-name:var(--font-crimson)] text-[18px] text-[#1e1e1e] focus:outline-none focus:ring-1 focus:ring-[#2f5082] resize-none"
                />
              </div>
            </div>

            <CTAButton href="#" variant="primary">
              Send to the Desk
            </CTAButton>
          </div>

          {/* Column rule */}
          <div className="bg-[#1e1e1e]" />

          {/* Right: contact info + inquiry type */}
          <div className="pl-10">
            <div className="mb-6">
              <p className="font-[family-name:var(--font-crimson)] font-bold text-[18px] tracking-[2px] uppercase text-[#1e1e1e] mb-2">
                Editorial Office
              </p>
              <p className="font-[family-name:var(--font-crimson)] text-[16px] text-[#2a2929] leading-[1.5]">
                The Cerealist<br />
                1 Breakfast Blvd<br />
                hello@thecerealist.com
              </p>
              <p className="font-[family-name:var(--font-crimson)] italic text-[16px] text-[#2a2929] mt-2">
                Or just send anything.<br />
                We don&apos;t print anything.
              </p>
            </div>

            <div className="border-t border-[#1e1e1e] pt-4">
              <p className="font-[family-name:var(--font-crimson)] font-bold text-[16px] tracking-[1px] uppercase text-[#1e1e1e] mb-3">
                What are you writing about?
              </p>
              <div className="space-y-2">
                {INQUIRY_TYPES.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="inquiry"
                      className="accent-[#2f5082]"
                    />
                    <span className="font-[family-name:var(--font-crimson)] text-[16px] text-[#2a2929]">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
