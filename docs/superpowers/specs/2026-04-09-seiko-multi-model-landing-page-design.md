# Seiko Multi-Model Landing Page Design Spec

## Product Intent

Replace the current Seiko 5-only landing page with a broader premium Seiko collection story. The page should present multiple Seiko families in one editorial surface so the visitor understands that Seiko spans rugged tool watches, dress-focused references, precision travel pieces, and heritage-led designs. The result should feel like a curated watch journal rather than a retailer grid.

## Outcome

- Reframe the experience from one Seiko 5 family into a wider Seiko portfolio view.
- Let visitors compare four distinct Seiko references with clearly different roles.
- Keep the page premium and atmospheric without requiring product photography.
- Preserve straightforward scanning on mobile and richer editorial pacing on desktop.
- Keep implementation feasible inside the current single-page React/Vite app with semantic HTML and CSS-only visuals.

## Audience

- Watch-curious visitors who know the Seiko name but not the breadth of the lineup.
- Enthusiasts comparing which Seiko branch fits their taste or use case.
- Visitors on desktop or mobile who need a strong visual hierarchy and quick decision support.

## Experience Principles

1. Premium editorial tone, not ecommerce clutter.
2. Brand breadth before isolated specifications.
3. Distinct personality per watch family and reference.
4. Dense information broken into readable, well-paced sections.
5. Strong contrast, clear semantics, and motion that never blocks reading.

## Recommended Direction

### Option A: Curated portfolio editorial

Lead with a broad Seiko thesis, then move into a quick portfolio rail, four featured reference cards, a spec/comparison matrix, and a closing craftsmanship section. This gives the page more range than the existing Seiko 5-only implementation while still keeping comparison easy.

Why this is the recommended direction:

- Satisfies the requirement to showcase more than one Seiko model family.
- Keeps the app single-page and implementation-friendly.
- Creates a stronger sense of brand range without introducing ecommerce complexity.
- Makes dynamic rendering from local data arrays straightforward.

### Option B: Family-by-family chapter layout

Create separate longform sections for Prospex, Presage, Astron, and King Seiko with less direct side-by-side comparison.

Trade-off:

- Strong storytelling.
- Slower comparison.
- More content-heavy and harder to scan quickly.

### Option C: Comparison-matrix-first layout

Open with a concise hero and move quickly into a dense matrix and spec-heavy cards.

Trade-off:

- Fast to scan.
- Less premium atmosphere.
- Risks feeling like a product catalog rather than a designed landing page.

## Information Architecture

1. Hero
2. Portfolio rail
3. Featured references
4. Collection comparison matrix
5. Seiko craft / design language section
6. Collector close

## User Flow

### Primary flow

1. Visitor lands on the hero and understands the core message: Seiko covers multiple watch personalities well.
2. Visitor uses the portfolio rail to see the four collection directions instantly.
3. Visitor reads the featured cards to understand each reference.
4. Visitor uses the comparison matrix to contrast movement, tone, and ideal owner.
5. Visitor leaves with a clearer sense of which Seiko family fits them.

### Secondary flow

1. Visitor scrolls linearly through the page without using anchors.
2. The page still reads as a premium editorial story about Seiko breadth.
3. The closing section reinforces that Seiko can credibly cover different watch moods without losing identity.

## Content Model

Use a local array of watch objects. Each watch should include:

- `id`
- `family`
- `reference`
- `name`
- `tagline`
- `priceBand`
- `movement`
- `diameter`
- `waterResistance`
- `accent`
- `summary`
- `positioning`
- `designNotes`
- `idealFor`
- `highlights` (three short bullets)

Recommended featured references:

- Prospex SPB143 for restrained dive-watch credibility
- Presage SRPB41 "Cocktail Time" for dress-led texture and dial polish
- Astron SSH167 for precision travel and modern tech posture
- King Seiko SJE095 for heritage sharpness and elevated finishing

## Section-by-Section Spec

### 1. Hero

Purpose:

- Announce that the page is about Seiko breadth, not a single sub-line.
- Deliver premium atmosphere immediately.
- Push users toward the portfolio section.

Content:

