import CTAButton from "@/components/CTAButton";

const TEXT_FIELDS = ["From", "Reply To", "Subject"];

export default function ContactForm() {
  return (
    <div className="pr-10">
      <p className="font-[family-name:var(--font-crimson)] italic text-[26px] text-ink-mid mb-6">
        Questions, thoughts, submissions, or complaints. We read everything. Probably.
      </p>

      <div className="space-y-4 mb-6">
        {TEXT_FIELDS.map((field) => (
          <div key={field}>
            <label className="font-[family-name:var(--font-crimson)] font-semibold text-[16px] text-ink block mb-1">
              {field}
            </label>
            <input
              type="text"
              placeholder={field}
              className="w-full border border-ink bg-paper px-3 py-2 font-[family-name:var(--font-crimson)] text-[18px] text-ink focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>
        ))}
        <div>
          <label className="font-[family-name:var(--font-crimson)] font-semibold text-[16px] text-ink block mb-1">
            Message
          </label>
          <textarea
            rows={6}
            placeholder="Write your message here..."
            className="w-full border border-ink bg-paper px-3 py-2 font-[family-name:var(--font-crimson)] text-[18px] text-ink focus:outline-none focus:ring-1 focus:ring-navy resize-none"
          />
        </div>
      </div>

      <CTAButton href="#" variant="primary">
        Send to the Desk
      </CTAButton>
    </div>
  );
}
