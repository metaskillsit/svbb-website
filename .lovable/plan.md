# Two-Way Bridge Repositioning — Implementation Plan

Goal: keep the existing design system, components, and images. Only adjust copy, add one homepage section, one new page, and minor nav/CTA updates. All copy goes through i18n (en/vi/zh) to match the current setup.

---

## 1. Homepage Hero (`HeroSection.tsx` + i18n)

Update i18n keys only — no layout change.

- `hero.tagline` → "SINGAPORE–VIETNAM INVESTMENT & MARKET ENTRY"
- `hero.title1` / `hero.titleHighlight` / `hero.title2` → "Your Strategic Gateway Between **Vietnam and Singapore**"
- `hero.desc` → "We support Singapore companies entering Vietnam and Vietnam-based investors exploring opportunities in Singapore, backed by trusted networks and structured, compliant engagement models."
- Keep stats (11+ years, 11,000+ companies) and primary CTA unchanged.
- Change secondary CTA (`hero.cta2`) label → "How We Work With Investors" and point its `href` to `#investors`.

## 2. New homepage section: "For Vietnam-Based Investors & Family Offices"

- Create `src/components/InvestorsSection.tsx` with id `investors`.
- Reuse current styling tokens (`bg-cream` or `bg-navy` alternation, `font-heading`, `text-gradient-gold`, card classes used in `ContactSection`/`AboutServicesSection`).
- Structure:
  - Eyebrow + Title + 2–3 sentence intro (representative/introducer, source–screen–coordinate, NDA & success-fee mandates).
  - 3 feature cards: "Representative in Singapore", "Structured, Mandate-Based Engagement", "Bilateral Networks You Can Leverage".
  - 3-step "How We Work With Investors" strip below the cards: NDA & Objectives → Screened Deal Flow & Coordination → Negotiation Support & Handover.
  - CTA link to the new Mandates page.
- Mount in `src/pages/Index.tsx` between `VietChamBanner` and `GallerySection` (i.e., just under hero, before Trips & Events).

## 3. New page: "Mandates, NDAs & Success-Fee Engagements"

- Create `src/pages/Mandates.tsx` (route `/mandates`), structured like `About.tsx`: Navbar + navy hero band + content sections + Footer.
- Register route in `src/App.tsx`.
- Sections (heading + 2–3 sentences each, all via i18n):
  1. Engagement Structure (introducer/coordinator, not discretionary manager; scope in written mandate; success-based comp).
  2. Confidentiality & NDAs (mutual NDA; either party's draft acceptable; info used only for evaluating opportunities).
  3. Success-Fee Principles (percentage of transaction value, aligned with market practice; tiers/caps disclosed only in signed mandate — no numbers on site).
  4. Regulatory Position (not regulated investment advice; investors rely on own legal/tax/financial advisers; our role limited to introductions and coordination).

## 4. Light tweaks to existing sections (copy only)

- `GallerySection` ("Trips & Events") intro: append sentence about networks/visits also supporting Vietnam-based investors and family offices exploring Singapore.
- `VietnamBusinessesSection` title: add the "Trusted by leading Vietnamese companies…" sub-line.
- `PartnersSection` ("Our Vietnam Ecosystem"): append closing sentence about the ecosystem supporting both directions.
- All via i18n keys.

## 5. Navigation & CTA

- `Navbar.tsx`: add a desktop + mobile link "For Investors" pointing to `/#investors` (and on non-home routes still works via hash). Place between About and Services to keep balance.
- `Contact.tsx`: add a short subtitle under existing description: "Investors: contact us to request our standard NDA and mandate outline."

## 6. i18n

- Add all new strings to `en.json`, `vi.json`, `zh.json` under new namespaces: `investors.*`, `mandates.*`, plus updated `hero.*`, `gallery.*`, `vietnamBusinesses.*`, `partners.*`, `contact.*`, `nav.forInvestors`.
- Provide proper Vietnamese and Chinese translations (not English fallback).

---

## Files to be created
- `src/components/InvestorsSection.tsx`
- `src/pages/Mandates.tsx`

## Files to be edited
- `src/App.tsx` (route)
- `src/components/Navbar.tsx` (For Investors link)
- `src/components/HeroSection.tsx` (secondary CTA href)
- `src/pages/Index.tsx` (mount InvestorsSection)
- `src/pages/Contact.tsx` (investor subtitle)
- `src/i18n/locales/{en,vi,zh}.json` (all copy)

## Out of scope
- No new images, no layout/design system changes.
- No fee numbers or specific investor groups mentioned anywhere.
- No changes to Trips & Events, Vietnam partners, or ecosystem layouts — copy only.
