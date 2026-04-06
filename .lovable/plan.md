

# SVBB Website Rebuild — Comprehensive Improvement Plan

## Summary

Transform the current single-page site into a conversion-focused website that packages SVBB's MRA Grant offering, Vietnam-side partnerships, and business trip showcase into a clear user journey: **See the package → Watch video → Speak to consultant**.

---

## Current Issues

- Site reads like a brochure — no clear call-to-action funnel
- No partner/ecosystem section (VietCham, The Void, T&T Group, SHB)
- No video integration or media showcase
- MRA Grant section lacks a "one-click package" view
- No distinction between Hanoi vs HCMC entry paths
- Services section is generic — doesn't map to the actual offering deck

---

## Proposed Site Structure (top to bottom)

```text
┌─────────────────────────────────────────┐
│  NAVBAR (sticky)                        │
│  Home | Packages | MRA Grant | Partners │
│  Gallery | Team | Contact               │
├─────────────────────────────────────────┤
│  HERO — "One Click to Vietnam"          │
│  Headline + Video CTA + "Speak to       │
│  Consultant" button                     │
├─────────────────────────────────────────┤
│  PACKAGES SECTION (NEW)                 │
│  Visual cards: Hanoi Package vs HCMC    │
│  Package — each shows: what's included, │
│  MRA funding %, photos, "Learn More"    │
├─────────────────────────────────────────┤
│  MRA GRANT (improved)                   │
│  Simplified 4-step flow + "Am I         │
│  Eligible?" interactive checklist       │
├─────────────────────────────────────────┤
│  PARTNERS ECOSYSTEM (NEW)              │
│  Logo row: VietCham, The Void, T&T      │
│  Group, SHB + brief role descriptions   │
├─────────────────────────────────────────┤
│  VIETNAM MARKET (kept, refined)         │
├─────────────────────────────────────────┤
│  GALLERY → "TRIPS & EVENTS" (revamped)  │
│  Photo grid + embedded video player     │
│  Each trip = card with photos + video   │
├─────────────────────────────────────────┤
│  TEAM (kept)                            │
├─────────────────────────────────────────┤
│  CONTACT → "Speak to a Consultant"      │
│  Simplified form + WhatsApp/calendar    │
│  booking link                           │
├─────────────────────────────────────────┤
│  FOOTER                                 │
└─────────────────────────────────────────┘
```

---

## Detailed Changes

### 1. Hero Section — Sharpen the Funnel

- Replace generic headline with **"Your MRA-Funded Gateway to Vietnam — One Click to Get Started"**
- Add a prominent **"Watch Our Video"** button that opens a video modal (YouTube/Vimeo embed placeholder — you can supply the URL later)
- Keep "Speak to Consultant" as the primary gold CTA linking to #contact
- Retain trust badges (11+ years, 3000+ clients, bilateral trade)

### 2. New: Packages Section (`PackagesSection.tsx`)

Two large visual cards side by side:

**Hanoi Package** and **Ho Chi Minh City Package** — each showing:
- Key industries covered (manufacturing, tech, F&B, etc.)
- What's included: market research, business matching, entity setup, site visits
- MRA Grant coverage callout ("Up to 70% funded")
- A real photo placeholder for each city
- "View Full Deck" button (links to a future PDF or triggers contact)
- "Watch Trip Video" button

Also includes a note: *"Not sure which city? Book a free consultation and we'll recommend."*

### 3. MRA Grant Section — Add Interactivity

- Keep the existing 4-step process cards
- Add a simple **"Check Your Eligibility"** interactive checklist (3 yes/no questions: SG-registered? 30% local shareholding? <S$100M revenue?) with a result message
- Keep the 70% / S$100K / 100% stats bar

### 4. New: Partners Ecosystem Section (`PartnersSection.tsx`)

A clean logo strip + description cards for each Vietnam-side partner:

| Partner | Role |
|---------|------|
| **VietCham** (vietcham.org.sg) | Singapore-Vietnam Chamber of Commerce — networking, events, policy advocacy |
| **The Void** (thevoid.vn) | Co-creation space in Vietnam — startup matching, co-working, Board-as-a-Service for SG companies entering Vietnam |
| **T&T Group** (ttgroup.com.vn) | Major Vietnamese conglomerate — real estate, energy, agriculture, finance — potential JV/investment partner |
| **SHB Bank** (shb.com.vn) | Saigon-Hanoi Commercial Bank — banking, trade finance, corporate accounts for SG businesses in Vietnam |

Each card: logo placeholder, 2-line description, "Learn More" external link. Section subtitle: *"Our Vietnam ecosystem ensures you land with the right connections from Day 1."*

### 5. Gallery → Trips & Events (Revamped)

- Rename section to **"Trips & Events"**
- Add a **video embed area** at the top (YouTube placeholder — you supply the link later)
- Keep the photo grid below but make each item clickable to open a lightbox modal
- Add a "View All Photos" expansion or carousel

### 6. Contact → "Speak to a Consultant"

- Rename heading to **"Speak to a Consultant"**
- Add a **WhatsApp quick-link button** (pre-filled message to your number)
- Add **"Book a Call"** button placeholder (for future Calendly integration)
- Simplify form: Name, Email, Company, "I'm interested in…" dropdown (Hanoi Package / HCMC Package / MRA Grant / General Inquiry)

### 7. Navbar Update

Update nav links to match new sections:
`Home | Packages | MRA Grant | Partners | Why Vietnam | Trips & Events | Team | Contact`

### 8. About Section — Minor Refinement

- Move "About SVBB" content into a shorter block
- Replace "37% Success Rate" stat (unclear meaning) with something concrete like "50+ Trips Led"

---

## Technical Approach

- **New files**: `PackagesSection.tsx`, `PartnersSection.tsx`, video modal component
- **Modified files**: `HeroSection.tsx`, `MRAGrantSection.tsx`, `GallerySection.tsx`, `ContactSection.tsx`, `Navbar.tsx`, `Footer.tsx`, `AboutSection.tsx`, `Index.tsx`
- **No new dependencies** — video embed uses native iframe, lightbox uses dialog component already in the project
- All sections remain on the single-page layout with anchor navigation

