# KLER Design System

**KLER** (Thai: **เกลอ** — *"close friend / buddy"*), by **HeyKler**, is an **AI Accessibility & Care Ecosystem**. It pairs **KLER AI smart glasses** with a mobile companion app to help **older adults and people with visual impairment** see, remember, and live independently — with a caregiver/family network alongside. Its face is **Kler**, a friendly purple-and-white border-collie mascot in round purple glasses.

- **Tagline:** *See better. Live freer. Together.*
- **Essence line:** *Kind Life · Empower · Relief*
- **Slogan (TH):** *เพื่อนที่มองโลกไปกับคุณ* ("a friend who sees the world with you")
- **Thai signature:** *Kler เป็นเพื่อน ที่มองโลกไปกับคุณ*
- **Traits:** Friendly · Empathetic · Adaptable · Empowering (also: Reliable · Intelligent · Loyal)

The ecosystem spans five needs: **Vision assistance · Reminders & daily care · Smart medication · Emergency (SOS) · Family connectivity**, coordinated by a voice-first **AI assistant**.

## Products / surfaces
1. **KLER App** — the companion mobile app (home dashboard, AI chat assistant, daily-care timeline, gallery, notes, profile). Voice-first, high-contrast, large touch targets for older users. → `ui_kits/kler-app/`
2. **KLER AI Glasses** — the hardware (camera + audio guidance). Represented in brand/product assets.
3. **Kler mascot & brand system** — mascot, logo, personality, sub-modes (Guide / Learn / Explore).

## Sources provided
Everything below was derived from uploaded brand assets (no live codebase or Figma was attached):
- `assets/brand-source/full-brand-sheet.png` — master brand board (colors, type, logo, mascot, UI elements, ecosystem).
- `assets/brand-source/logo-sheet.png` — logo variations, app icons, construction, clear space.
- `assets/brand-source/mascot-sheet.png`, `mascot-three-modes.png` — mascot turnaround, expressions, outfits, Guide/Learn/Explore modes.
- `assets/brand-source/app-platform.png`, `app-chatbot.png` — real app screen mockups (home dashboard, care, chat).
- `assets/products/kler-glasses.png`, `kler-accessories.png` — product photography.
- Website referenced: **https://www.heykler.com/** (not fetchable from this environment).
- `uploads/Video Introduce Hey Kler.mp4` — intro video (not processed).

---

## CONTENT FUNDAMENTALS — how KLER writes

**Bilingual, Thai-first.** Product UI and marketing lead in **Thai**, with **English** for labels, feature names, and the wordmark. The Thai voice is central; English is supportive/technical.

**Voice = a caring companion, not a corporation.** Copy speaks as Kler — a gentle friend who is *with* you. Warm, plain, reassuring, never clinical or salesy.

**Person & address:**
- Speaks *to one person*, directly and softly. In Thai it uses the polite female particle **"ค่ะ"** and respectful address like **"คุณย่า"** (grandma) — e.g. *"สวัสดีค่ะ คุณย่า ถามได้เลยนะคะ"* ("Hello, grandma — feel free to ask me anything").
- In English marketing it's "you / your" — *"Kler is a friend who sees the world with you."*

**Tone traits:** friendly, empathetic, empowering, calm. Short sentences. No jargon. Reassurance over instruction ("เที่ยงนี้มี 1 รายการค่ะ" — "There's just 1 item at noon"). It celebrates independence and dignity.

**Casing:**
- **Wordmark KLER** — all caps, wide tracking.
- English section labels / eyebrows — UPPERCASE with wide letter-spacing (e.g. `COLOR SYSTEM`, `MEET KLER`).
- Feature names — Title Case or UPPERCASE (VISION ASSISTANCE, GUIDE KLER).
- Body — sentence case.

**Emoji:** Used *sparingly* and only where it aids warmth/scanning in chat (e.g. a 💊 next to a medication line). Not used in marketing headlines or UI chrome. Prefer line icons over emoji for interface elements.

