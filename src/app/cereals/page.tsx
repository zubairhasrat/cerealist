import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const CEREALS = [
  { name: "Honey Rings", flavor: "Classic honey + oat", price: "$19.99" },
  { name: "Fruit Crunch", flavor: "Tropical fruit medley", price: "$19.99" },
  { name: "Captain in Clusters", flavor: "Sea salt caramel + almond", price: "$19.99" },
  { name: "Cacao Clusters", flavor: "Dark cacao + hazelnut", price: "$19.99" },
];

export default function CerealsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1e9e4]">
      <Masthead />
      <NavBar />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 py-8">
        <SectionHeader label="Pick Your Cereal" center />

        <div className="grid grid-cols-4 gap-6 pt-8">
          {CEREALS.map((cereal) => (
            <div key={cereal.name} className="border border-[#1e1e1e] bg-[#f1e9e4] p-5">
              <div className="aspect-square bg-gradient-to-b from-[#efe3d3] to-[#e0d7cc] border border-[#a69d94] mb-4 flex items-center justify-center">
                <span className="font-[family-name:var(--font-crimson)] italic text-[14px] text-[#a69d94]">
                  [Image]
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-crimson)] font-bold text-[24px] text-[#1e1e1e] mb-1">
                {cereal.name}
              </h3>
              <p className="font-[family-name:var(--font-crimson)] italic text-[16px] text-[#2a2929] mb-3">
                {cereal.flavor}
              </p>
              <div className="border-t border-[#1e1e1e] mb-3" />
              <div className="flex items-center justify-between mb-4">
                <span className="font-[family-name:var(--font-crimson)] font-semibold text-[22px] text-[#1e1e1e]">
                  {cereal.price}
                </span>
              </div>
              <CTAButton href="/checkout" variant="primary">
                Add to Box
              </CTAButton>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
