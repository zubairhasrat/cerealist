const INQUIRY_TYPES = [
  "General Inquiry",
  "Subscriptions / Orders",
  "Editorial Desk",
  "Press & Partnerships",
  "Submit a Cartoon",
  "Submit a Headline",
  "Something Went Wrong",
  "Just Saying Hello",
];

export default function ContactSidebar() {
  return (
    <div className="pl-10">
      <div className="mb-6">
        <p className="font-[family-name:var(--font-crimson)] font-bold text-[18px] tracking-[2px] uppercase text-ink mb-2">
          Editorial Office
        </p>
        <p className="font-[family-name:var(--font-crimson)] text-[16px] text-ink-mid leading-[1.5]">
          The Cerealist<br />
          1 Breakfast Blvd<br />
          hello@thecerealist.com
        </p>
        <p className="font-[family-name:var(--font-crimson)] italic text-[16px] text-ink-mid mt-2">
          Or just send anything.<br />
          We don&apos;t print anything.
        </p>
      </div>

      <div className="border-t border-ink pt-4">
        <p className="font-[family-name:var(--font-crimson)] font-bold text-[16px] tracking-[1px] uppercase text-ink mb-3">
          What are you writing about?
        </p>
        <div className="space-y-2">
          {INQUIRY_TYPES.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="inquiry" className="accent-navy" />
              <span className="font-[family-name:var(--font-crimson)] text-[16px] text-ink-mid">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
