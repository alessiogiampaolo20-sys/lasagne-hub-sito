# Loghi partner (banner "Trusted by teams at")

Metti qui i loghi delle aziende partner, poi sostituisci i segnaposto nella pagina Team Building.

## Come sostituire un logo
1. Metti il file logo in questa cartella, es. `acme.svg` o `acme.png` (preferibile SVG o PNG con sfondo trasparente).
2. Apri **`corporate/team-building/index.html`** e **`da/erhverv/teambuilding/index.html`**.
3. Trova il blocco `<div class="logo-track">` e sostituisci un segnaposto:
   - da: `<span class="logo-ph">Your logo</span>`
   - a:  `<img src="/images/partners/acme.svg" alt="Acme">`
4. **Importante:** l'elenco dei loghi è ripetuto **due volte** dentro `.logo-track` (serve per far scorrere il nastro senza stacchi). Sostituisci lo stesso logo in entrambe le copie.

Consigli: loghi tutti della stessa altezza resa (~42px), lo stile li rende automaticamente in scala di grigi con colore al passaggio del mouse.