**Numbers & time:** Thai Buddhist-era dates appear in-app (e.g. *10 มิ.ย. 2568*). Times are plain (09:24, 12:00). Countdowns are friendly ("อีก 2 ชม." = "in 2 hrs").

**Example copy bank:**
- Greeting: *"สวัสดีค่ะ คุณย่า"* / "Meet Kler."
- Reassurance: *"พร้อมดูแลคุณย่าเสมอ"* ("Always here to care for you").
- CTA: "Get Started" · "Learn More" · *"แตะเพื่อถามผู้ช่วย"* ("Tap to ask the assistant").
- Values: *Kind Life · Empower · Relief.*

---

## VISUAL FOUNDATIONS

**Overall vibe:** soft, friendly, futuristic-but-warm. "Galaxy meets care." Light, airy, high-contrast, generous whitespace — approachable for older users.

**Color.** Two brand hues on a cool, lavender-tinted neutral base:
- **Galaxy Purple `#7B61FF`** — primary. Used for CTAs, active states, headings accents, the mark.
- **Aurora Mint `#63E0D8`** — accent/secondary. Used in gradients, the mint end of the logo, positive accents.
- **Lavender `#B9A7FF`**, pale lavender surfaces `#EDE6FF`.
- **Midnight `#1F2146`** / ink `#16182E` — text & dark surfaces.
- **Moon White `#F6F4FC`** — page background.
- **Signature gradient:** `120deg, #7B61FF → #63E0D8` (purple→mint). Also a radial **Galaxy Orb** gradient for AI presence.
- Semantic: success/online green `#22B07D`, warning amber `#F5A524`, SOS red `#EF4444`, info = purple.

**Typography.** **Sora** for all Latin display + UI (Regular→ExtraBold), tight tracking on display sizes, wide tracking on uppercase eyebrows. **Noto Sans Thai** for Thai copy *(substitute — see Fonts note)*. See `tokens/typography.css`.

**Backgrounds.** Mostly clean white / Moon White. Accents via **aurora washes** (soft purple→mint→white radial/linear gradients), the **Galaxy Orb**, and tiny four-point **sparkles/stars** scattered decoratively. Hero/marketing uses the **3D mascot** on light gradient backdrops. No heavy photography in UI; product shots are on clean white. No noise/grain.

**Illustration.** The **Kler mascot** (Pixar-style 3D border collie, purple/white fur, round purple glasses, K collar tag) is the primary illustration. Sub-modes: **Guide** (harness + cane), **Learn** (backpack + tablet), **Explore** (adventure hat + backpack). Warm, cheerful, cool-purple palette.

**Corner radii — "Rounded Everything".** Generous throughout: inputs/chips 16px, cards 20–24px, sheets 32px, buttons & badges fully pill. Nothing sharp.

**Cards.** White surface, 20–24px radius, **soft diffuse purple-tinted shadow** (`--shadow-md`), often a hairline `#E0DDEC` border. Tinted (lavender), gradient (brand), aurora, and frosted-glass variants exist. Cards feel light and float gently.

**Shadows / elevation.** Soft, low-contrast, **purple-tinted** (not neutral gray). CTAs and the assistant FAB carry a **colored glow** (`--shadow-brand`). Frosted **Soft Glass** surfaces (backdrop-blur 18px, translucent white, light border) appear over gradients.

**Transparency & blur.** Used for the "Soft Glass" aesthetic — glass headers/cards over aurora or orb backdrops. Sparingly, for depth.

**Buttons.** Primary = gradient pill with colored glow (often a trailing arrow). Secondary = white/outline pill with purple border. Ghost = text-only. Danger = solid red (SOS). All fully rounded.

**Motion.** Gentle and friendly. Ease-out for entrances/transitions (`cubic-bezier(0.22,1,0.36,1)`). A soft **bounce** (`--ease-bounce`) for affirmations (task done, reminder acknowledged). The Galaxy Orb **breathes** (slow pulse) when the assistant is active. No harsh or fast motion — respect reduced-motion.

