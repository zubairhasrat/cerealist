# Spec 12: Contact Form — "Write to the Desk"

## Goal

Implement the "Write to the Desk" contact form page with topic radio selection, text fields, message textarea, and submit button. UI only in v1 — no email sending backend.

## Design

Figma node: `5692:5439` (desktop), `6503:809` (mobile).

## Layout

Page heading: "Write to the Desk" — display serif.

Form fields stacked vertically with 33px gap between field groups.

### Topic Radio Group

Label: "Topic" or section label above the group.

7 radio options in pill/card style (each 351×42px, radius-sm, bg `--bg-input`, border 1.9px `--border-input`):
1. General Inquiry
2. Subscription / Orders
3. Press & Partnerships
4. Submit a Cartoon
5. Submit a Headline
6. Something Went Wrong
7. Just Saying Hello

Each radio item: 24px / SemiBold. Custom styled — hide native radio, show selected state via background or border change.

### Text Inputs

Three inputs (351×42px, radius-sm, bg `--bg-input`, border 1.9px `--border-input`, label 25px / SemiBold above each):
- **From**: text input, `name="from"`, `id="from"`, `<label htmlFor="from">From</label>`
- **Reply-To**: email input, `name="replyTo"`, `id="replyTo"`, `<label htmlFor="replyTo">Reply-To</label>`
- **Subject**: text input, `name="subject"`, `id="subject"`, `<label htmlFor="subject">Subject</label>`

### Message Textarea

351×337px, no border-radius (0px), transparent background, border 1.2px `#453D3A`.
No label text in Figma — add visually-hidden `<label>` for accessibility: "Message".

### Submit Button

"Send to the Desk" — 340×51px, transparent bg, black text, 2.3px `--border-dark` border, radius-md, 30px / SemiBold.

## Implementation

### `src/components/ContactForm/ContactForm.tsx`

Client component (`'use client'`).

```tsx
'use client'

const topics = [
  'General Inquiry',
  'Subscription / Orders',
  'Press & Partnerships',
  'Submit a Cartoon',
  'Submit a Headline',
  'Something Went Wrong',
  'Just Saying Hello',
]

export function ContactForm() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // v1: no backend — log or show success message
    console.log('Form submitted')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[33px] max-w-[351px] mx-auto">
      {/* Topic radio group */}
      <fieldset>
        <legend className="font-serif font-semibold text-[25px] mb-2">Topic</legend>
        <div role="radiogroup" aria-labelledby="topic-label" className="flex flex-col gap-2">
          {topics.map((topic) => (
            <label
              key={topic}
              className={`flex items-center px-4 h-[42px] rounded-sm border-[1.9px] border-border-input bg-bg-input cursor-pointer font-serif font-semibold text-[24px] ${
                selectedTopic === topic ? 'border-accent-blue' : ''
              }`}
            >
              <input
                type="radio"
                name="topic"
                value={topic}
                className="sr-only"
                onChange={() => setSelectedTopic(topic)}
                checked={selectedTopic === topic}
              />
              {topic}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Text fields */}
      {[
        { id: 'from', label: 'From', type: 'text' },
        { id: 'replyTo', label: 'Reply-To', type: 'email' },
        { id: 'subject', label: 'Subject', type: 'text' },
      ].map(({ id, label, type }) => (
        <div key={id} className="flex flex-col gap-1">
          <label htmlFor={id} className="font-serif font-semibold text-[25px]">{label}</label>
          <input
            id={id}
            name={id}
            type={type}
            className="h-[42px] rounded-sm border-[1.9px] border-border-input bg-bg-input px-3 font-serif text-[24px]"
          />
        </div>
      ))}

      {/* Message */}
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-[351px] h-[337px] border-[1.2px] border-[#453D3A] bg-transparent font-serif text-[24px] p-3 resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-[340px] h-[51px] border-[2.3px] border-border-dark rounded-md bg-transparent font-serif font-semibold text-[30px] text-text-primary"
      >
        Send to the Desk
      </button>
    </form>
  )
}
```

### Route: `src/app/contact/page.tsx`

```tsx
import { ContactForm } from '@/components/ContactForm/ContactForm'

export default function ContactPage() {
  return (
    <main className="bg-bg-primary min-h-screen py-16">
      <ContentContainer>
        <h1 className="font-serif font-semibold text-[60px] text-text-headline mb-12 text-center">
          Write to the Desk
        </h1>
        <ContactForm />
      </ContentContainer>
    </main>
  )
}
```

## Dependencies

- `ContentContainer`

## Verify When Done

- [ ] All 7 radio options render as styled pill items
- [ ] Selecting a topic visually indicates the selected state
- [ ] Radio inputs are hidden visually but accessible to screen readers
- [ ] `role="radiogroup"` on the radio group
- [ ] "From", "Reply-To", "Subject" inputs each have associated `<label htmlFor=...>`
- [ ] Message textarea has a visually-hidden `<label>` with `htmlFor="message"`
- [ ] "Send to the Desk" submit button renders at correct size with dark outline
- [ ] Form renders at `/contact` route
- [ ] Form is responsive — fits cleanly on small screens (375px reference) and scales up on wider viewports; form fields use `max-w-[351px] w-full` not fixed px
- [ ] No TypeScript errors
