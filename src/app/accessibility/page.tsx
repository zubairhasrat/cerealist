import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1e9e4]">
      <Masthead />
      <NavBar />
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 py-8">
        <SectionHeader label="Accessibility Statement" />
        <div className="pt-6 font-[family-name:var(--font-crimson)] text-[20px] leading-[1.7] text-[#2a2929] space-y-4">
          <p>
            At The Cerealist, we believe everyone deserves a strong start to their day. We are
            committed to providing an inclusive and accessible experience for all visitors.
          </p>
          <p>
            We actively work to meet WCAG 2.1 Level AA standards. If you encounter any
            accessibility barriers, please contact us at{" "}
            <a href="mailto:hello@thecerealist.com" className="underline text-[#2f5082]">
              hello@thecerealist.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
