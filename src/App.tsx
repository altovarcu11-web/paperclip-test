import type { CSSProperties } from "react";

type Watch = {
  accent: string;
  diameter: string;
  designNotes: string;
  family: string;
  highlights: string[];
  id: string;
  idealFor: string;
  idealOwner: string;
  mood: string;
  movement: string;
  name: string;
  priceBand: string;
  positioning: string;
  reference: string;
  stylePosture: string;
  summary: string;
  tagline: string;
  waterResistance: string;
};

const watches: Watch[] = [
  {
    id: "spb143",
    family: "Prospex",
    reference: "SPB143",
    name: "Modern Diver",
    tagline: "Diver restraint without retro costume",
    summary:
      "The SPB143 brings Seiko's dive-watch credibility into a cleaner, more wearable shape. The grey sunburst dial, compact proportions, and softly vintage cues make it feel considered instead of theatrical.",
    positioning:
      "It is the reference for someone who wants real tool-watch legitimacy but has no interest in oversized case drama or loud collector cosplay.",
    highlights: ["6R35 automatic movement", "40.5 mm case", "200 m water resistance"],
    idealFor: "Daily wear with actual swimming, travel, and weekend rotation.",
    idealOwner: "Active daily wearer",
    movement: "6R35 automatic",
    diameter: "40.5 mm",
    waterResistance: "200 m",
    mood: "Tool-watch calm",
    stylePosture: "Tool watch",
    priceBand: "$1.2k-$1.6k",
    designNotes: "Grey sunburst dial and compact diver proportions keep the watch credible without turning theatrical.",
    accent: "#d6b06f",
  },
  {
    id: "srpb41",
    family: "Presage",
    reference: "SRPB41",
    name: "Cocktail Time",
    tagline: "Dial texture and evening polish",
    summary:
      "The SRPB41 leans on dial depth, polished surfaces, and softer formality. It trades the Prospex sense of readiness for a more atmospheric, almost lounge-lit kind of refinement.",
    positioning:
      "This is the watch for someone who wants Seiko to feel dressier and more tactile, with the dial doing most of the emotional work before the rest of the room notices the case.",
    highlights: ["4R35 automatic movement", "40.5 mm case", "Box-shaped Hardlex crystal"],
    idealFor: "Dinner, office tailoring, and buyers drawn to dial character first.",
    idealOwner: "Dial-first dresser",
    movement: "4R35 automatic",
    diameter: "40.5 mm",
    waterResistance: "50 m",
    mood: "Dress-led warmth",
    stylePosture: "Dress watch",
    priceBand: "$350-$500",
    designNotes: "Sunray blue dial and polished cocktail-watch cues make the surface feel atmospheric before the case size matters.",
    accent: "#87a6ff",
  },
  {
    id: "ssh167",
    family: "Astron",
    reference: "SSH167",
    name: "GPS Solar Chronograph",
    tagline: "Precision travel with a technical edge",
    summary:
      "Astron shifts the page from mechanical romance into high-precision travel. The SSH167 feels like Seiko proving it can do satellite-synced clarity, lightweight titanium, and cross-time-zone confidence without losing design discipline.",
    positioning:
      "It suits the visitor who values exactness, movement between cities, and a more engineered kind of luxury than the softer warmth of Presage or heritage-led King Seiko.",
    highlights: ["5X83 GPS Solar caliber", "Titanium case", "Dual-time chronograph layout"],
    idealFor: "Frequent travelers and buyers who want capability to lead the story.",
    idealOwner: "Precision traveler",
    movement: "5X83 GPS Solar",
    diameter: "43.3 mm",
    waterResistance: "100 m",
    mood: "Technical velocity",
    stylePosture: "Travel instrument",
    priceBand: "$2.1k-$2.6k",
    designNotes: "Titanium architecture and satellite-synced display logic give Astron a luxury language built on capability.",
    accent: "#6ed0c8",
  },
  {
    id: "sje095",
    family: "King Seiko",
    reference: "SJE095",
    name: "Sharp Heritage",
    tagline: "Sharp heritage tailored for modern collectors",
    summary:
      "The SJE095 is about proportion, facets, and discipline. Its appeal comes from finishing, case architecture, and the way a vintage-inflected dress-sport watch can still look severe and modern.",
    positioning:
      "For the buyer who wants Seiko to feel more rarefied and architectural, King Seiko offers the brand's heritage language with less softness and more edge.",
    highlights: ["6L35 automatic movement", "38.6 mm case", "Zaratsu-inspired finishing cues"],
    idealFor: "Collectors who care about silhouette, history, and sharp finishing.",
    idealOwner: "Heritage-focused collector",
    movement: "6L35 automatic",
    diameter: "38.6 mm",
    waterResistance: "50 m",
    mood: "Heritage precision",
    stylePosture: "Heritage dress-sport",
    priceBand: "$2.8k-$3.4k",
    designNotes: "Faceted case lines and restrained silver-dial sharpness keep the heritage pitch architectural instead of nostalgic.",
    accent: "#d59aa2",
  },
];

