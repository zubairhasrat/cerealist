import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1e9e4]">
      <Masthead />
      <NavBar />
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 py-8">
        <SectionHeader label="Privacy Policy" />
        <div className="pt-6 font-[family-name:var(--font-crimson)] text-[20px] leading-[1.7] text-[#2a2929] space-y-4">
          <p>We collect only what we need to deliver your cereal and keep you informed.</p>
          <p>We do not sell your data. Ever.</p>
          <p>
            For questions, write to us at{" "}
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
