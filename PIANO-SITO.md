# PIANO COMPLETO — Sito web Lasagne Hub

> **Come usare questo documento.** È la tua mappa dall'inizio alla fine. Le fasi vanno fatte **in ordine**: ognuna ha i passi esatti, il risultato atteso ("✅ Fatto quando...") e, dove serve, il **prompt pronto da incollare a Opus**. Lavora su **una fase per sessione** con Opus, dandogli sempre accesso a questa cartella. Non serve saper programmare: dove c'è codice, lo scrive Opus; dove c'è un'azione manuale (creare account, cliccare), è spiegata passo passo.

---

## Decisioni già prese (non tornarci sopra)

| Cosa | Decisione | Perché |
|---|---|---|
| Tecnologia | **HTML/CSS puro**, nessun framework | Massima autonomia: nessun programma da pagare, nessuna dipendenza da installare, modifichi un file e il sito è aggiornato. SEO ottima (tutto è testo HTML reale). |
| Hosting | **Netlify (piano gratuito)** collegato a **GitHub (gratuito)** | Carichi i file su GitHub → Netlify pubblica il sito automaticamente in ~30 secondi. HTTPS incluso, zero costi. |
| Form preventivi | **Netlify Forms** | Integrato nell'hosting: nessun servizio esterno, 100 richieste/mese gratis, notifica email a info@lasagnehub.com. |
| Dominio | Già di tua proprietà | Va solo collegato a Netlify (Fase 1, passo D). |
| Pagine | Home (già fatta) + **Corporate, Events, Menu, About** | |
| Lingue | Lancio in **inglese**; danese completo in una fase successiva (Fase 7) | |
| Design system | Colori #C8102E / #6B9E8A / #f6f9f9 / #1a1a1a · Font Gasoek One + Inter + Contrail One | Già definito in `font-system.md` e già implementato in `index.html`. |

**Cosa c'è già nella cartella:** `index.html` (homepage completa e funzionante), `font-system.md`, `bolt-prompt-homepage.md` (contiene tutto il copy — resta la fonte del testo anche se Bolt non lo useremo), `images/READ-ME-foto.md`.

---

## STATO ATTUALE (aggiornato)