const credibilityPoints = [
  "Mechanical heritage and modern tech under one brand roof",
  "From saturated dress dials to real dive-watch capability",
  "Design language that scales from travel instrument to tailored heirloom",
];

const matrixRows = [
  { label: "Movement", values: watches.map((watch) => watch.movement) },
  { label: "Style posture", values: watches.map((watch) => watch.stylePosture) },
  { label: "Water resistance", values: watches.map((watch) => watch.waterResistance) },
  { label: "Ideal owner", values: watches.map((watch) => watch.idealOwner) },
  { label: "Overall mood", values: watches.map((watch) => watch.mood) },
];

const craftPillars = [
  {
    title: "Case language stays deliberate",
    body: "Whether the watch is dive-led, dress-led, or heritage-led, Seiko keeps working through shape, bevels, and posture rather than oversized ornament.",
  },
  {
    title: "Movement choices match the mission",
    body: "Mechanical calibers carry the emotional weight where warmth matters, while Astron shows Seiko can pivot into precision travel without weakening the brand.",
  },
  {
    title: "Dial identity does real brand work",
    body: "Texture, legibility, and color are never afterthoughts here. Each family uses the dial to express purpose before the wearer ever reads the spec sheet.",
  },
];

export function App() {
  return (
    <main className="page-shell" id="top">
      <section
        className="hero-panel"
        aria-label="A curated Seiko portfolio spanning tool, dress, travel, and heritage watches."
      >
        <div className="hero-copy">
          <p className="section-kicker">Curated Seiko Collection</p>
          <h1>One Seiko name. Four very different ways to wear it.</h1>
          <p className="hero-text">
            Prospex, Presage, Astron, and King Seiko show how far the brand can stretch without losing its point of
            view. This page is not about a single hit model. It is about Seiko&apos;s ability to speak tool, dress,
            travel, and heritage fluently in one portfolio.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#portfolio">
              Explore the portfolio
            </a>
            <a className="button-secondary" href="#matrix">
              Compare the references
            </a>
          </div>
          <ul className="credibility-list">
            {credibilityPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit hero-orbit-large" />
          <div className="hero-orbit hero-orbit-small" />
          <div className="hero-column hero-column-left">
            <span>Prospex</span>
            <span>Presage</span>
          </div>
          <div className="hero-centerpiece">
            <div className="hero-core" />
            <div className="hero-core hero-core-secondary" />
          </div>
          <div className="hero-column hero-column-right">
            <span>Astron</span>
            <span>King Seiko</span>
          </div>
          <p className="hero-caption hero-caption-top">Tool to dress, without losing brand discipline.</p>
          <p className="hero-caption hero-caption-bottom">A portfolio built on different watch moods, not one generic formula.</p>
        </div>
      </section>

      <section className="content-panel" id="portfolio" aria-label="Quickly jump to the Seiko family that fits your taste.">
        <div className="section-heading">
          <p className="section-kicker">Portfolio rail</p>
          <h2>Four collection directions, one coherent brand.</h2>
          <p>
            Start with the family that already sounds closest to your pace, then read deeper once a reference catches
            your eye.
          </p>
        </div>
        <ul className="portfolio-grid">
          {watches.map((watch) => (
            <li key={watch.id}>
              <a
                aria-label={`${watch.family} ${watch.reference}`}
                className="portfolio-link"
                href={`#${watch.id}`}
                style={{ "--accent": watch.accent } as CSSProperties}
              >
                <span className="portfolio-family">{watch.family}</span>
                <strong>{watch.reference}</strong>
                <em>{watch.tagline}</em>
                <small>{watch.stylePosture}</small>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-panel" aria-labelledby="featured-heading">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-kicker">Featured references</p>
            <h2 id="featured-heading">Four references that prove Seiko is more than one lane.</h2>
          </div>
          <p>
            Each card leans into a different reason to choose Seiko, from utility and dial drama to travel precision
            and sharper heritage finishing.
          </p>
        </div>

        <div className="feature-stack">
          {watches.map((watch) => (
            <article
              key={watch.id}
              id={watch.id}
              className="feature-card"
              aria-label={`${watch.family} ${watch.reference}`}
              style={{ "--accent": watch.accent } as CSSProperties}
            >
              <div className="feature-visual" aria-hidden="true">
                <div className="visual-ring" />
                <div className="visual-dial" />
                <div className="visual-tag">{watch.family}</div>
              </div>

              <div className="feature-copy">
                <p className="feature-meta">
                  <span>{watch.family}</span>
                  <span>{watch.reference}</span>
                  <span>{watch.priceBand}</span>
                </p>
                <h3>{`${watch.reference} ${watch.name}`}</h3>
                <p className="feature-tagline">{watch.tagline}</p>
                <p>{watch.summary}</p>
                <p>{watch.positioning}</p>
                <p className="feature-design-note">{watch.designNotes}</p>

                <ul className="highlight-list">
                  {watch.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <dl className="spec-grid">
                  <div>
                    <dt>Movement</dt>
                    <dd>{watch.movement}</dd>
                  </div>
                  <div>
                    <dt>Diameter</dt>
                    <dd>{watch.diameter}</dd>
                  </div>
                  <div>
                    <dt>Water resistance</dt>
                    <dd>{watch.waterResistance}</dd>
                  </div>
                  <div>
                    <dt>Price band</dt>
                    <dd>{watch.priceBand}</dd>
                  </div>
                </dl>

                <div className="ideal-callout">
                  <span>Ideal for</span>
                  <p>{watch.idealFor}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="matrix-panel" id="matrix" aria-label="Structured comparison of the featured Seiko references.">
        <div className="section-heading">
          <p className="section-kicker">Collection matrix</p>
          <h2>How the four references separate on wrist.</h2>
          <p>
            After the editorial read, the matrix makes the practical differences explicit so the choice feels cleaner.
          </p>
        </div>

        <div className="matrix-row matrix-header">
          <span className="matrix-label">Reference</span>
          <div className="matrix-values">
            {watches.map((watch) => (
              <span key={watch.reference}>{watch.reference}</span>
            ))}
          </div>
        </div>
        {matrixRows.map((row) => (
          <div key={row.label} className="matrix-row">
            <span className="matrix-label">{row.label}</span>
            <div className="matrix-values">
              {row.values.map((value, index) => (
                <span key={`${row.label}-${index}`}>{value}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="content-panel craft-panel" aria-labelledby="craft-heading">
        <div className="section-heading section-heading-split">
          <div>
            <p className="section-kicker">Craft logic</p>
            <h2 id="craft-heading">Why these watches still feel unmistakably Seiko.</h2>
          </div>
          <p>
            The watches do not need to look identical to feel related. Seiko&apos;s case language, dial discipline, and
            movement choices keep the portfolio connected while each family stays useful to a different buyer.
          </p>
        </div>

        <div className="pillar-grid">
          {craftPillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="close-panel" aria-labelledby="close-heading">
        <p className="section-kicker">Collector close</p>
        <h2 id="close-heading">Pick the Seiko that already matches your pace.</h2>
        <p>
          If you want capability first, start with Prospex. If dial warmth matters most, Presage earns the click. If
          travel precision is the point, Astron is the answer. If silhouette and finishing lead everything, King Seiko
          is where the page was always heading.
        </p>
        <div className="close-links">
          {watches.map((watch) => (
            <a key={watch.id} href={`#${watch.id}`}>
              {`${watch.family} ${watch.reference}`}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
