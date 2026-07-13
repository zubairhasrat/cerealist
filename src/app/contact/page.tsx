import PageWrapper from "@/components/PageWrapper";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export default function ContactPage() {
  return (
    <PageWrapper className="py-8">
      <SectionHeader label="Write to the Desk" />

      <div className="grid grid-cols-[1fr_1px_360px] gap-0 pt-8">
        <ContactForm />
        <div className="bg-ink" />
        <ContactSidebar />
      </div>
    </PageWrapper>
  );
}
