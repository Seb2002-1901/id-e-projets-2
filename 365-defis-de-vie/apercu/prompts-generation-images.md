# Cap365 — Prompts de génération d'images (marque Cairn)

> Document destiné à la génération de visuels et mockups pour **Cap365** (marque **Cairn**).
> Chaque prompt est en anglais (meilleur rendu des moteurs). Le titre est en français.
> Copier-coller directement dans Midjourney, DALL·E ou SDXL.

---

## Note de cohérence (à lire avant toute génération)

Pour garder une identité visuelle homogène sur l'ensemble des visuels, respecter systématiquement :

- **Palette stricte** : deep navy `#1B2A4A` (fond/base), orange accent `#F5A623` (énergie, CTA, streak), green `#2EC27E` (progrès, réussite), purple `#8B5CF6` (niveau/rang, premium). Le navy domine, l'orange ponctue, vert et violet en accents secondaires.
- **Ambiance** : premium mobile app UI, clean minimal, motivational, calme et haut de gamme — jamais chargé ni criard.
- **Métaphore de marque** : cairn / pierres empilées / sentier de montagne au lever du soleil. À évoquer subtilement (silhouette, dégradé sunrise, texture pierre) sans surcharger les écrans d'app.
- **Typographie** : Poppins / Inter (titres géométriques, textes lisibles). Ne pas compter sur le texte généré — voir rappel en fin de document.
- **Détails UI** : soft shadows, rounded corners 20px, generous whitespace, subtle gradients, glassmorphism léger autorisé.
- **Persona démo (cohérent partout)** : progression de vie style RPG — radar chart à 8 stats, level/rank, streak 47 jours, 6240 XP.
- **Ratios recommandés** :
  - Écrans app / mockup smartphone : `--ar 9:16`
  - Hero desktop / bannières larges : `--ar 16:9`
  - Hero mobile : `--ar 9:16`
  - Visuels marketing carrés (social) : `--ar 1:1`
  - Wrapped partageable (story) : `--ar 9:16`
  - Bundles multi-device / MacBook / iPad : `--ar 16:9` ou `--ar 4:3`
- **Ligne de négatifs commune** (adapter si besoin) : `--no text-gibberish, watermark, lowres, distorted, extra fingers, cluttered, harsh saturation, stock-photo cliché`

Chaque prompt ci-dessous inclut : style, composition, lighting, colors, mood, angle, level of detail, elements present, premium render, aspect ratio et une ligne de négatifs.

---

## (A) Les 8 écrans de l'app en mockup premium