- Eyebrow: short category label such as "Curated Seiko Collection".
- H1 focused on one brand spanning multiple watch personalities.
- Supporting paragraph that names the four featured families.
- Primary CTA linking to `#portfolio`.
- Secondary CTA linking to `#matrix`.
- Three credibility chips covering mechanical heritage, finishing range, and travel/tool versatility.
- Abstract watch-inspired visual composition with layered rings and metallic forms.

Layout:

- Split hero on desktop with copy left and sculptural composition right.
- Stack on mobile with copy first.
- Keep the headline narrow and high-impact.

Behavior:

- Decorative visuals are `aria-hidden`.
- CTA anchors are the only interactive controls in the hero.

### 2. Portfolio Rail

Purpose:

- Provide an immediate scan of the four families.
- Transition from brand promise into concrete references.

Content:

- Short section heading.
- Four clickable compact cards.
- Each card shows family, reference, and one-line positioning cue.

Layout:

- Four-up strip on wide screens.
- Two-column grid on tablets.
- One-column stack on narrow screens.

Behavior:

- Entire card clickable to its featured article anchor.
- Strong visible focus state and subtle hover lift.

### 3. Featured References

Purpose:

- Carry the core narrative and product detail.
- Make each reference feel distinct in personality and use case.

Content per card:

- Family label
- Reference
- Reference name
- Short tagline
- Editorial summary paragraph
- Positioning paragraph
- Three short highlights
- Compact specification list
- "Ideal for" callout

Layout:

- Alternating or varied card rhythm on desktop so the page avoids repetitive grid fatigue.
- Single column on mobile.
- Each card includes an abstract visual module driven by accent color.

Behavior:

- Cards rendered from local data.
- Accent color controls border glow, label treatment, and visual halo.

### 4. Collection Comparison Matrix

Purpose:

- Offer structured comparison after the more emotional card section.
- Let the visitor contrast the references without rereading full copy.

Content:

- Rows for movement, style posture, water resistance, ideal owner, and overall mood.

Layout:

- Table-like row structure on desktop.
- Stack each row label above values on mobile to avoid horizontal scroll.

Behavior:

- Keep semantic labels and readable text order.
- No information hidden behind hover.

### 5. Seiko Craft Section

Purpose:

- Explain why these watches still feel related despite different roles.
- Reconnect the page to Seiko's wider design and manufacturing identity.

Content:

- One lead paragraph about Seiko's ability to move across tool, dress, travel, and heritage categories.
- Three supporting pillars such as case finishing, movement philosophy, and dial character.

Layout:

- Lead copy plus three supporting cards.
- Keep this section visually calmer than the hero and model cards.

### 6. Collector Close

Purpose:

- End with a confident takeaway instead of a sales funnel.
- Re-emphasize that the right Seiko depends on the owner's rhythm rather than a single "best" model.

Content:

- Closing headline.
- Short paragraph.
- A final row of anchor links back to the four references.

## Visual Direction

- Background should feel like charcoal lacquer with warm metallic spill and restrained electric blue highlights.
- Headlines in serif display typography; body and utility copy in a clean sans-serif.
- Use softened panel borders, layered gradients, and selective glow rather than flat cards.
- Avoid generic ecommerce badges, giant buttons, or bright high-saturation color blocks.

## Motion

- Use restrained reveal animation for hero and content cards.
- Hover motion limited to small translation and shadow changes.
- Respect `prefers-reduced-motion: reduce` by disabling reveal and smooth scroll effects.

## Responsive Behavior

- Hero collapses to one column below tablet widths.
- Portfolio rail wraps cleanly without horizontal scroll.
- Featured cards become single-column while preserving clear hierarchy.
- Comparison matrix stacks into readable blocks on mobile.

## Accessibility

- Use semantic sections, headings, articles, lists, and anchor links.
- Decorative visual modules must be `aria-hidden`.
- Preserve color contrast for all text and controls.
- Focus states must be visible on all interactive elements.
- Avoid relying on color alone for meaning.

## Implementation Notes

- Replace the current Seiko 5-specific copy and data model entirely.
- Keep content driven by arrays in `src/App.tsx`.
- Update tests to verify broader Seiko brand positioning and the four new references.
- Update `src/styles.css` with a new portfolio-oriented system rather than incremental overrides to the current Seiko 5 page.
- No new dependencies are required.

## Approved Direction For Implementation

Proceed with Option A: curated portfolio editorial.