✅ **Fase 2 fatta** — CSS estratto in `css/style.css`, JS in `js/main.js`, tutte le pagine linkano i file condivisi.
✅ **Fase 3 fatta (inglese)** — `corporate/`, `events/`, `menu/`, `about/` costruite con il copy SEO-ottimizzato dal documento "New website" (quello con i metadati EN/DA). Homepage aggiornata con gli stessi link.
✅ **Fase 4 fatta** — Due form Netlify separati (`quote-corporate`, `quote-private`) sulla homepage, con honeypot, redirect a `/thanks/`, campo data preferita, nota di consenso GDPR sotto ogni form.
✅ **Cookie banner + Privacy Policy (EN)** anticipati da Fase 8, seguendo il documento GDPR: banner con Accetta/Rifiuta/Personalizza (bottoni di pari peso), categoria Statistiche disattivata di default, riapribile dal footer, pagina `/privacy/` con testo completo.
✅ **Fase 6 parziale** — `robots.txt`, `sitemap.xml`, canonical e Open Graph di base su ogni pagina.
✅ **Fase 7 fatta (danese completo)** — `/da/`, `/da/erhverv/`, `/da/events/`, `/da/menu/`, `/da/om-os/`, `/da/privatlivspolitik/`, `/da/cookiepolitik/`, `/da/tak/` costruite dal copy del documento "New website". Il toggle EN/DA è ora un link reale alla pagina gemella (non più JS), con tag `hreflang` incrociati su ogni pagina.
✅ **Ottimizzazione GEO (answer engine / AI)** — dati strutturati JSON-LD (FoodEstablishment, Menu, FAQPage, AboutPage) su tutte le pagine principali EN+DA, sezioni FAQ visibili (niente accordion JS, tutto leggibile dai crawler), `llms.txt` alla radice con i fatti chiave del brand per gli assistenti AI.
✅ **Logo + favicon** — logo ufficiale (`images/nomelogo.png`) nella nav di tutte le pagine; favicon/apple-touch-icon generati dall'illustrazione del logo (`favicon.ico`, `favicon.png`, `apple-touch-icon.png`, `images/icon-192/512.png`).
✅ **Menu aggiornato** — Tomato & Eggplant rimossa (card "coming soon" al suo posto), nota monoporzioni/teglie grandi, FAQ dedicata.
✅ **Form v2** — nome+email obbligatori, telefono/azienda opzionali, data obbligatoria; corporate = fascia approssimativa persone, private = numero preciso; scelta Lasagne/Tiramisù/Both con sotto-campi dieta condizionali; preferenza monoporzioni/teglie.
✅ **Recensioni Google** — banner sotto le testimonianze (home EN+DA) con link a Google Business Profile (`share.google/T9CdVrNKLXr6Isdxe`), aggiunto anche a `sameAs` nel JSON-LD.
✅ **Find Smiley** — link reale `findsmiley.dk/1523145` in tutti i footer.
✅ **Sezioni dinamiche** — (1) hero animato "a strati" con entrata a cascata + onde di sfondo che scorrono; (2) striscia scorrevole (marquee) di parole chiave EN+DA dopo l'hero; (3) menu interattivo con flip-card (fronte foto+nome, retro ingredienti+allergeni; hover desktop / tap mobile) e filtri dieta (All/Vegetarian/With meat). Tutto rispetta `prefers-reduced-motion` e non usa librerie esterne. Codice condiviso in `css/style.css` + `js/main.js`.
✅ **Foto reali inserite** — tutte le foto dalla cartella Desktop elaborate (HEIC→web, ottimizzate) e collocate: hero (lasagna ritagliata con sfondo trasparente, "fluttuante"), 3 piatti menu, card home, hero corporate/events, foto About (fondatori), galleria di 11 foto eventi. Dettaglio in `images/READ-ME-foto.md`. Non ancora usati: illustrazioni brand, merch, foto melanzane (piatto non a menu).
✅ **Pagina Events** — rimosso il menu piatti, aggiunta galleria foto eventi (11 foto, EN+DA) con lazy loading.
✅ **Illustrazioni brand come accenti** — le 7 illustrazioni line-art (chef, basilico, corporate, events, menu) ottimizzate in WebP trasparente e inserite: menu-character nell'hero /menu/, basilico su "What's on the table", chef sul form preventivo, corporate nell'intro /corporate/, events su "occasioni", chef-left sul "bridge" About, chef-pointing (bianco) sul CTA finale About. Tutte EN+DA.
⬜ **Dominio da confermare** — canonical/sitemap/OG usano `lasagnehub.com` come segnaposto: conferma il dominio reale prima di pubblicare.
✅ **Privacy** — data (13 luglio 2026) e periodo di conservazione (24 mesi) compilati in EN + DA.

### Nota tecnica per il futuro
- Il **cookie banner** appare solo alla prima visita (scelta salvata in `localStorage` del visitatore). Per rivederlo in anteprima: console → `localStorage.removeItem('lh_cookie_consent')` e ricarica.
- **Netlify Forms**: dopo il deploy, le richieste si vedono in Netlify → scheda *Forms* (4 elenchi: corporate/private, EN/DA). Per la mail a ogni invio: Netlify → *Notifications → Form submission notifications → Add → Email* → `info@lasagnehub.com`.
- **Font auto-ospitati** ✅ — i font (Gasoek One, Contrail One, Inter 400/500/600, solo subset latini) sono in `fonts/` e caricati via `@import` in `css/style.css`. Nessuna chiamata a Google Fonts: l'IP del visitatore non arriva più a Google (compliance GDPR piena). Rimossi tutti i `<link>`/`preconnect` a fonts.googleapis/gstatic dalle 15 pagine.
- **Anteprima locale senza cache**: il server di sviluppo è `_devserver.py` (avviato da `.claude/launch.json`), che invia header `no-store` così l'anteprima mostra sempre l'ultima versione. In produzione Netlify gestisce la cache correttamente da solo.