### **A1 — Écran Dashboard (accueil)**
```
Premium mobile app dashboard UI, hero screen for a life-progress RPG app called Cairn. Clean minimal interface on deep navy #1B2A4A background with subtle sunrise gradient at the top edge. Composition: top greeting header, a large circular daily progress ring in orange #F5A623, XP counter card (6240 XP) and a streak indicator (47-day flame) in orange, level/rank badge in purple #8B5CF6, a green #2EC27E "on track" status pill, and a bottom navigation bar with 5 minimal icons. Soft drop shadows, rounded corners 20px, glassmorphism accents, generous whitespace, Poppins/Inter typography feel. Front-facing straight-on UI mockup, pixel-perfect, high fidelity, crisp vector-like icons. Lighting: soft even studio light with a warm sunrise glow accent. Mood: motivational, calm, premium. Ultra detailed, 4k app design render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **A2 — Écran Défi du jour**
```
Premium mobile app "Daily Challenge" screen UI, Cairn life-progress app. Deep navy #1B2A4A background. Composition: large centered challenge card with rounded 20px corners and soft shadow, a bold challenge title area, a short description block, difficulty tag pill in purple #8B5CF6, XP reward chip in orange #F5A623 (+80 XP), and a prominent green #2EC27E "Complete" CTA button at the bottom. Small stacked-stones cairn icon as a decorative motif. Clean minimal layout, generous whitespace, Poppins/Inter typography feel, subtle sunrise gradient accent. Straight-on front-facing UI mockup, pixel-perfect high fidelity. Lighting: soft even light, warm accent glow. Mood: focused, encouraging, premium. Ultra detailed 4k design render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **A3 — Écran Radar (8 stats)**
```
Premium mobile app screen displaying an 8-axis radar chart (spider chart) for RPG-style life stats, Cairn app. Deep navy #1B2A4A background. Composition: centered octagonal radar chart with 8 labeled axes, the filled area rendered as a translucent gradient blending orange #F5A623, green #2EC27E and purple #8B5CF6, thin luminous grid rings, glowing data points at each vertex. Below the chart, a compact legend of the 8 life categories with small colored dots. Clean minimal UI, rounded 20px cards, soft shadows, generous whitespace, Poppins/Inter feel. Straight-on front-facing UI mockup, pixel-perfect, high fidelity, crisp geometry. Lighting: soft glow emanating from the chart. Mood: analytical, premium, motivational. Ultra detailed 4k render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **A4 — Écran Stats détaillées**
```
Premium mobile app "Statistics" screen UI, Cairn life-progress app. Deep navy #1B2A4A background. Composition: scrollable stack of clean data cards with rounded 20px corners and soft shadows — a total XP card (6240 XP) in orange #F5A623, a small line/area progress graph with a green #2EC27E trend curve, weekly bar chart with orange bars, a streak card (47 days) with a flame icon, and a level/rank card in purple #8B5CF6. Minimal iconography, thin dividers, generous whitespace, Poppins/Inter typography feel, subtle sunrise gradient at header. Straight-on front-facing UI mockup, pixel-perfect high fidelity. Lighting: soft even studio light. Mood: data-driven, premium, satisfying. Ultra detailed 4k design render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **A5 — Écran Badges**
```
Premium mobile app "Badges / Achievements" screen UI, Cairn app. Deep navy #1B2A4A background. Composition: a grid of circular and hexagonal achievement badges, some unlocked and vividly colored (orange #F5A623, green #2EC27E, purple #8B5CF6 medallions with subtle metallic sheen), some locked in muted grey with a small lock icon. Each badge sits on a soft-shadow rounded tile. A header showing badges earned count. Clean minimal layout, rounded 20px corners, generous spacing, Poppins/Inter feel. Straight-on front-facing UI mockup, pixel-perfect, high fidelity, crisp icon detail. Lighting: soft light with gentle highlight on unlocked badges. Mood: rewarding, collectible, premium. Ultra detailed 4k render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **A6 — Écran Calendrier (streak)**
```
Premium mobile app "Calendar / Streak" screen UI, Cairn app. Deep navy #1B2A4A background. Composition: a monthly calendar grid with rounded day cells, completed days filled with a green #2EC27E to orange #F5A623 gradient, today highlighted with an orange ring, missed days in muted navy. A streak header showing a 47-day flame in orange. Minimal weekday labels, soft shadows, rounded 20px container, generous whitespace, Poppins/Inter typography feel, subtle sunrise gradient accent. Straight-on front-facing UI mockup, pixel-perfect high fidelity. Lighting: soft even light, warm glow on the streak flame. Mood: consistent, motivating, premium. Ultra detailed 4k design render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **A7 — Écran Récompenses**
```
Premium mobile app "Rewards" screen UI, Cairn life-progress app. Deep navy #1B2A4A background. Composition: a vertical list of reward cards with rounded 20px corners and soft shadows, each showing a small icon, a reward title area, and an XP cost chip in orange #F5A623; a top balance card displaying available XP (6240 XP) with a purple #8B5CF6 accent; a green #2EC27E "Claim" button on the featured reward. Subtle cairn stacked-stones motif as decoration. Clean minimal layout, generous whitespace, Poppins/Inter feel. Straight-on front-facing UI mockup, pixel-perfect high fidelity. Lighting: soft even studio light with warm accent glow. Mood: aspirational, premium, rewarding. Ultra detailed 4k render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **A8 — Écran Wrapped (bilan annuel in-app)**
```
Premium mobile app "Year Wrapped" summary screen UI, Cairn app, Spotify-Wrapped-style recap. Deep navy #1B2A4A background with a bold sunrise gradient sweeping from orange #F5A623 into purple #8B5CF6. Composition: large celebratory header area, big highlighted numbers blocks (streak, total XP 6240, badges earned), a compact mini radar chart, confetti-like accent particles, and a green #2EC27E highlight pill. Dynamic, energetic yet clean minimal layout, rounded 20px cards, soft shadows, generous whitespace, Poppins/Inter typography feel. Straight-on front-facing UI mockup, pixel-perfect high fidelity. Lighting: vibrant sunrise glow. Mood: celebratory, shareable, premium. Ultra detailed 4k render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

---

## (B) Hero page de vente

