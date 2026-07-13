import SectionHeader from "@/components/SectionHeader";
import EditionCard from "./EditionCard";

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

export default function EditionSection() {
  return (
    <section className="pt-6 pb-6 border-b-2 border-ink">
      <SectionHeader label="Inside This Month's Edition" center />

      <div className="grid grid-cols-4 pt-6">
        {INSIDE_THIS_EDITION.map((item, i) => (
          <EditionCard
            key={item.section}
            item={item}
            bordered={i < INSIDE_THIS_EDITION.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
