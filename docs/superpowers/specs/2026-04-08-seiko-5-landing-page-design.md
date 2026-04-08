# Seiko 5 Landing Page Design Spec

## Product Intent

Design a premium single-page landing experience for four Seiko 5 references: SRPD55, SSK003, SRPG27, and SRPK87. The page should feel editorial and product-led rather than transactional. It needs to create desire through hierarchy, contrast, pacing, and watch-specific personality while staying feasible inside the current Vite + React app with one page, no routing requirement, and no forms or input fields.

## Outcome

- Communicate that the four watches belong to one family with distinct personalities.
- Make scanning easy for someone who wants a quick recommendation.
- Reward slower reading with richer copy and comparison context.
- Preserve a premium brand impression without depending on photography.
- Keep implementation scope aligned with semantic HTML, CSS gradients, reusable arrays of content, and simple anchor navigation.

## Audience

- Watch-curious buyers comparing multiple Seiko 5 references.
- Enthusiasts who care about mechanical credibility, wearability, and visual character.
- Visitors arriving on desktop first, but the experience must remain strong on mobile.

## Experience Principles

1. Premium, not luxury-theatrical.
2. Editorial, not ecommerce-heavy.
3. Information-dense, but clearly chunked.
4. Visually atmospheric without relying on asset-heavy media.
5. Accessible and readable before decorative.

## Recommended Direction

### Option A: Editorial collector layout

Use a high-drama hero, quick-scan anchor strip, narrative model cards, structured comparison band, and ownership rationale. This balances emotion with practical decision support and fits the current implementation well.

Why this is the recommended direction:

- Supports all four watches without feeling like a generic grid.
- Works without real product photography.
- Makes the page feel intentional inside a simple React app.
- Lets content arrays drive repeatable sections.

### Option B: Spec-table-first product comparison

Lead with a tighter hero and move quickly into dense tables, technical details, and shorter summaries.

Trade-off:

- Easier to build and scan.
- Weaker emotional impact.
- Risks feeling too much like a retailer comparison page.

### Option C: Magazine-story longform

Treat the page as a continuous narrative with larger editorial blocks and fewer structured comparison elements.

Trade-off:

- Strongest brand tone.
- Harder to compare references quickly.
- More likely to frustrate visitors looking for a practical choice.

## Information Architecture

1. Hero
2. Quick scan / section navigation
3. Featured model showcase
4. Comparison spotlight
5. Brand or collection rationale
6. Ownership details
7. Closing recommendation / return CTA

## User Flow

### Primary flow

1. Visitor lands on hero and understands the overall value proposition.
2. Visitor sees there are four distinct references worth exploring.
3. Visitor jumps into the model grid or quick-scan links.
4. Visitor compares fit, personality, and use case.
5. Visitor leaves with a clear mental model of which watch suits them.

### Secondary flow

1. Visitor skims the page top to bottom without interacting with anchor links.
2. Visitor gets narrative context from hero, cards, comparison, and closing.
3. Visitor exits with stronger affinity for Seiko 5 as a family.

## Section-by-Section Spec

### 1. Hero

Purpose:

- Establish premium tone immediately.
- Frame the collection as one family with four personalities.
- Provide a single primary action that moves users into the lineup.

Content:

- Eyebrow: short category label.
- H1: emotionally persuasive, concise, high-contrast statement.
- Supporting paragraph: summarize the four-model spread.
- Primary CTA: anchor link to model section.
- Three compact factual chips or tiles for mechanical credibility.
- Abstract watch-inspired visual composition on the right.

Layout:

- Two-column grid on desktop.
- Copy column should feel grounded low in the frame.
- Visual column should feel luminous and sculptural, not illustrative.
- On tablet/mobile, collapse to one column with copy first and visual second or partially interleaved.

Behavior:

- CTA scrolls to `#models`.
- Hero fact tiles remain static.
- Decorative visual is `aria-hidden`.

Visual direction:

- Dark brushed-night background.
- Warm metallic gold accents plus controlled electric blue highlight.
- Serif display typography for headlines.
- Sans serif for body and navigation.

### 2. Quick Scan Strip

Purpose:

- Let visitors jump directly to a watch.
- Create a crisp transition out of the immersive hero.

Content:

- Section heading.
- Four links, one per model.
- Each link includes model code, short title, and one fast spec.

Layout:

- Horizontal card-like strip on large screens.
- Two-column or stacked compact list on smaller screens.

Behavior:

- Each item links to its model card.
- Entire card area is clickable.
- Focus state must remain highly visible.

### 3. Featured Model Showcase

Purpose:

- Deliver the core product comparison with enough emotional differentiation that each reference feels intentional.

Content per card:

- Model code.
- Model name.
- One-sentence descriptor.
- Narrative summary paragraph.
- Wear/use-case paragraph.
- Three key specs or identifiers.
- Strap or bracelet note.

Layout:

- Responsive two-column grid on desktop.
- Single column on narrow screens.
- Each card includes a visual shell area and a copy area.
- Cards should feel like collectible spec placards, not ecommerce tiles.

Behavior:

- Accent color varies per watch.
- Accent should influence glow, border emphasis, and subtle background tint.
- No hover-only information.
- Copy order should stay consistent across all cards.

### 4. Comparison Spotlight

Purpose:

- Shift from sequential reading to set-based comparison.
- Help the user contrast mood, use case, and wrist feel at a glance.

Content:

- Introductory lead copy.
- Structured rows for comparison categories.
- Values aligned consistently across the four models.