### **B1 — Hero desktop (landing page)**
```
Premium SaaS landing page hero section, desktop layout, for a life-progress RPG app called Cairn. Deep navy #1B2A4A background with a soft sunrise gradient (orange #F5A623 fading to purple #8B5CF6) in the upper region and faint mountain-trail-at-sunrise silhouette. Composition: left side reserved as clean empty space for a headline and a CTA button area (green #2EC27E button block), right side featuring a floating smartphone mockup showing the Cairn dashboard UI with radar chart and streak, surrounded by softly floating UI cards (badge, XP counter, level ring) with soft shadows and glassmorphism. Subtle stacked-stones cairn motif on the base. Clean minimal, generous whitespace, rounded 20px, Poppins/Inter typography feel. Cinematic soft studio lighting with warm rim light. Mood: premium, aspirational, motivational, trustworthy. Ultra detailed 4k web design render. --ar 16:9
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **B2 — Hero mobile (landing page mobile)**
```
Premium SaaS landing page hero section, mobile portrait layout, for the Cairn life-progress app. Deep navy #1B2A4A background with a sunrise gradient (orange #F5A623 to purple #8B5CF6) at the top and a faint mountain-trail silhouette. Composition: top clean space reserved for a headline, a centered floating smartphone mockup showing the Cairn dashboard (radar chart, 47-day streak, 6240 XP), two small floating UI accent cards, and a wide green #2EC27E CTA button block near the bottom. Subtle cairn stacked-stones icon. Clean minimal, generous whitespace, rounded 20px, soft shadows, glassmorphism, Poppins/Inter feel. Soft cinematic lighting with warm rim glow. Mood: premium, motivational, inviting. Ultra detailed 4k render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

---

## (C) Visuels marketing

