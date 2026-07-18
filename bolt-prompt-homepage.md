# Bolt prompt — Lasagne Hub homepage

Copia tutto il blocco qui sotto (dal `---` in poi) e incollalo in Bolt.new come primo messaggio.
Suggerimento: genera prima la homepage. Le pagine /corporate e /events le aggiungeremo in un secondo prompt.

---

Build a modern, responsive marketing homepage for an Italian catering brand called **Lasagne Hub**, based in Copenhagen. The site is primarily in English, with Danish used only for navigation, the EN/DA toggle, CTAs and SEO metadata. Build it as a clean React single-page site. No e-commerce, no prices — the conversion goal is the quote-request form.

## Brand & design system

- Background: `#f6f9f9` (very light grey). Use white for cards/surfaces.
- Brand red: `#C8102E` (primary CTA buttons, accents)
- Brand green: `#6B9E8A` (secondary accents, section eyebrows)
- Text: `#1a1a1a`
- Fonts (load from Google Fonts):
  - Headings / hero / dish names / step numbers → **"Gasoek One"**
  - All body text, nav, menu descriptions, form, footer, buttons → **"Inter"** (weights 400/500/600)
  - **"Contrail One"** ONLY for small accents (section eyebrows, testimonial author lines). Never for paragraphs.
- Style: editorial, confident, a bit irreverent — generous whitespace, big type, not corporate-bland. Smooth scroll, subtle hover states.
- Fully responsive (mobile-first). Accessible: real semantic HTML, alt text, labels on form fields.

## SEO

- Page `<title>`: `Italian Lasagne Catering in Copenhagen | Lasagne Hub`
- Meta description: `Real Italian lasagne and tiramisù, made fresh in Copenhagen. Catering and team building for companies, plus private events. Get a quote in 12 hours.`
- All section text must be real HTML text (not images). Use one `<h1>` (the hero), then `<h2>` for section titles.

## Language toggle

Put an **EN / DA** toggle in the top-right of the nav. Implement EN fully. For DA, translate nav labels, CTA buttons and the hero line (strings provided below); leave body copy in English for now.

## Sections (in order)

### 1. Nav (sticky)
Logo "Lasagne Hub" on the left. Links: Corporate, Events, Menu, About. EN/DA toggle. Primary button "Get a quote" (red).
DA labels: Corporate → Erhverv · Events → Events · Menu → Menu · About → Om os · Get a quote → Få et tilbud

### 2. Hero
- H1: **Trust the layers.**
- Subheadline: *Italian lasagne and tiramisù, made fresh in Copenhagen — for company lunches, team events and private celebrations.*
- Primary CTA: **Get a quote** (scrolls to form). Secondary CTA: **See the menu** (scrolls to menu).
- DA: H1 "Stol på lagene." · Subheadline "Italiensk lasagne og tiramisù, lavet frisk i København — til firmafrokost, firmaevents og private fejringer." · CTAs "Få et tilbud" / "Se menuen"

### 3. Use cases — "Who we feed"
Intro line: *From a Tuesday office lunch to a once-a-year celebration — same kitchen, same standard.*
Three cards:
1. **Office catering** — Lasagne and tiramisù delivered to your office. One-off, or one fixed day a week your team actually looks forward to. Link: "Explore corporate →"
2. **Team building & company events** — Get the team cooking together, or let us cater your company dinner. The food people remember. Link: "Explore corporate →"
3. **Private celebrations** — Birthdays, anniversaries, dinners with the people who matter. We bring the main course, you bring everyone together. Link: "Explore events →"

### 4. Menu preview — "What's on the table"
Intro: *Real Italian recipes, made fresh in our Copenhagen kitchen. Four things, done properly.*
Four items (dish name in Gasoek One + description):
- **Classic Ragù** — Slow-cooked beef ragù and béchamel, layered with fresh pasta. The one everyone knows, done right.
- **Pesto & Zucchini** — Fresh zucchini, pesto cream and melted mozzarella. The vegetarian one that converts the doubters.
- **Tomato & Eggplant** — Roasted eggplant, tomato and parmigiano. Comfort, no meat required.
- **Tiramisù** — Our sweet lasagna. Coffee-soaked layers and mascarpone cream. The easiest yes in any room.
Dietary note (highlighted): *A version for everyone at the table — vegetarian, vegan, gluten-free and dairy-free, always available.*
Ad hoc line: *Need something else? We build custom menus around your event and your team. Just ask.*
CTA: **See the full menu**

### 5. How it works
Three numbered steps (number in Gasoek One):
1. **Tell us what you need** — Fill in the quote form: your team, your date, headcount, any dietary needs.
2. **Get your quote in 12 hours** — A proposal built around your event. No fixed packages, no surprises.
3. **We cook, we deliver** — Fresh from our Copenhagen kitchen to your office or venue, on time.

### 6. Social proof — "Don't take our word for it"
Three testimonial cards (quote in Inter, author line in Contrail One):
1. *"Perfect for our team lunch — easy to organise, delivered right on time, and some of the best lasagne we've had outside Italy. The vegetarian option was a hit too."* — Office manager, Copenhagen
2. *"We had Lasagne Hub cater a dinner with friends and it made the whole evening. People kept asking where the lasagne was from."* — Private host, Frederiksberg
3. *"Our team building session was unforgettable — proper Italian flavour, plenty of laughs, and the team was still talking about it weeks later."* — Team lead, Copenhagen
Below: link "Follow us on Instagram to see what we cook up." → https://instagram.com/lasagnehubcph

### 7. Quote form — "Let's plan something together"
Intro: *Tell us about your team, your event or your idea. You'll have a tailored quote within 12 hours.*
A toggle at the top of the form: **Corporate** / **Private Event**.

- **Corporate fields:** Company Name, CVR Number, Which service (dropdown: Office catering / Team building / Company event / Other), Email (required), Phone, Message (textarea).
- **Private fields:** Full Name, Number of people, Menu preferences, Email, Phone (required), Message (textarea).
- Submit button: **Send Request** (red).

For the form submission, use a simple form-handling service so submissions arrive by email (e.g. Formspree or Netlify Forms). Add a placeholder endpoint I can replace, and show a success message after submit.

### 8. Footer
Tagline: *Real lasagne, made fresh in Copenhagen.*
Links: Corporate · Events · Menu · About
Email: info@lasagnehub.com · Phone: +45 28 55 58 74
Instagram: @lasagnehubcph (links to the profile)
"Find Smiley" link (placeholder URL I can replace).
EN / DA toggle.
Legal line (small, muted): *Lasagne Hub ApS — C/O Kitchen Collective ApS, Slagtehusgade 11A, 1715 København V · CVR nr. 46103289*

Make it production-quality and visually polished. Prioritise clean typography and spacing over decoration.
