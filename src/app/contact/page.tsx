import PageWrapper from '@/components/PageWrapper';
import RuleLine from '@/components/RuleLine';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="w-full px-3 md:px-8 pt-8 md:pb-28">
        {/* Heading — centered mobile, left desktop */}
        <h1 className="font-crimson font-semibold text-[41px] md:text-[56px] lg:text-[60px] leading-none tracking-[-0.826px] md:tracking-normal text-ink mb-2 text-center md:text-left">
          Write to the desk.
        </h1>
        <p className="font-crimson text-[20px] md:text-[26px] text-ink-mid mb-6 text-center md:text-left">
          Questions, thoughts, submissions, or complaints worth printing.
        </p>

        <RuleLine className="mb-8" />

        <ContactForm />
      </div>
    </PageWrapper>
  );
}
