# Handoff — Anchor Garage Door WordPress → Next.js Conversion

## What this is

A pure Next.js 16 (App Router, TypeScript, Tailwind CSS v4) rebuild of
https://www.anchorgaragedoor.com/, a WordPress + Elementor site. There is no
WordPress, PHP, or database dependency left anywhere in this project — every
page is a static React component with the original copy, images, and fonts
hard-coded in.

The site was converted by:
1. Downloading the live HTML of every page with `curl`.
2. Parsing each page with `cheerio` to pull out the literal text, image URLs,
   links, and form fields in document order.
3. Downloading every image, icon, and the site's self-hosted font files.
4. Rebuilding each page as a React component using that extracted content —
   no invented copy, no stock images.
5. **A second pass** (see "Revision 2" below) where the rebuild was opened
   side-by-side with the live site in Chrome and corrected against actual
   computed styles (colors, hover states, background images, form field
   skins, etc.) pulled live from the DOM/CSSOM, not just the static HTML.

## Stack

- Next.js 16 (App Router, Turbopack, Cache Components)
- TypeScript
- Tailwind CSS v4 (`@theme inline` tokens in `app/globals.css`)
- Fonts: **Satoshi** (self-hosted, the site's real body/heading font — not a
  Google font) via `next/font/local`, plus **Plus Jakarta Sans** via
  `next/font/google` for the handful of elements the original Elementor kit
  set in that typeface (section eyebrow labels).

## Site structure (matches the original URLs 1:1)

| Route | Source |
|---|---|
| `/` | Home |
| `/about-us` | About |
| `/projects` | Projects gallery |
| `/blogs` | Blog listing |
| `/freequote` | Quote request form |
| `/service/[slug]` (×10) | Service detail pages, data-driven from `lib/services.ts` |
| `/<post-slug>` (×6) | Individual blog posts — these live at the **root**, not under `/blogs/`, because that's where WordPress served them |

Shared chrome: `components/Header.tsx` (top bar + logo + dropdown nav +
mobile menu) and `components/Footer.tsx`, both driven by the same data used
on every page, exactly like the original theme's header/footer templates.

## Content/data files