### **C1 — Radar héro (visuel signature)**
```
Hero marketing visual of an 8-axis radar chart (spider chart) as the centerpiece, Cairn life-progress brand. Deep navy #1B2A4A background with a soft radial glow. The radar is large, floating in 3D-ish space, its filled area a luminous translucent gradient of orange #F5A623, green #2EC27E and purple #8B5CF6, with glowing vertex points and thin elegant grid rings, subtle particles and light bloom around it. Faint mountain-sunrise gradient in the far background. Clean minimal composition with generous negative space for headline placement. Premium, cinematic soft lighting, glassmorphism accents. Mood: powerful, analytical, aspirational, premium. Ultra detailed, high fidelity 4k render. --ar 1:1
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **C2 — Mur de badges (achievement wall)**
```
Marketing visual of a "wall of achievement badges" for the Cairn app. Deep navy #1B2A4A background. Composition: an elegant grid of premium collectible medallions and badges — circular and hexagonal, with metallic sheen in orange #F5A623, green #2EC27E and purple #8B5CF6, some with subtle engraved icons (mountain, flame, star, cairn stones). Badges float slightly with soft drop shadows and gentle depth-of-field on outer rows. A few muted locked badges for contrast. Clean minimal arrangement, generous spacing, premium collectible feel. Soft studio lighting with gentle specular highlights. Mood: rewarding, prestigious, motivational, premium. Ultra detailed 4k render. --ar 1:1
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **C3 — Calendrier 365 (année complète)**
```
Marketing visual of a full-year 365-day progress calendar / streak grid, Cairn app. Deep navy #1B2A4A background. Composition: a large clean grid of 365 rounded square cells arranged in a satisfying layout, completed days filled with a smooth gradient from green #2EC27E to orange #F5A623, forming an emergent pattern, a few empty navy cells for realism, and a highlighted current streak zone with an orange glow. Minimal, elegant, GitHub-contribution-graph inspired but premium. Generous whitespace around the grid for headline placement. Soft even lighting with a warm accent glow. Mood: consistency, momentum, achievement, premium. Ultra detailed high fidelity 4k render. --ar 1:1
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **C4 — Récompenses / Certificat**
```
Premium marketing visual of an elegant achievement certificate and reward token, Cairn brand. Deep navy #1B2A4A background with a soft sunrise gradient glow. Composition: a floating premium certificate card with rounded 20px corners, thin gold-orange #F5A623 foil border, an embossed cairn stacked-stones emblem in the center, a purple #8B5CF6 seal/medallion in the corner, and a small green #2EC27E ribbon accent. Blank clean areas reserved for name and title text. Subtle paper texture, soft shadows, light bloom, particles. Clean minimal, luxurious. Cinematic soft studio lighting with warm rim light. Mood: prestigious, rewarding, premium, official. Ultra detailed 4k render. --ar 1:1
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **C5 — Wrapped partageable (story social)**
```
Shareable "Year Wrapped" recap graphic in vertical story format, Cairn life-progress app, Spotify-Wrapped-inspired. Deep navy #1B2A4A base with a bold dynamic sunrise gradient sweeping from orange #F5A623 through purple #8B5CF6, energetic light streaks and confetti particles. Composition: large stacked highlight blocks for big stats (47-day streak, 6240 XP, badges earned), a compact glowing mini radar chart, a green #2EC27E highlight accent, and clean reserved space for headline text at top and a handle/tag at bottom. Bold, celebratory yet premium and minimal, rounded 20px cards, soft shadows, Poppins/Inter typography feel. Vibrant glowing lighting. Mood: celebratory, proud, shareable, premium. Ultra detailed 4k render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

---

## (D) Mockups produit

### **D1 — Smartphone en main**
```
Premium product mockup of a modern bezel-less smartphone held in a person's hand, displaying the Cairn app dashboard UI (radar chart, 47-day streak, 6240 XP, level ring). Clean neutral studio background with a soft deep navy #1B2A4A to warm sunrise gradient. The on-screen UI shows crisp navy interface with orange #F5A623, green #2EC27E and purple #8B5CF6 accents, rounded 20px cards, soft shadows. Realistic hand, natural skin, elegant framing, shallow depth of field, soft reflections on the glass screen. Three-quarter angle, cinematic soft studio lighting with warm rim light. Mood: premium, lifestyle, trustworthy. Ultra detailed, photorealistic 4k product render. --ar 9:16
--no text-gibberish, watermark, lowres, distorted, extra fingers, cluttered, harsh saturation
```

### **D2 — Dashboard sur MacBook**
```
Premium product mockup of an open modern silver laptop (MacBook-style) on a clean minimalist desk, screen displaying the Cairn web dashboard with a large 8-axis radar chart, stats cards, streak and XP panels. Deep navy #1B2A4A UI with orange #F5A623, green #2EC27E and purple #8B5CF6 accents, rounded 20px cards, soft shadows. Background: soft neutral studio with a faint sunrise gradient and a subtle cairn stacked-stones decor object out of focus. Slightly elevated three-quarter front angle, shallow depth of field, soft reflections on the screen. Cinematic soft studio lighting with warm rim light. Mood: professional, premium, focused. Ultra detailed photorealistic 4k product render. --ar 16:9
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **D3 — Tablette iPad**
```
Premium product mockup of a modern tablet (iPad-style) in portrait orientation on a clean surface, displaying the Cairn app UI — badges grid or radar screen — with deep navy #1B2A4A interface and orange #F5A623, green #2EC27E, purple #8B5CF6 accents, rounded 20px cards, soft shadows. Optional slim stylus resting beside it. Neutral studio background with a soft sunrise gradient. Elegant three-quarter angle, shallow depth of field, subtle screen reflections. Cinematic soft studio lighting with warm rim light. Mood: premium, refined, modern. Ultra detailed photorealistic 4k product render. --ar 4:3
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **D4 — Bundle PDF (pages en éventail)**
```
Premium product mockup of a printable PDF workbook/guide bundle, pages fanned out in an elegant arc, Cairn brand. Clean neutral studio background with a soft deep navy #1B2A4A to sunrise gradient. The fanned pages show clean minimal layouts — a cover page with a cairn stacked-stones emblem, tracker pages with grids, a radar-chart page, badge pages — using navy, orange #F5A623, green #2EC27E and purple #8B5CF6 accents, rounded 20px elements, generous whitespace, Poppins/Inter typography feel. Slight paper thickness and soft drop shadows for realism. Top-down slightly angled overhead view. Soft even studio lighting with warm accent. Mood: premium, organized, valuable. Ultra detailed photorealistic 4k product render. --ar 4:3
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **D5 — Aperçu template Notion**
```
Premium product mockup of a Notion-style template preview, shown on a laptop screen or as a clean browser window frame, Cairn life-progress system. The interface mimics a modern minimalist workspace: a sidebar with page items, a main area with a life-dashboard — an 8-category tracker, a habit/streak table, a radar visualization block, and reward lists — styled with deep navy #1B2A4A accents and orange #F5A623, green #2EC27E, purple #8B5CF6 highlights, rounded corners, soft shadows, generous whitespace, Poppins/Inter feel. Neutral studio background with faint sunrise gradient. Straight-on or slight three-quarter angle. Soft even lighting. Mood: organized, productive, premium. Ultra detailed 4k product render. --ar 16:9
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **D6 — Bundle premium multi-device**
```
Premium multi-device product bundle mockup for the Cairn app, showing a smartphone, a tablet and a laptop grouped together in an elegant composition, each screen displaying a different Cairn UI (phone: dashboard with streak; tablet: badges grid; laptop: radar dashboard). Consistent deep navy #1B2A4A interface with orange #F5A623, green #2EC27E, purple #8B5CF6 accents, rounded 20px cards, soft shadows. Clean neutral studio background with a soft sunrise gradient and subtle cairn stacked-stones decor out of focus. Three-quarter hero angle, cohesive reflections, shallow depth of field. Cinematic soft studio lighting with warm rim light. Mood: premium ecosystem, complete, aspirational. Ultra detailed photorealistic 4k product render. --ar 16:9
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **D7 — Pack VIP avec certificat**
```
Premium "VIP pack" product mockup for the Cairn brand, an elegant flat-lay of exclusive items arranged on a deep navy #1B2A4A surface with a soft sunrise gradient glow: a premium certificate card with gold-orange #F5A623 foil border and an embossed cairn stacked-stones emblem, a smartphone showing the Cairn app, a printed guide booklet, a purple #8B5CF6 medallion/seal, and a small green #2EC27E ribbon accent. Luxurious, minimal, curated arrangement with soft drop shadows and gentle specular highlights. Slightly angled overhead view. Cinematic soft studio lighting with warm rim light. Mood: exclusive, prestigious, premium, gift-worthy. Ultra detailed photorealistic 4k product render. --ar 4:3
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

---

## (E) Ambiances de marque (cairn / montagne / lever du soleil)

### **E1 — Cairn de pierres empilées au lever du soleil**
```
Brand ambiance image: an elegant cairn of smooth stacked stones balanced on a minimalist surface, silhouetted against a soft mountain-sunrise sky. Deep navy #1B2A4A tones in the shadows transitioning into a warm orange #F5A623 sunrise glow, with faint purple #8B5CF6 in the sky gradient and a hint of green #2EC27E in distant hills. Minimal composition, generous negative space, soft atmospheric haze, gentle light bloom. Premium, calm, meditative. Cinematic golden-hour lighting, soft rim light on the stones, shallow depth of field. Mood: balance, aspiration, quiet ambition, premium. Ultra detailed 4k render. --ar 16:9
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **E2 — Sentier de montagne à l'aube**
```
Brand ambiance image: a serene mountain trail winding upward toward a summit at sunrise, minimalist and premium. Deep navy #1B2A4A foreground silhouettes fading into a luminous sunrise gradient of orange #F5A623 and soft purple #8B5CF6, with subtle green #2EC27E hints in the valley. A faint winding path leads the eye upward, soft mist, gentle light rays, generous negative space in the sky for headline placement. Cinematic golden-hour lighting, atmospheric depth. Mood: journey, progress, calm ambition, premium. Ultra detailed high fidelity 4k landscape render. --ar 16:9
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

### **E3 — Abstraction minimale cairn (motif de marque)**
```
Minimal abstract brand ambiance: a stylized geometric interpretation of a cairn — clean stacked rounded stone shapes forming an ascending stack — rendered as a premium graphic on a deep navy #1B2A4A background. Each stone in a subtle gradient blending orange #F5A623, green #2EC27E and purple #8B5CF6, with a faint sunrise glow behind and soft ambient particles. Lots of negative space, elegant and iconic, poster-like. Soft studio lighting with gentle bloom. Mood: identity, balance, upward momentum, premium, minimal. Ultra detailed 4k render. --ar 1:1
--no text-gibberish, watermark, lowres, distorted, cluttered, harsh saturation
```

---

## Conseils de post-traitement (3)

1. **Harmoniser la colorimétrie** : passer chaque visuel dans un même léger LUT/grade (léger boost du navy dans les ombres, chaleur orange dans les hautes lumières) pour que toute la série paraisse issue de la même session. Éviter la sursaturation.
2. **Upscale + nettoyage** : agrandir en x2/x4 (upscaler IA type Topaz/Gigapixel ou l'upscale natif du moteur), puis retoucher les artefacts (bords d'écrans, doigts, reflets incohérents) avant intégration.
3. **Ombres et intégration** : ajouter/renforcer des ombres portées douces et cohérentes sous les mockups, et poser les visuels sur des fonds navy unifiés pour un rendu cohérent sur la landing page et les réseaux.

---

## Rappel important — le texte

Ne comptez **jamais** sur le texte généré par le moteur d'images : il est presque toujours illisible ou déformé. Générez les visuels **sans texte fiable**, puis ajoutez proprement tous les libellés, titres, chiffres (streak, XP, niveau), CTA et mentions légales **dans Canva** (ou Figma) avec la vraie typographie (Poppins/Inter) et les bonnes couleurs. Réservez volontairement des zones vides (negative space) dans les prompts pour accueillir ce texte au propre.

> Note : aucune promesse de résultat garanti n'est faite dans ces visuels ; rester sur un ton motivant et honnête (progression, régularité, effort).