---

## FASE 1 — Mettere il sito online (GitHub + Netlify + dominio)

Obiettivo: il sito attuale (anche solo la homepage) visibile sul tuo dominio con HTTPS. Prima si va online, poi si migliora: così ogni progresso è subito reale.

### A. Crea l'account GitHub (10 min)
1. Vai su **github.com** → Sign up. Usa alessio.giampaolo20@gmail.com. Username consigliato: qualcosa di neutro tipo `alessiogiampaolo` (sarà visibile nell'URL del repository).
2. Verifica l'email.

### B. Crea il repository e carica i file (15 min)
Un "repository" (repo) è la cartella del tuo sito su GitHub. Non serve il terminale: si fa tutto dal browser.
1. In alto a destra su GitHub: **+** → **New repository**.
2. Nome: `lasagne-hub-sito`. Visibilità: **Public** (necessario per il piano gratuito senza complicazioni; il codice di un sito vetrina non contiene nulla di segreto). **Non** spuntare "Add a README".
3. Create repository → nella pagina che appare clicca **"uploading an existing file"**.
4. Trascina dentro **tutto il contenuto** di questa cartella (`index.html`, la cartella `images/`, i file .md). Nota: GitHub via browser non carica cartelle vuote — se `images/` contiene solo il README va bene così.
5. In basso, bottone verde **Commit changes**.

> D'ora in poi: **ogni volta che modifichi il sito, ricarichi i file modificati su GitHub allo stesso modo** (Add file → Upload files → trascini → Commit). Netlify aggiorna il sito da solo. Questo è tutto il tuo "flusso di pubblicazione".

### C. Collega Netlify (10 min)
1. Vai su **netlify.com** → Sign up → **"Sign up with GitHub"** (così i due account sono già collegati).
2. **Add new site → Import an existing project → GitHub** → autorizza → scegli `lasagne-hub-sito`.
3. Non toccare nessuna impostazione di build (non ce ne servono: è HTML puro). **Deploy**.
4. Dopo ~1 minuto hai un URL tipo `random-name-123.netlify.app`. Aprilo: devi vedere la homepage. Puoi rinominarlo in Site settings → Change site name → `lasagnehub`.

### D. Collega il tuo dominio (20 min + attesa DNS)
1. Su Netlify: **Domain management → Add a domain** → scrivi il tuo dominio (es. `lasagnehub.com`) → Verify.
2. Netlify ti proporrà due strade. La più semplice: **usare i nameserver Netlify**. Ti mostra 4 indirizzi tipo `dns1.p03.nsone.net`.
3. Vai nel pannello del sito dove hai comprato il dominio → cerca "Nameservers" o "DNS" → sostituisci i nameserver esistenti con i 4 di Netlify → salva.
4. Attendi da 1 a 24 ore (propagazione DNS). Netlify attiverà **HTTPS automaticamente** (certificato Let's Encrypt, gratis, si rinnova da solo).
5. In Domain management, imposta la versione **con `www` o senza** come primaria (scegli senza `www`: URL più pulito) — Netlify reindirizza l'altra da solo.

**✅ Fatto quando:** apri `https://tuodominio.com` da telefono e computer e vedi la homepage col lucchetto HTTPS.

---

## FASE 2 — Ristrutturare il progetto per il multi-pagina

Obiettivo: preparare la struttura per 5 pagine senza duplicare gli stili. Oggi tutto il CSS vive dentro `index.html`; va estratto in un file condiviso, così una modifica di stile vale per tutto il sito.

### Struttura finale delle cartelle

```
/
├── index.html              ← homepage
├── corporate/index.html    ← https://tuodominio.com/corporate/
├── events/index.html       ← .../events/
├── menu/index.html         ← .../menu/
├── about/index.html        ← .../about/
├── thanks/index.html       ← pagina "grazie" dopo l'invio del form
├── css/style.css           ← TUTTI gli stili, condivisi
├── js/main.js              ← toggle EN/DA, menu mobile, toggle form
├── images/                 ← foto
├── favicon.svg
├── robots.txt              ← (Fase 6)
└── sitemap.xml             ← (Fase 6)
```

Il formato `cartella/index.html` dà URL puliti (`/corporate/` invece di `/corporate.html`).

### Regole d'oro del multi-pagina in HTML puro
1. **Nav e footer sono copiati in ogni pagina.** Non c'è modo di scriverli una volta sola in HTML puro. Conseguenza: ogni volta che chiedi a Opus di modificare nav o footer, digli esplicitamente *"applica la modifica a TUTTE le pagine"*.
2. **Zero stili dentro le pagine.** Tutto in `css/style.css`. Se Opus aggiunge un `<style>` in una pagina, chiedigli di spostarlo nel CSS condiviso.
3. **Link interni sempre assoluti** (`/corporate/`, `/images/hero.jpg`, non `../images/...`): funzionano da qualunque pagina.

### Prompt pronto per Opus (Fase 2)

> Leggi PIANO-SITO.md in questa cartella, sezione FASE 2. Ristruttura il progetto: estrai tutto il CSS di index.html in css/style.css e tutto il JavaScript in js/main.js, collegandoli con `<link>` e `<script>`. Crea le cartelle corporate/, events/, menu/, about/, thanks/ ognuna con un index.html placeholder che abbia già: head SEO completo, font Google, nav e footer identici alla homepage (con link aggiornati alle nuove pagine: /corporate/, /events/, /menu/, /about/), e un semplice `<h1>` col nome della pagina. Usa link assoluti ovunque. La homepage deve restare visivamente identica a prima.

**✅ Fatto quando:** ricarichi tutto su GitHub, il sito online è identico a prima, e cliccando i link del nav si aprono le 4 pagine placeholder.

---

## FASE 3 — Costruire le quattro pagine

Obiettivo: ogni servizio ha la sua pagina dedicata. Questo è ciò che converte (il visitatore trova esattamente il suo caso) e ciò che posiziona su Google (una pagina = un intento di ricerca).

Fai **una pagina per sessione con Opus**. Per ognuna qui trovi: struttura, indicazioni di copy (coerenti col tono già usato: editoriale, sicuro, un po' irriverente, mai corporate-bland) e i metadati SEO da usare esattamente.

### 3.1 — /corporate/ (la pagina più importante per il business)

| SEO | Valore |
|---|---|
| `<title>` | `Office Catering & Team Building in Copenhagen \| Lasagne Hub` |
| Meta description | `Italian lasagne catering for offices in Copenhagen: recurring team lunches, company events and hands-on team building. Tailored quote in 12 hours.` |

Sezioni, in ordine:
1. **Hero** — H1 tipo *"Feed the team. Properly."* + sottotitolo sui tre servizi corporate + CTA "Get a quote".
2. **Office catering** — il pranzo ricorrente: l'idea del "fixed lasagne day" settimanale che il team aspetta. Consegna puntuale in ufficio, vassoi pronti, opzione per ogni dieta.
3. **Team building** — cucinare insieme guidati da voi: showcooking / hands-on. È il servizio più memorabile: vendilo con la scena, non con l'elenco.
4. **Company events** — cene aziendali, celebrazioni, catering per eventi interni.
5. **Perché funziona per le aziende** — 3-4 punti concreti: preventivo in 12h, CVR e fatturazione semplice, ogni dieta coperta, un solo fornitore per cibo+esperienza.
6. **Testimonianza** — riusa quella dell'office manager e del team lead dalla homepage.
7. **Form preventivo** — versione Corporate del form (stessi campi della homepage: Company Name, CVR, servizio, email, telefono, messaggio).

### 3.2 — /events/

| SEO | Valore |
|---|---|
| `<title>` | `Private Event Catering in Copenhagen \| Lasagne Hub` |
| Meta description | `Birthdays, anniversaries and dinners with friends: real Italian lasagne and tiramisù delivered in Copenhagen. You host, we cook. Quote in 12 hours.` |

Sezioni: Hero emotivo (*"You bring the people. We bring the lasagne."*) → come funziona per i privati (scegli i piatti, dicci quante persone, consegniamo pronti da servire) → occasioni (compleanni, anniversari, cene tra amici, feste) → menu preview con link a /menu/ → testimonianza del private host di Frederiksberg → form versione Private.

### 3.3 — /menu/

| SEO | Valore |
|---|---|
| `<title>` | `The Menu — Lasagne & Tiramisù \| Lasagne Hub Copenhagen` |
| Meta description | `Classic ragù, pesto & zucchini, tomato & eggplant, and our tiramisù. Vegetarian, vegan, gluten-free and dairy-free versions always available.` |

Sezioni: Hero breve (*"Four things, done properly."*) → i 4 piatti a schede grandi con foto, descrizione estesa (2-3 frasi ciascuna, più ricche che in homepage: ingredienti, come è fatto) → **blocco dietetico ben visibile** (vegetarian / vegan / gluten-free / dairy-free sempre disponibili) → **menu custom** (*"Need something else? We build custom menus around your event."*) → CTA form. Niente prezzi (coerente con la strategia: la conversione è il preventivo).

### 3.4 — /about/

| SEO | Valore |
|---|---|
| `<title>` | `About Us \| Lasagne Hub — Italian Kitchen in Copenhagen` |
| Meta description | `Lasagne Hub is an Italian kitchen in Copenhagen making real lasagne and tiramisù, fresh, for offices and private events. This is our story.` |

Sezioni: la storia (chi siete, perché lasagne, perché Copenhagen — **questa parte scrivila tu in bozza e falla rifinire a Opus**: è l'unica pagina che non può essere inventata) → la cucina (Kitchen Collective, Slagtehusgade — località vera = fiducia + SEO locale) → i valori (fresco, ricette vere, una versione per tutti) → foto vostre se le avete → CTA finale.

### Prompt pronto per Opus (uno per pagina, esempio per corporate)

> Leggi PIANO-SITO.md, sezione 3.1. Costruisci la pagina corporate/index.html completa seguendo quella struttura, usando esclusivamente le classi CSS esistenti in css/style.css (aggiungi nuove classi al file condiviso solo se indispensabile). Tono del copy: come la homepage — editoriale, sicuro, un po' irriverente. Usa i metadati SEO esatti indicati nella tabella. Nav e footer identici alle altre pagine. Immagini: usa gli slot placeholder come in homepage e aggiungi i nuovi nomi file necessari a images/READ-ME-foto.md.

**✅ Fatto quando:** le 4 pagine sono online, ogni pagina ha title/description propri, il nav funziona ovunque, e leggendole ti suonano "vostre".

---

## FASE 4 — Il form preventivi (Netlify Forms)

Obiettivo: le richieste arrivano via email senza servizi esterni.

Come funziona: aggiungendo `data-netlify="true"` al tag `<form>`, Netlify intercetta gli invii al posto tuo. Serve anche un campo nascosto `form-name` e conviene aggiungere un campo **honeypot** anti-spam (un campo invisibile: se un bot lo compila, l'invio viene scartato).

Passi:
1. Fai adattare i form a Opus (prompt sotto). Servono form con nomi distinti (`quote-corporate`, `quote-private`) e redirect alla pagina `/thanks/` dopo l'invio.
2. Ricarica su GitHub → deploy.
3. **Fai un invio di prova dal sito online** (Netlify Forms funziona solo sul sito pubblicato, non aprendo il file in locale).
4. Su Netlify: **Forms** → vedi l'invio di prova → **Form notifications → Add notification → Email** → inserisci `info@lasagnehub.com`. Fai un secondo invio di prova e verifica che l'email arrivi (controlla anche lo spam la prima volta).

### Prompt pronto per Opus (Fase 4)

> Leggi PIANO-SITO.md, FASE 4. Converti tutti i form del sito (homepage, corporate, events) in Netlify Forms: attributo data-netlify="true", input nascosto form-name con nome univoco per form (quote-corporate, quote-private), honeypot anti-spam con data-netlify-honeypot, action="/thanks/". Il toggle Corporate/Private della homepage deve mostrare/nascondere due form separati (non uno solo con campi che cambiano), perché Netlify registra i form staticamente. Crea thanks/index.html: messaggio di conferma nel tono del brand ("Request received — your quote is coming within 12 hours" o simile), stesso nav/footer, e meta robots noindex.

**✅ Fatto quando:** compili il form sul sito online e la richiesta ti arriva a info@lasagnehub.com.

---

## FASE 5 — Le foto

Obiettivo: sostituire tutti i placeholder verdi. Le foto sono metà della conversione per un brand food: nessun testo vende una lasagna quanto una foto fatta bene.

1. Segui `images/READ-ME-foto.md`: nomi file esatti, foto dal vostro Instagram o scattate nuove (luce naturale, piatto protagonista, primo piano).
2. Dopo la Fase 3 il README foto conterrà anche i nomi per le nuove pagine (hero di corporate/events/menu/about).
3. **Comprimi sempre prima di caricare**: vai su **squoosh.app** (gratis, nel browser), trascina la foto, scegli formato **WebP** qualità ~75, ridimensiona (hero ~1600px di larghezza, card ~800px). Una foto non compressa da 5 MB può decuplicare il tempo di caricamento — e la velocità è un fattore SEO.
4. Carica in `images/` su GitHub coi nomi esatti.
5. Chiedi a Opus di verificare che ogni `<img>` abbia **alt text descrittivo** (es. `alt="Classic beef ragù lasagne, freshly baked"`) e `loading="lazy"` su tutte le immagini tranne quella hero.

**✅ Fatto quando:** zero placeholder verdi sul sito online e la homepage carica in meno di ~2 secondi da telefono (rete mobile).

---

## FASE 6 — SEO tecnica

Obiettivo: dare a Google tutto ciò che serve per capirti e mostrarti. Da fare **dopo** le fasi 3-5 (Google deve trovare il sito già completo).

### A. File e markup (li fa Opus — prompt sotto)
1. **sitemap.xml** — l'elenco delle pagine per Google (home, corporate, events, menu, about; **non** thanks).
2. **robots.txt** — permette tutto e indica la sitemap:
   ```
   User-agent: *
   Allow: /
   Disallow: /thanks/
   Sitemap: https://tuodominio.com/sitemap.xml
   ```
3. **Canonical** su ogni pagina (`<link rel="canonical" href="https://tuodominio.com/corporate/">`).
4. **Open Graph + Twitter card** su ogni pagina (titolo, descrizione, immagine 1200×630 — la foto hero va bene) → così i link condivisi su LinkedIn/WhatsApp mostrano l'anteprima con la foto.
5. **Dati strutturati JSON-LD** in homepage, tipo `FoodEstablishment`/`Caterer`, con i dati veri: nome, indirizzo (C/O Kitchen Collective ApS, Slagtehusgade 11A, 1715 København V), telefono +45 28 55 58 74, email, URL, Instagram, `areaServed: Copenhagen`, `servesCuisine: Italian`. È ciò che alimenta i risultati "ricchi" di Google.
6. **Favicon** — una "L" o una mini-lasagna stilizzata nei colori brand, in SVG.

### B. Registrazioni (le fai tu, manuali — 45 min totali)
1. **Google Search Console** (search.google.com/search-console): aggiungi proprietà → tipo "Dominio" → verifichi con un record DNS (su Netlify: Domain management → DNS records → aggiungi il record TXT che Google ti dà). Poi: **Sitemaps → invia `sitemap.xml`**. Da qui in poi vedrai con quali ricerche la gente ti trova.
2. **Google Business Profile** (business.google.com): **è la mossa singola più potente per il local SEO.** Crea il profilo "Lasagne Hub" come catering/food service, area servita Copenhagen, collega sito e Instagram, carica foto. Le ricerche "catering copenhagen", "lasagne copenhagen" mostrano prima la mappa: devi esserci. Dopo ogni evento, **chiedi al cliente una recensione Google**: le recensioni sono il fattore n.1 del ranking locale.
3. **Bing Webmaster Tools** (facoltativo, 10 min): importa direttamente da Search Console.

### Prompt pronto per Opus (Fase 6A)

> Leggi PIANO-SITO.md, FASE 6 sezione A. Implementa i 6 punti: sitemap.xml, robots.txt, canonical su ogni pagina, meta Open Graph + Twitter card su ogni pagina (og:image = foto hero), JSON-LD FoodEstablishment in homepage con i dati reali presi dal footer, e favicon SVG nei colori del brand. Il dominio è [SCRIVI QUI IL TUO DOMINIO].

**✅ Fatto quando:** Search Console mostra la sitemap "Riuscito", il profilo Google Business è verificato, e incollando l'URL su WhatsApp appare l'anteprima con foto.

---

## FASE 7 — Danese completo (quando il sito EN è rodato)

Non farla al lancio. Falla quando le fasi 1-6 sono finite e arrivano le prime richieste.

Strategia corretta per la SEO bilingue in HTML puro: **pagine duplicate sotto `/da/`** (`/da/`, `/da/erhverv/`, `/da/events/`, `/da/menu/`, `/da/om-os/`) con tutto il copy tradotto, e tag **hreflang** incrociati su ogni pagina (EN↔DA). Il toggle EN/DA smette di cambiare le etichette via JavaScript e diventa un semplice link alla pagina gemella. Perché: Google indicizza *pagine*, non stati JavaScript — con `/da/` intercetti chi cerca "lasagne catering københavn" in danese.

Nel frattempo, il toggle attuale (che traduce nav e CTA) va benissimo.

---

## FASE 8 — Analytics (misurare senza cookie banner)

Per un sito danese la scelta più pulita è un analytics **senza cookie**: niente banner GDPR, niente consensi, pagina più veloce.

- **Consigliato: GoatCounter** (goatcounter.com) — gratuito, una riga di script, ti dice visite, pagine più viste, provenienza. Zero cookie.
- Alternativa più ricca: Plausible (~9 €/mese). Google Analytics 4 è gratis ma in Danimarca richiede cookie banner e configurazione consensi: complessità che non ti serve ora.

Cosa guardare ogni settimana (10 minuti): visite per pagina (quale servizio interessa di più), provenienza (Google? Instagram?), e in **Search Console** le query di ricerca. La metrica che conta davvero: **richieste di preventivo ricevute** — le conti direttamente nel pannello Netlify Forms.

---

## FASE 9 — Controllo qualità (prima di considerarlo "finito")

1. **Lighthouse**: apri il sito in Chrome → tasto destro → Ispeziona → scheda "Lighthouse" → Analyze (Mobile). Obiettivo: tutti i punteggi sopra 90. Se Performance è basso, quasi sempre sono le immagini (torna alla Fase 5).
2. **Test da telefono vero**: naviga tutto il sito dal tuo telefono. Nav mobile apribile, testi leggibili senza zoom, bottoni premibili col pollice, form compilabile comodamente.
3. **Ogni link cliccato una volta**: nav, footer, CTA, Instagram, link tra pagine. Zero pagine 404.
4. **Form**: un invio di prova per ciascun form, email ricevuta.
5. **Accessibilità** (già impostata bene, verifica con Opus): un solo `<h1>` per pagina, label su ogni campo, alt su ogni immagine, contrasti ok.

### Prompt pronto per Opus (Fase 9)

> Fai una revisione completa di qualità del sito in questa cartella: verifica che ogni pagina abbia un solo h1 e gerarchia di heading corretta, che ogni immagine abbia alt text e loading appropriato, che ogni campo form abbia la label, che non ci siano link rotti tra le pagine, che title e meta description siano unici per pagina, e che non ci sia CSS duplicato fuori da css/style.css. Elencami i problemi trovati e correggili.

---

## CHECKLIST DI LANCIO

- [ ] Dominio collegato, HTTPS attivo, versione senza-www primaria
- [ ] 5 pagine complete + /thanks/
- [ ] Tutte le foto reali, compresse in WebP, con alt text
- [ ] Form testati, notifiche email attive
- [ ] sitemap.xml inviata a Search Console
- [ ] Google Business Profile verificato
- [ ] Lighthouse mobile > 90
- [ ] Test completo da telefono
- [ ] Link al sito nella bio Instagram @lasagnehubcph
- [ ] Firma email con il link al sito

---

## DOPO IL LANCIO — far crescere il traffico organico

Il traffico organico di un business locale si costruisce su tre gambe, in quest'ordine di priorità:

1. **Google Business Profile + recensioni.** Una recensione chiesta dopo ogni evento. 15-20 recensioni ti mettono davanti a quasi tutti i competitor locali. Rispondi a ogni recensione (segnale di attività per Google).
2. **Instagram → sito.** Ogni post/storia rilevante rimanda alla pagina giusta (non sempre alla home: il post sul team building rimanda a /corporate/). Instagram non dà SEO diretta ma porta traffico e brand search ("lasagne hub") — e le brand search sono un segnale di ranking.
3. **Contenuti (blog), quando avrai costanza.** Non al lancio. Quando sarai a regime, una sezione `/blog/` con articoli tipo: "How to organise a team lunch in Copenhagen", "Team building ideas that don't involve trust falls", "What real Italian lasagne is (and isn't)", "Vegan and gluten-free catering in Copenhagen: what to ask for". Un buon articolo al mese batte quattro articoli mediocri a settimana. Ogni articolo chiude con la CTA al preventivo.

E ogni 3-4 mesi: aggiorna foto e testimonianze (vere, man mano che arrivano), controlla in Search Console quali query crescono e rafforza quelle pagine.

---

## COME LAVORARE CON OPUS — regole fisse

1. **Una fase (o una pagina) per sessione.** Sessioni corte e focalizzate = risultati migliori.
2. **Apri sempre la sessione così:** *"Leggi PIANO-SITO.md in questa cartella. Siamo alla FASE X. [poi il prompt pronto della fase]"*.
3. **Nav o footer toccati? Di' sempre "su tutte le pagine".**
4. **Chiedi sempre, a fine sessione:** *"Verifica che il sito sia coerente: stessi nav/footer ovunque, nessuno stile fuori da css/style.css, link assoluti."*
5. **Dopo ogni sessione: carica su GitHub e guarda il sito online.** Se qualcosa si è rotto, lo scopri subito e sai quale sessione l'ha causato. (GitHub conserva ogni versione precedente: dal repo → History puoi sempre recuperare com'era prima.)
6. **Non fare mai modifiche in due posti.** La cartella locale è la verità; GitHub è la copia da pubblicare. Modifica sempre in locale con Opus, poi carica.

---

## Glossario minimo

**Repository (repo)** — la cartella del sito su GitHub. · **Commit** — salvataggio di una versione dei file. · **Deploy** — pubblicazione del sito online (Netlify lo fa da solo a ogni commit). · **DNS / Nameserver** — il sistema che collega il tuo dominio al server che ospita il sito. · **Meta description** — il testo sotto il titolo nei risultati Google: non influisce sul ranking, ma decide se la gente clicca. · **Sitemap** — l'elenco delle pagine che consegni a Google. · **hreflang** — il tag che dice a Google "questa pagina esiste anche in danese, eccola". · **Lighthouse** — lo strumento di Chrome che dà i voti a velocità, SEO e accessibilità. · **Alt text** — la descrizione testuale di un'immagine: serve a chi non vede e a Google. · **WebP** — formato immagine moderno, ~30% più leggero del JPG.