**Hover states.** Cards lift `translateY(-3px)` and deepen shadow. Buttons keep color; icon buttons scale slightly.

**Press states.** Buttons/chips **shrink** to ~0.96 scale (tactile). Icon buttons to ~0.92. No color inversion.

**Borders / hairlines.** 1px `--neutral-200` `#E0DDEC` on cards/inputs; 1.5px purple on outline controls; focus = 4px translucent purple ring.

**Layout rules.** App is a 390px phone frame with a fixed top greeting/header and a fixed **bottom tab bar** whose centre item is an **elevated gradient FAB** (the assistant) breaking the top edge. Large hit targets (≥44px). High contrast for accessibility.

**Imagery vibe:** cool, bright, purple-forward, clean studio lighting, white/gradient backgrounds. Friendly and premium.

---

## ICONOGRAPHY

- **Style:** rounded, consistent **line icons, ~2px stroke**, drawn in **Galaxy Purple** (muted neutral when inactive). Occasionally circled (e.g. SOS in a ring). This matches the source brand icon set (Vision=eye, Reminder=bell, Medication=pill, Emergency=SOS, Family=people, Navigation=paper-plane).
- **System used here:** **Lucide** (`https://unpkg.com/lucide` via CDN) — a rounded 2px line set that is the closest open match to KLER's custom icons. **This is a SUBSTITUTE** for the brand's bespoke icons (which exist only inside raster brand sheets); flagged for the user. Cards and the UI kit load Lucide from CDN and color it with `--purple-500`.
  - Mapping: Vision→`Eye`, Reminder→`Bell`, Medication→`Pill`, Emergency→`TriangleAlert`, Family→`Users`, Navigate→`Navigation`, Home→`House`, Gallery→`Image`, Assistant→`MessageCircle`, Notes→`ClipboardList`, Capture→`Camera`, AI→`Sparkles`.
- **Emoji:** only inside chat content for warmth (💊), never in chrome.
- **Unicode as icons:** avoid; use Lucide.
- **Logo mark** doubles as an iconographic motif (the K on collar tags, badges, backpack pins).

---

## FONTS — substitution note ⚠️
- **Sora** is the exact brand face and is available on Google Fonts — used as-is.
- The Thai face in the source mockups is a friendly looped Thai sans. I could not extract the original font file, so I substituted **Noto Sans Thai** (Google Fonts). A looped alternative such as **IBM Plex Sans Thai Looped** may match the mockups more closely. **Please confirm the intended Thai font or share the font files** so I can swap it in.
- Fonts are loaded via Google Fonts CSS in `tokens/fonts.css` (so the compiler reports "0 @font-face" — expected; the webfonts come from Google's CDN rather than local binaries).

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (import-only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**`assets/`**
- `logo/` — `kler-logo.png` (full-color lockup mark), `kler-appicon.png`.
- `mascot/` — `kler-hero.png` (full body), `kler-face.png` (avatar face crop), `kler-guide.png`, `kler-learn.png`, `kler-explore.png`, `expr-*.png` (5 expressions), `turn-*.png` (4 turnaround views).
- `products/` — `kler-glasses.png`, `kler-accessories.png`.
- `brand-source/` — original uploaded brand sheets & app mockups (reference).

**`components/`** (namespace `window.KLERDesignSystem_1a4c33`)
- `actions/` — **Button**, **IconButton**
- `forms/` — **Input**, **Chip**
- `data-display/` — **Card**, **Badge**, **Tag**, **Avatar**, **ProgressRing**
- `navigation/` — **BottomNav**
- `feedback/` — **ChatBubble**
- `brand/` — **Logo**, **Orb**

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab.

**`ui_kits/kler-app/`** — interactive recreation of the KLER companion app (home, assistant chat, daily care).

**`slides/`** — sample branded slide templates (title, feature, quote, section).

> The **Design System tab** renders every `@dsCard`-tagged HTML. Consuming projects mount components via `const { Button } = window.KLERDesignSystem_1a4c33`.
