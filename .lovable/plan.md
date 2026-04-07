

# Add New Video and Trip Photos to Gallery

## What Changes

### 1. Copy 8 uploaded photos to `src/assets/gallery/`
Copy all uploaded images into a `gallery` subfolder for organization, since more batches are coming:
- `QPTS3586.webp` — Business presentation meeting
- `QPTS3630.webp` — Factory/workshop visit
- `QPTS3674.webp` — SMU Academy handshake
- `QPTS3705.webp` — Group dinner
- `QPTS3714.webp` — Certificate of Appreciation
- `QPTS3816.webp` — UOB speaker presentation
- `QPTS3831.webp` — Audience at seminar
- `QPTS3836.webp` — Sunwah group photo

### 2. Add 3rd YouTube video
Embed `https://www.youtube.com/embed/xgb1oDP2Yj4` — change the video grid from 2-column to 3-column (`md:grid-cols-3`) to fit all three.

### 3. Expand the photo grid
Replace the current 3-item `galleryItems` array with the 8 new photos (plus keep the 3 existing ones = 11 total). Use a responsive grid (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4`) with descriptive titles/captions for each.

### 4. Keep the lightbox
All photos remain clickable with the existing lightbox overlay — no changes needed there.

## Files Modified
| File | Action |
|------|--------|
| `src/assets/gallery/*` | 8 new images copied from uploads |
| `src/components/GallerySection.tsx` | Add 3rd video, expand photo grid with all 11 images |

## Technical Notes
- Images imported as ES6 modules from `@/assets/gallery/`
- Folder structure `src/assets/gallery/` keeps trip photos organized for future batches
- Lazy loading on all new images

