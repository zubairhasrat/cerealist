import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1e9e4]">
      <Masthead />
      <NavBar />
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 py-8">
        <SectionHeader label="Terms of Service" />
        <div className="pt-6 font-[family-name:var(--font-crimson)] text-[20px] leading-[1.7] text-[#2a2929] space-y-4">
          <p>By subscribing to The Cerealist, you agree to receive one box of cereal per month.</p>
          <p>Cancel anytime with no commitments, no fees, no hard feelings.</p>
          <p>
            Questions? Reach us at{" "}
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
