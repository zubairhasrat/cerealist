'use client';

import { useState } from 'react';
import RuleLine from '@/components/RuleLine';

const INQUIRY_TYPES = [
  'General Inquiry',
  'Subscription/ Orders',
  'Press & Partnerships',
  'Submit a Cartoon',
  'Submit a Headline',
  'Something Went Wrong',
  'Just Saying Hello',
];

export default function ContactForm() {
  const [selected, setSelected] = useState('General Inquiry');

  return (
    <form onSubmit={(e) => e.preventDefault()}>

      {/* ── Top section: radio (left) + sidebar (right) ── */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_240px] md:gap-8 mb-7">

        {/* Radio column */}
        <div>
          <p className="font-crimson font-semibold text-[25.98px] md:text-[35px] lg:text-[40px] tracking-[-0.52px] md:tracking-normal text-ink mb-3">
            What are you writing about?
          </p>
          <div className="flex flex-col gap-[6px]">
            {INQUIRY_TYPES.map((type) => (
              <label
                key={type}
                className="flex items-center gap-[14px] h-[42px] px-4 cursor-pointer rounded-[4.9px]"
                style={{
                  border: '1.946px solid #9f9593',
                  background: 'rgba(221, 211, 209, 0.20)',
                }}
              >
                <input
                  type="radio"
                  name="inquiry"
                  value={type}
                  checked={selected === type}
                  onChange={() => setSelected(type)}
                  className="w-[17.5px] h-[17.5px] shrink-0 accent-ink cursor-pointer"
                />
                <span className="font-crimson font-semibold text-[24.27px] tracking-[-0.485px] md:tracking-normal text-ink leading-none">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Editorial Office sidebar — desktop only */}
        <div className="hidden md:block">
          <div className="p-4" style={{ border: '2px solid #ADA39E', background: 'rgba(217, 200, 185, 0.20)' }}>
            <p className="font-crimson font-bold leading-[-1.241px] text-[28px] text-ink mb-3">
              Editorial Office
            </p>
            <p className="font-crimson text-[18px] text-ink leading-normal mb-3">
              <span className='text-[20px] font-semibold'>The Cerealist</span><br />
              Editorial Desk<br />
              Breakfast Dvision
            </p>
            <p className="font-crimson text-[18px] text-ink leading-normal mb-3">
              41 Breakfast Blvd.<br />
              New York, NY 10028
            </p>
            <p className="font-crimson text-[18px] text-ink leading-normal mb-3">
              hello@thecerealist.com<br />
              Mornings, mostly.
            </p>
            <div className="pt-3" style={{ borderTop: '1.5px solid #ADA39E' }}>
              <p className="font-crimson italic text-[18px] text-ink leading-[1.6]">
                We read everything.<br />
                We don&apos;t print everything.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── From ── */}
      <div className="mb-1">
        <p className="font-crimson font-semibold text-[25.4px] tracking-[-0.508px] md:tracking-normal text-ink">
          From
        </p>
        <input
          type="text"
          name="from"
          className="w-full border-b border-ink bg-transparent font-crimson text-[18px] text-ink focus:outline-none"
        />
      </div>

      {/* ── Reply-To ── */}
      <div className="mt-6 md:mt-4 mb-2">
        <p className="font-crimson font-semibold text-[25.4px] tracking-[-0.508px] md:tracking-normal text-ink">
          Reply-To
        </p>
        <input
          type="email"
          name="replyTo"
          className="w-full border-b border-ink bg-transparent py font-crimson text-[18px] text-ink focus:outline-none"
        />
      </div>

      {/* <DoubleRule className="mt-8 md:mt-5 mb-5 md:mb-4" thickWidth={1} thinWidth={1} gap="mt-[33px] md:mt-1" /> */}

      {/* ── Subject ── */}
      <div className="mb-2">
        <p className="font-crimson font-semibold text-[25.4px] tracking-[-0.508px] md:tracking-normal text-ink mb-3 md:mb-1">
          Subject
        </p>
      </div>

      {/* Textarea — bordered box with inset ruled lines */}
      <div
        className="relative mb-8"
        style={{
          border: '1.5px solid rgba(69, 61, 58, 0.90)',
          backgroundImage:
            'linear-gradient(transparent calc(2em - 1px), var(--color-border-input) calc(2em - 1px))',
          backgroundSize: 'calc(100% - 24px) 2em',
          backgroundPosition: '12px 0',
          backgroundRepeat: 'repeat-y',
        }}
      >
        <textarea
          name="message"
          rows={9}
          className="relative w-full bg-transparent font-crimson text-[18px] text-ink focus:outline-none resize-none px-3 py-2"
          style={{ lineHeight: '2em' }}
        />
      </div>

      {/* ── Send button ── */}
      <div className="flex justify-center pb-5">
        <button
          type="submit"
          className="font-crimson font-semibold text-[29.75px] md:text-[38px] px-10 py-2 w-full max-w-[400px] text-ink cursor-pointer"
          style={{
            border: '2.304px solid #564c49',
            borderRadius: '7.679px',
            backgroundImage: "url('/images/btn-light-beige-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '1px 3px 0px 0px #000',
          }}
        >
          Send to the Desk
        </button>
      </div>

      <RuleLine />
    </form>
  );
}
