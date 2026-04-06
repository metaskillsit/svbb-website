

# Full Page Redesign — Compact, Reorder & Consolidate

## What Changes

### 1. Compact the Hero (HeroSection.tsx)
- Change `min-h-screen` to `min-h-[75vh]` so the next section peeks into view
- Add an animated scroll-down indicator (chevron arrow) at the bottom with "See us in action" text
- Reduce vertical padding slightly

### 2. Reorder Sections (Index.tsx)
New order:
```text
Navbar
Hero              — compact, 75vh
Gallery/Videos    — "See Us In Action" — moved from #8 to #2
Lead Survey       — moved from #4 to #3
Partners          — moved from #6 to #4
About + Services  — NEW consolidated section (#5)
Packages + MRA    — NEW consolidated section (#6)
Why Vietnam       — #7
Team              — #8
Contact           — #9
Footer
```

### 3. Consolidate About + Services → AboutServicesSection.tsx (new file)
- Left column: About text (trimmed), office addresses, stats row
- Right column / below on mobile: 6 service cards in a 2×3 grid
- Remove the standalone CTA image block from ServicesSection (move CTA into contact)
- Delete old `AboutSection.tsx` and `ServicesSection.tsx` (or stop importing them)

### 4. Consolidate Packages + MRA Grant → PackagesMRASection.tsx (new file)
- Use Radix `Tabs` component (already installed) with two tabs: "Entry Packages" | "MRA Grant"
- Tab 1 contains the current Packages content (Hanoi & HCMC cards)
- Tab 2 contains the current MRA Grant content (4 steps + stats bar)
- Shared CTA at the bottom: "Check If You Qualify →" linking to survey
- Delete old standalone `PackagesSection.tsx` and `MRAGrantSection.tsx` imports

### 5. Scroll Cue in Hero
- Animated bouncing chevron (`ChevronDown` from lucide) at bottom-center of hero
- Small label: "See us in action ↓"
- Uses CSS `animate-bounce` from Tailwind

## Files Modified
| File | Action |
|------|--------|
| `src/components/HeroSection.tsx` | Reduce height to 75vh, add scroll cue |
| `src/pages/Index.tsx` | Reorder imports and section order |
| `src/components/AboutServicesSection.tsx` | **New** — merged About + Services |
| `src/components/PackagesMRASection.tsx` | **New** — tabbed Packages + MRA |
| `src/components/AboutSection.tsx` | No longer imported (can keep file) |
| `src/components/ServicesSection.tsx` | No longer imported |
| `src/components/PackagesSection.tsx` | No longer imported |
| `src/components/MRAGrantSection.tsx` | No longer imported |

## Technical Details
- Tabs use existing `@radix-ui/react-tabs` and `src/components/ui/tabs.tsx`
- All existing assets (images, icons) are reused — no new dependencies
- Scroll cue uses `animate-bounce` + anchor link to `#trips`
- Mobile-first: consolidated sections stack vertically on small screens

