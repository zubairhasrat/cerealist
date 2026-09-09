import PageWrapper from "@/components/PageWrapper";
import HeroSection from "@/components/home/HeroSection";
import OpinionSection from "@/components/home/OpinionSection";
import EditionSection from "@/components/home/EditionSection";
import WhyAdultsSection from "@/components/home/WhyAdultsSection";
import SocialFollowSection from "@/components/home/SocialFollowSection";
import StickyCTABar from "@/components/home/StickyCTABar";

export default function HomePage() {
  return (
    <PageWrapper
      outerClassName="bg-no-repeat"
      // outerStyle={{
      //   backgroundImage: "url('/images/home-bg.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "top center",
      // }}
      className="pb-[148px] md:pb-0"
    >
      <HeroSection />
      <OpinionSection />
      <EditionSection />
      <WhyAdultsSection />
      <SocialFollowSection />
      <StickyCTABar />
    </PageWrapper>
  );
}
