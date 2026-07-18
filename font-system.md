# Lasagne Hub — Font System

Tutti Google Fonts (gratis, supportano æ ø å, nessun lock-in).

## Ruoli

| Ruolo | Font | Dove si usa |
|-------|------|-------------|
| **Titoli / Display** | Gasoek One (un solo peso) | Hero headline, titoli sezione, nomi dei piatti, numeri "How it works" |
| **Corpo / Body** | Inter (400 / 500 / 600) | Paragrafi, nav, descrizioni menu, form, footer, bottoni CTA |
| **Accento** | Contrail One (un solo peso) | SOLO micro-accenti: occhielli di sezione, citazioni testimonianze, etichette brevi. MAI per il corpo. |

Regola d'oro: se è un blocco di testo da leggere → Inter. Se è un titolo grosso → Gasoek One. Se è un tocco di personalità di 2-3 parole → Contrail One.

## Embed (in `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gasoek+One&family=Contrail+One&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

## CSS variables

```css
:root {
  --font-display: 'Gasoek One', sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-accent: 'Contrail One', cursive;

  --color-red: #C8102E;
  --color-green: #6B9E8A;
  --color-bg: #f6f9f9;
  --color-text: #1a1a1a;
}

body { font-family: var(--font-body); color: var(--color-text); background: var(--color-bg); }
h1, h2, h3 { font-family: var(--font-display); line-height: 1.0; }
.eyebrow, .quote-accent { font-family: var(--font-accent); }
```

## Prompt pronto per Bolt

> Use this exact font system. Headings (h1, h2, h3, hero title, dish names, step numbers) in "Gasoek One". All body text, navigation, menu descriptions, the quote form, footer and CTA buttons in "Inter" (weights 400/500/600). Use "Contrail One" only for small accents like section eyebrows and testimonial quotes — never for paragraphs. Load all three from Google Fonts. Brand colors: red #C8102E, green #6B9E8A, background #f6f9f9, text #1a1a1a.