Layout:

- Distinct visual break from cards.
- Rows feel table-like, but remain readable on small screens.
- On mobile, values may stack vertically under each label.

Behavior:

- Use semantic grouping that remains understandable to assistive technology.
- Avoid forcing horizontal scrolling for primary content.

### 5. Editorial Note / Collection Rationale

Purpose:

- Recenter the page on why Seiko 5 matters culturally and practically.
- Bridge product comparison with ownership logic.

Content:

- Two medium-length paragraphs.
- Explain the family formula.
- Reiterate what each model contributes to the lineup.

Layout:

- Two-column text on wider screens.
- Single column on mobile with generous line height.

### 6. Ownership Details

Purpose:

- Give visitors reasons the watches stay appealing after initial visual attraction.

Content:

- Four compact cards highlighting movement, durability, legibility, and day-date utility.

Layout:

- Four-up grid on desktop.
- Two-by-two on tablet.
- Single column on mobile.

Behavior:

- Cards remain concise.
- Headings should scan in under two seconds.

### 7. Closing Section

Purpose:

- End with a recommendation mindset rather than a hard sell.
- Give the user a clean loop back into the product section.

Content:

- Eyebrow.
- Closing headline.
- Summary paragraph.
- Primary anchor back to the lineup.
- Optional secondary text link for top-of-page return.

Behavior:

- Closing CTA reinforces exploration, not checkout.

## Component Behavior

### Anchor links

- Use smooth scroll.
- Preserve visible focus rings.
- Ensure target sections have clear heading context once reached.

### Cards

- Entire quick-scan item is interactive.
- Model cards are informational, not interactive containers.
- Hover may lift surfaces slightly, but must not hide content or rely on motion for comprehension.

### Decorative visuals

- All non-informational watch shells, halos, and noise layers should be hidden from assistive tech.
- Decorative layers must never reduce text contrast below accessibility thresholds.

## Visual System

### Color

- Base background: near-black with cool undertones.
- Elevated panel background: charcoal with subtle transparency.
- Text: warm off-white rather than pure white.
- Accent 1: muted gold for premium cues and focus accents.
- Accent 2: restrained blue for cool contrast.
- Per-model accents:
  - SRPD55: burnt orange.
  - SSK003: vivid blue.
  - SRPG27: olive green.
  - SRPK87: champagne gold.

### Typography

- Display: high-contrast serif with classic editorial feel.
- Body/UI: clean sans serif.
- H1 should be oversized and compressed vertically for drama.
- H2 should keep strong hierarchy without exceeding comfortable line length on mobile.
- Eyebrows should be uppercase, tracked out, and color-coded to accent.

### Surfaces

- Rounded large-radius panels.
- Thin translucent borders.
- Layered gradients and soft glows.
- Avoid flat white cards or generic product-grid aesthetics.

### Motion

- Use restrained rise/fade entrance on major sections.
- Keep durations around 180ms to 720ms depending on interaction vs load.
- Respect `prefers-reduced-motion` by removing transforms and non-essential animation.

## Responsive Behavior

### Desktop

- Preserve hero split layout.
- Two-column product grid.
- Comparison rows remain tabular.

### Tablet

- Hero can remain two-column until content begins to crowd.
- Quick-scan cards may wrap to two columns.
- Keep section spacing generous.

### Mobile

- Hero becomes single column.
- H1 scales down without losing drama.
- Fact chips stack or shift to one-column/two-column depending on width.
- Model cards become single-column narrative blocks.
- Comparison content stacks per row for readability.
- Tap targets must remain at least 44px tall.

## Accessibility Requirements

1. Maintain semantic heading order with one `h1`.
2. Use landmark sections with accessible names via headings.
3. Preserve 4.5:1 contrast for body text and actionable text.
4. Ensure focus indicators remain visible on dark surfaces.
5. Do not encode model differences by color alone; retain text labels and content differences.
6. Mark purely decorative visuals with `aria-hidden="true"`.
7. Avoid motion that could distract or disorient; respect reduced motion settings.
8. Keep link labels descriptive and repeated destinations intentional.
9. Ensure no forms, inputs, or pseudo-interactive controls appear.

## Implementation Constraints

- Must remain feasible in the current Vite + React single-page app.
- Prefer content arrays driving repeated sections for maintainability.
- Keep styling in CSS rather than introducing heavy animation or design libraries.
- Avoid dependencies on external image hosting.
- Use gradients, layers, and CSS-drawn abstractions where assets are unavailable.

## Acceptance Criteria

- The page presents all four watch references with distinct copy and visual accenting.
- A user can jump from hero to models via a clear CTA.
- The information architecture includes hero, quick scan, showcase, comparison, ownership logic, and closing.
- No forms or input fields exist anywhere in the experience.
- The page feels premium and editorial rather than generic or transactional.
- The design remains readable and usable across desktop and mobile.
- Accessibility expectations are explicitly reflected in semantics, contrast, focus, and motion handling.

## QA Notes For DEV Handoff

- Preserve the current one-page structure and anchor-based navigation.
- If placeholder visuals are used, prioritize hierarchy and atmosphere over realism.
- Keep per-model accents subtle enough that typography remains dominant.
- If any section must be cut for scope, keep the comparison spotlight before cutting ownership details.
- Do not add commerce UI, pricing, add-to-cart actions, or newsletter capture.

## Open Questions

- None blocking for stage one. The current brief is specific enough to proceed into implementation and design QA.
