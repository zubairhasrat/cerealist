import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import CerealCard from "@/components/cereals/CerealCard";

const CEREALS = [
  { name: "Honey Rings", flavor: "Classic honey + oat", price: "$19.99" },
  { name: "Fruit Crunch", flavor: "Tropical fruit medley", price: "$19.99" },
  { name: "Captain in Clusters", flavor: "Sea salt caramel + almond", price: "$19.99" },
  { name: "Cacao Clusters", flavor: "Dark cacao + hazelnut", price: "$19.99" },
];

export default function CerealsPage() {
  return (
    <PageWrapper className="py-8">
      <SectionHeader label="Pick Your Cereal" center />

      <div className="grid grid-cols-4 gap-6 pt-8">
        {CEREALS.map((cereal) => (
          <CerealCard key={cereal.name} {...cereal} />
        ))}
      </div>
    </PageWrapper>
  );
}