- `lib/services.ts` — all 10 services (title, hero icon, **hero background
  photo**, hero copy, body paragraph, brand logo lists for the "trusted
  partners" galleries).
- `lib/blogPosts.ts` — all 6 blog posts, broken into paragraph/heading
  blocks in their original order.

Every service page is generated from `lib/services.ts` through
`app/service/[slug]/page.tsx`, and every blog post through
`components/BlogPostLayout.tsx`, because the real site's Elementor templates
were themselves identical across all 10 service pages and all 6 posts — only
the body copy (and, per service, the hero photo) changed.

## Key shared components

- `components/HomeHero.tsx` — the homepage's two-slide hero (garage / gate),
  auto-advancing every 6s with dot pagination, matching the live site's
  Elementor "nested carousel": a real photo on the left, a solid accent-blue
  panel with left-aligned white text on the right.
- `components/InnerHero.tsx` — the full-bleed photo header used on About Us,
  Projects, and every service page: a real photo background, a 60%-opacity
  dark-navy overlay, and centered white text/buttons.
- `components/IconHeading.tsx` — the reusable circular blue house-icon +
  heading used by the light contact sections.
- `components/ContactForm.tsx` — underline-style fields (transparent
  background, bottom border only) matching the live site's Formidable
  "minimal" skin, used on Freequote, Projects, and the homepage's bottom
  "Get In Touch" section.
- `components/QuickScheduleForm.tsx` — the Tailwind-only four-field form and
  verification row inside the homepage's dark "Schedule A Service Request"
  card.
- `components/NewsletterForm.tsx` — the single-field email signup in the
  footer.

## Assets

- `public/images/` — every image, icon (SVG) and brand logo used across the
  site, downloaded at original resolution (duplicate WordPress-generated
  thumbnail sizes like `-300x150` were skipped in favor of the one
  full-resolution original). This includes the per-page hero background
  photos (prefixed `hero-*`), pulled from each page's live computed
  `background-image`, not the static HTML (several of these are set via
  external CSS and don't appear in a plain `<img>`/HTML scrape at all).
- `public/images/projects/` — all 61 numbered project photos shown in the
  Projects gallery (these were pulled out of an Elementor lightbox gallery
  widget that renders them as CSS background images rather than `<img>`
  tags, so they weren't visible to a plain image scrape either).
- `app/fonts/` — the site's self-hosted Satoshi woff2/woff files (Light,
  Regular, Medium, Bold), pulled directly from the WordPress uploads folder.
- `app/icon.png` — the site's actual favicon.

## Revision 2 — corrections made from a live side-by-side comparison

The first pass was built entirely from static HTML/CSS text extraction,
which silently missed anything rendered or styled by external stylesheets,
JS, or `background-image` CSS rather than inline markup. A follow-up pass
opened the live site and this rebuild side-by-side in Chrome and compared
computed styles directly, which surfaced several real differences:

- **Homepage hero was wrong.** The live hero is a two-slide carousel with a
  real photo on one side and a solid accent-blue text panel on the other —
  the first pass had concluded (incorrectly, from a static-HTML-only check)
  that there was no hero image at all. Rebuilt as `HomeHero.tsx`.
- **Inner-page heroes were wrong.** About Us, Projects, Freequote, and all
  10 service pages actually use a full-bleed photo background with a dark
  overlay and centered white text — not the plain light-background/no-photo
  layout the first pass used. Rebuilt as `InnerHero.tsx`, with the correct
  per-page photo for every one of the 10 services (each one is genuinely
  different, e.g. the Broken Spring page uses a spring close-up, the Access
  Control page uses a keypad photo, etc.).
- **Top bar color was wrong.** It's the accent blue (`#00549A`), not dark
  navy, and it has phone/clock icons before each line of text.
- **Nav link weight was wrong.** Regular weight Satoshi, not bold/Plus
  Jakarta Sans.
- **Form field skin was wrong.** The real site uses two different Formidable
  Forms skins: an underline-only style (transparent background, bottom
  border, no box) on light backgrounds, and filled dark boxes inside the
  dark "Schedule A Service Request" panel. The first pass used one generic
  boxed/bordered style everywhere.
- **Footer newsletter form was missing.** There really is a single-field
  email subscribe form at the bottom of the footer — the first pass guessed
  this was a stray duplicate and left it out. It's now in
  `NewsletterForm.tsx`.
- **Footer copyright year is dynamic.** The live footer reads
  `Anchor Garage Door and Gate Services Inc © Copyright 2026.` — the year is
  set by a small inline script on page load, which a static HTML fetch
  doesn't execute (so the first pass saw no year at all and omitted it).
  Restored via `components/CopyrightYear.tsx`, a tiny client component (kept
  isolated from the server-rendered footer so it doesn't trip Next.js 16's
  Cache Components build-time check for non-deterministic values).
- **Card hover effect was missing.** Service cards shift their background
  from white to the site's light-blue tint (`#F1F7FB`) on hover; added via
  the `.service-card` CSS class.
- **Section "eyebrow" labels were wrong color/missing their icon.** e.g.
  "GARAGE DOOR INSTALLATION & REPAIR" is a muted blue-gray
  (`--color-eyebrow`, `#8594C2`), Plus Jakarta Sans, with a small house icon
  before it — not plain accent-blue text.
- **"Fast & Professional Services We Offer" layout was wrong.** It's a
  two-column header (heading on the left, description text with a left
  accent border on the right), not a stacked single column.
- Buttons: "Get Started" on inner-page/hero contexts is solid white with
  accent-colored text (`.btn-white`), and "Dial Now" carries a small phone
  icon — both were missing before.

### Still-known gaps after Revision 2

- **Contact forms don't submit anywhere.** They're fully built and
  client-validated and show a "thank you" state, but there's no backend
  wired up (the live site posts to Formidable Forms / WordPress REST).
- **Hero carousel is a simple interval + CSS crossfade**, not a full Swiper
  port — same two slides, same copy, same auto-advance behavior, but without
  Swiper's drag/swipe gesture support.
- **Projects gallery has no lightbox** (click-to-zoom) — same 61 photos, no
  zoom-in viewer.
- **Homepage stats row** ("3.5k / 100% / 1.5M+") nests its labels oddly in
  the live site's own source (a label like "Professional Experts" sits above
  the "100%" number rather than next to its own number). That nesting was
  preserved literally rather than "cleaned up."
- **Responsiveness was verified by code review** (Tailwind breakpoints
  matched to the live site's actual CSS breakpoints at 767px/1024px), not by
  a visual mobile-viewport screenshot — the sandboxed browser used for this
  build could not be resized to a mobile viewport. If anything looks off on
  an actual phone, it's worth a manual check.
- No analytics/tag-manager scripts, WordPress emoji/REST meta tags, or
  WP-admin-only code were carried over, since none of that affects what a
  visitor sees. The live site's phone number also gets swapped by a
  call-tracking script (you may see a different number than
  `(833) 349-4283` when browsing the live site directly) — that's dynamic
  call-tracking, not the site's real number, so it wasn't copied.

## Revision 3 — homepage hero re-audited side-by-side against the live site

The user reported the homepage hero (`components/HomeHero.tsx`) still didn't
match https://www.anchorgaragedoor.com/ — text sizes, padding, animation,
image, and copy all needed re-checking. This pass opened both sites in
Chrome at a 1536px viewport and pulled **real computed styles off the live
DOM** (`getComputedStyle` + `getBoundingClientRect`, not just eyeballing
screenshots), scoped to the live `.swiper-slide-active` slide with autoplay
stopped (`swiper.autoplay.stop()` / `slideTo(0, 0)`) so measurements weren't
corrupted by the carousel mid-transition (it was, several times, before that
— Elementor's Swiper clones slides for looping, and a slide caught
mid-slide-animation gives wildly wrong x/width numbers).

Confirmed real bugs, fixed:

- **Eyebrow text was using the wrong style entirely.** `HomeHero.tsx` applied
  the global `.eyebrow` class (Plus Jakarta Sans, 600 weight, 20px at
  desktop — correct for section eyebrows like "GARAGE DOOR INSTALLATION &
  REPAIR", confirmed still correct by measuring one of those live) to the
  hero's white "Welcome to Anchor Garage Door and Gate Services" line. The
  live hero eyebrow is actually plain **Satoshi, 400 weight, 16px**, one
  line. Using the bold 20px style made it wrap to two lines and push the
  rest of the hero content down. Fixed by giving the hero eyebrow its own
  inline classes instead of reusing `.eyebrow`.
- **"Dial Now" button was invisible as a button.** Confirmed via computed
  style that the live homepage hero's Dial Now button has a solid dark-navy
  fill (`rgb(14,30,40)` — exactly `--color-dark`), while Get Started is a
  white pill. Our code gave both buttons the shared `.btn` class, whose
  default background is the *same accent blue as the hero panel itself* —
  so the button rendered with no visible box, just floating icon+text.
  Added a `.btn-dark` modifier (bg `var(--color-dark)`) applied only to the
  homepage hero's Dial Now button. Verified on an inner-page hero (About Us)
  that Dial Now there correctly uses accent-blue (it sits on a dark photo
  overlay, not the solid blue panel) — so `.btn` itself wasn't wrong, it was
  only wrong in this one context.
- **Hero buttons were sized like the generic nav button, not like hero
  buttons.** Live hero buttons (both Home and every inner-page hero,
  confirmed on About Us) are **18px font**, and the two variants use
  different padding: the icon "Dial Now" button is compact (`13px 15px`),
  the plain "Get Started" button is generous (`20px 42px`). Our shared
  `.btn`/`.btn-white` (14px→16px, `15px 20px`→`16px 39px`) is correct for
  the *header* "Get a Quote" button — confirmed that one matches live
  exactly — but was being reused unmodified for hero buttons too. Added a
  `.btn-hero` modifier (18px, `13px 15px`; `20px 42px` when combined with
  `.btn-white`) applied to hero buttons in both `HomeHero.tsx` and
  `InnerHero.tsx`.
- **Hero description/eyebrow text had opacity that doesn't exist on the live
  site.** Both `HomeHero.tsx` (`text-white/80`) and `InnerHero.tsx`
  (`text-white/85`) dimmed the paragraph text. Measured live: fully opaque
  `rgb(255,255,255)` in both the homepage hero and an inner-page hero (About
  Us). Changed both to plain `text-white`.
- **Hero text-column horizontal padding was way too generous.** Measured the
  real gap between the blue panel's edge and its content on the live
  homepage hero (clean, non-transitioning slide): only **20px**, not the
  56px (`lg:px-14`) we had. That's why our buttons wrapped to two lines
  instead of sitting on one row like the live site — the available width
  was ~420px against a required ~450px, vs. the live site's ~492px of
  available space. Changed `lg:px-14` → `lg:px-5` (20px) on the hero's text
  column. (`sm:px-12`/mobile `px-6` were left as-is — not verified against a
  live mobile viewport, see the pre-existing "Still-known gaps" note below.)
- **Carousel pagination dots were the wrong shape and color.** Live dots are
  rectangular bars, not pills: the active one is a short, thick **accent-blue**
  bar (`40×8px`), the inactive one is a long, thin **white** bar (`80×2px`,
  i.e. wider but much thinner than the active one — inverted from what you'd
  guess). Ours were rounded pills, both white (just different opacity).
  Rewrote to `h-2 w-10 bg-accent` (active) / `h-0.5 w-20 bg-white`
  (inactive), no rounding.

Verified unaffected / already correct (measured, not just assumed):
heading size (55px/700/line-height 66px matches exactly), the image-column
vs. text-column width ratio (`1.86fr 1fr` matches the live 989px/532px
split exactly), hero section height (700px at this breakpoint), the hard
photo/panel seam (no gradient at the join), and the header "Get a Quote"
button style.

Not re-verified this pass (flagged, not fixed): exact pixel position of the
pagination dots themselves (Elementor nests them in a carousel-widget
wrapper with its own internal alignment that doesn't map cleanly to a
simple left-inset — low visual impact, left as bottom-left-over-the-image
as before), and mobile/tablet hero padding (still only verified at a
1536px desktop viewport — see the existing "Still-known gaps" section).

## Revision 4 — full-site re-audit + icon accuracy pass

The user asked to check the rest of the pages against the live site too, and
specifically flagged that icons/SVGs (the ones next to "eyebrow" labels)
didn't match the original. This pass covered every route, not just the
homepage hero, using the same live-DOM-inspection method as Revision 3
(computed styles and, for icons, the actual inline `<svg>` markup pulled
straight off the live page — `viewBox`, `path`/`polygon` `d`/`points`, and
`fill`).

### Icons were wrong in two ways, not just "slightly off"

- **Wrong icon entirely, not just wrong color.** The small icon next to every
  section "eyebrow" label (e.g. "GARAGE DOOR INSTALLATION & REPAIR", "Our
  trusted partners", the About Us intro) is a **solid orange
  (`#F36827`) house-with-garage-door icon** on the live site — a completely
  different SVG (`viewBox 0 0 194 180`, two `<polygon>`s) from the simple
  roof-outline `HouseIcon` this project had been using everywhere, and its
  color is hardcoded orange regardless of the surrounding text color (it's
  **not** tinted via `currentColor`/the muted blue-gray `--color-eyebrow`
  like the text next to it). Added `EyebrowIcon` in `components/icons.tsx`
  with the real path data and wired it into `app/page.tsx` (both section
  eyebrows), `components/BrandGallery.tsx`, `app/about-us/page.tsx` (this one
  had **no icon at all** before — just plain text), and
  `app/service/[slug]/page.tsx` (see below — also had no icon).
- **The homepage hero's white icon** (next to "Welcome to Anchor Garage Door
  and Gate Services") is a *different* real icon — a garage door with
  sectional panel lines, `viewBox 0 0 22 22`, solid white fill, no stroke —
  not the rounded-stroke roof+door path the old `HouseIcon` drew. Replaced
  `HouseIcon`'s path data with the real one (it's also reused correctly by
  `components/IconHeading.tsx`'s blue circle badge — confirmed that's the
  same icon asset on the live site, just at a different size).
- Checked whether the 4 gate-service pages' body-section icons (e.g.
  "New Gate Installation" showing the spring icon, "Electric Gate Repair"
  showing the off-track-repair icon) were a scraping mistake — they're
  **not**: the live site itself serves the same mismatched icons on those
  pages. Left as-is; this is the live site's own content, faithfully
  reproduced.

### Service pages (`app/service/[slug]/page.tsx`) had a real structural bug

The "about this service" section was rendering `service.title` **twice**
(once as a small eyebrow line, once as a big `<h3>`), with no icon and no
photo, in a single narrow column. The live site renders the title **once**,
next to the service's own icon, beside a dedicated photo — a 2-column
layout (photo left, icon+heading+body right) that's completely different
from a narrow single column. Fixed the template, and:

- Downloaded the real per-service photo for this section for all 10
  services (`public/images/body-*.*`) — it's a different shot from each
  page's hero background image, set via CSS `background-image` on the live
  site (not a plain `<img>`), so the original scrape never found it and the
  page was reusing the hero photo as a placeholder. Added a `bodyImage`
  field to `lib/services.ts` for this.
- `app/about-us/page.tsx` had `showDialButton={false}` on its `InnerHero` —
  wrong; the live About Us hero does show the "Dial Now" button. Removed the
  override.
- `app/about-us/page.tsx` was also missing its entire bottom
  "Get In Touch With Us" contact-card section (the live page has one, in a
  bordered/rounded card — a third distinct layout for the same
  `IconHeading` + description + `ContactForm` combo, alongside the
  homepage's `GetInTouchSection` and the Freequote page's split-screen
  version). Added it directly in the page rather than changing the shared
  `GetInTouchSection` component, since the three contexts render genuinely
  differently on the live site.

### Blog posts (`components/BlogPostLayout.tsx`) were a different template entirely

The real per-post page has: a full-bleed photo hero (category pill badge +
a literal, always-the-same "Blog Details" h1 — that's a quirk/bug on the
live site itself, not per-post, confirmed across multiple posts — then a
breadcrumb line), then a 2-column body (large plain photo + author/date row
+ the real post title + content on the left; a search box, "Popular Posts"
with dates, "Categories" — uniformly "Door Installation" / "Overhead Doors"
on every post checked — and a bordered CTA box on the right), followed by a
full-width `GetInTouchSection`. The old layout had none of the hero, no
search box, no dates on the sidebar's popular posts, and put the CTA as a
full-width bottom section instead of a sidebar box, with no contact form
anywhere on the page. Rewrote the component to match; reuses `post.image`
for both the hero background and the body photo (confirmed that's literally
the same file on the live site).

### Blogs listing (`app/blogs/page.tsx`) was missing its hero entirely

Just a bare `<h1>Blogs</h1>` before. The live page has the same full-bleed
`InnerHero` treatment as every other inner page. Added it (`description` was
made optional on `InnerHero` since this page's hero has no description
paragraph on the live site, just the title and buttons).

### Projects gallery layout was wrong

The live gallery is a **masonry** layout (natural-height photos packed into
columns, Pinterest-style) — `app/projects/page.tsx` was instead forcing
every photo into a uniform `aspect-[4/5]` crop in a plain grid. Switched to
CSS `columns-2 sm:columns-3 lg:columns-4` with `break-inside-avoid` tiles
and `h-auto` images.

### One project photo was corrupt

`public/images/projects/Garage-DoorGate-Services-47.jpg` was a truncated
15.8 KB file with no readable image header (served a 200 with the right
byte count, but the JPEG itself had no valid dimensions — likely truncated
during the original download pass). Checked all 61 project photos plus
every hero/body/blog image for the same symptom (`file` reporting no
`WxH`); only this one was affected. Re-downloaded it from the live site
(now a valid 1100×700 JPEG).

### Checked and found already correct

Freequote page and `ContactForm` fields (exact match to the live form:
First/Last Name, Email, Phone, Zip, Type of Service, query, incl.
placeholders); `Footer.tsx` and `Header.tsx` structure; the homepage's own
sections beyond the hero (already covered in Revision 3).

### Still not independently re-verified this pass

- The other 5 blog posts' and 9 service pages' body copy/images weren't
  each individually re-diffed against live (the *template* was verified
  against multiple examples per type; per-post/per-service text content was
  trusted from the original scrape).
- Mobile/tablet viewports — still only checked at desktop width (1536px),
  same caveat as Revision 2 and 3.
- Exact pixel position of the homepage hero's carousel pagination dots
  (Elementor's own nested-widget alignment doesn't map to a simple CSS
  inset; left at the previous approximation — only the dots' shape/color
  were fixed in Revision 3).

## Revision 5 — homepage hero interaction and layout fixes

The homepage hero now uses a fixed-height two-slide track instead of rendering
only the active slide in normal document flow. The image and blue content panel
therefore keep the same footprint when the copy changes, and each image fills
its pane with `object-cover` without leaving an empty area.

The track supports left/right pointer swipes for mouse, touch, and pen input,
while the existing six-second autoplay and pagination buttons remain. Manual
interaction pauses autoplay during the gesture and restarts it afterward.

The homepage "Dial Now" CTA hover state was also corrected. Its phone SVG now
inherits the button text color, and the dark button transitions to the live
site's white background with accent-blue text/icon on hover.

## Revision 6 — repaired homepage garage image and desktop drag affordance

The homepage garage hero asset had a damaged JPEG tail with a gray strip baked
into the file, which made that slide appear shorter than the gate slide. The
asset was repaired by cropping the invalid strip while preserving the original
garage-door composition. The hero now also shows a grab cursor on desktop so
the mouse drag/swipe interaction is discoverable at large breakpoints.

## Revision 7 — footer matched to the original live design

Rebuilt `components/Footer.tsx` to match the original footer shown in the
reference and verified against the live site’s Elementor footer styles:

- restored the three-column desktop layout and its 100px vertical spacing;
- restored the white logo/contact column and uppercase `Normal hours:` /
  `Contact Info:` labels;
- matched the original Satoshi typography, muted `#7B7B7B` body/link color,
  `#606A83` labels, link hover transition, and copyright divider;
- restored the exact six-item + four-item service split and original order;
- kept the responsive stacked footer behavior for mobile/tablet widths.

## Revision 8 — Get In Touch section matched to the original

Rebuilt `components/GetInTouchSection.tsx` from the original centered contact
card instead of the previous full-width split layout. The section now uses the
original 860px card, 40px desktop padding, 20px rounded border/shadow, 32px
heading with the 40px blue icon, 17px description, 48px underline fields,
121px query field, compact verification tile, and full-width 48px
`Request A Quote` button. The shared `ContactForm` now accepts a class and
submit-label variant so this section can use the original sizing without
changing the separate dark/inner-page forms.

## Revision 9 — homepage testimonial and performance section matched to the original

Replaced the previous centered testimonial and separate three-column stats bar
with the original two-column composition. The section now uses the inline
Jessica signature, original testimonial copy hierarchy, light-blue background,
technician image, white projects card, trend icon, two colored performance
cards, and responsive stacking below desktop widths.

The technician image was restored from the original site's `Rectangle-23805`
asset and stored locally as `public/images/testimonial-technician.png`.

## Revision 10 — BrandGallery matched to the original hover treatment

Updated `components/BrandGallery.tsx` and the shared gallery styles to match
the original partner-logo gallery: centered heading and eyebrow, five-column
desktop grid, bordered 120px cells, 180px logo sizing, grayscale logos by
default, and a 0.6 second transition back to full brand color on hover or
keyboard focus. The mobile layout uses three columns, 84px cells, 90px logos,
and full color by default. Also corrected the gate heading capitalization to
`Gate Services`.

## Revision 11 — BrandGallery alignment and style ownership cleanup

Centered the `Our Trusted Partners` eyebrow as a full-width flex row so it
appears above the centered section title, matching the original composition.
Moved all BrandGallery-specific rules out of `app/globals.css` into the
co-located `components/BrandGallery.css`, imported once from the root layout.
The gallery styles remain scoped by their `brand-gallery-*` class names and
the build is warning-free.

## Revision 12 — ServiceGrid matched to the supplied original section

Rebuilt the homepage service grids as white, two-column cards with the service
photo on the left, service title and description on the right, blue `Read More`
CTA, and the matching service icon at the bottom-right. The garage and gate
sections now share the co-located `components/ServiceSection.tsx`,
`components/ServiceGrid.tsx`, and `components/ServiceGrid.css` implementation;
the old dark three-column icon-only layout and its global `.service-card` rules
were removed. The updated section was checked in the browser and the lint and
production build both pass.

## Revision 13 — TrustFeatures matched to the original section

Rebuilt `components/TrustFeatures.tsx` with the original light-blue section
background, `Transparent-circle.png` and `cross-vector.png` artwork, original
three feature SVG icons, vertical dividers, typography, spacing, and blue
circular arrow links. The section uses Tailwind utility classes directly in
the component; no TrustFeatures stylesheet or one-off global class names are
needed. The desktop geometry was checked against the live section in the
browser; lint and the production build pass.

## Revision 14 — QuickScheduleForm matched to the supplied original section

Rebuilt the homepage `QuickScheduleForm` as the original centered rounded dark
card on a white section, with the desktop four-column field row, second-row
verification/button placement, house icon, chat badge, phone CTA, responsive
breakpoints, and Tailwind-only field styling. The single-use `.field-dark`
global class was removed. The layout was checked in the browser and lint and
the production build pass.

## Revision 15 — Homepage desktop container alignment

Widened `ServiceSection` to the same 1650px desktop container used by the
schedule card so the schedule panel, service headings, and service grids share
the same left and right alignment on wide screens. Replaced the eyebrow house
icon markup with the original SVG structure and preserved its original
viewBox/aspect ratio, including its original 38px desktop rendering size.

## Revision 16 — ServiceGrid icon circle and hover state matched

Matched the original ServiceGrid hover behavior: exact #D8D8D8 card border,
#F1F7FB card hover background, 600ms card transition, white icon-circle
hover state, #F1F5EB normal icon circle with the original 50px/offset
pseudo-element geometry, and the original button color swap. Kept the
implementation in Tailwind utilities inside `components/ServiceGrid.tsx`.

## Revision 17 — Hero split, pagination, and scroll control matched

Matched the original homepage hero breakpoint and controls. The image and blue
content panel now stay in the original 65%/35% split from tablet widths
upward, with the original 700px desktop height. Pagination bars use the
original 40px by 8px active bar, 80px by 2px inactive bar, 10px spacing,
centered tablet positioning, and the 1250px desktop left offset. Added the
original overlapping white circular scroll-down control above the schedule card
and wired it to the first service section.

## Revision 18 — Smooth scroll and header CTA hover matched

Enabled smooth anchor scrolling for the scroll-down control. Matched the live
header `Get a Quote` button by using a white normal-state border and changing
to the accent-blue border, white background, and accent-blue text on hover for
both desktop and mobile header CTAs.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm run start   # production build
```
