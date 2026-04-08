import type { CSSProperties } from "react";

type WatchModel = {
  accent: string;
  bestFor: string;
  code: string;
  descriptor: string;
  id: string;
  intro: string;
  mood: string;
  name: string;
  quickSpec: string;
  specs: string[];
  standout: string;
  story: string;
  strap: string;
  wristRead: string;
};

const watchModels: WatchModel[] = [
  {
    id: "srpd55",
    code: "SRPD55",
    name: "Night-Dial Sports",
    descriptor: "Dark everyday sports watch",
    intro:
      "A charcoal dial, brushed steel case, and straightforward bezel make this the cleanest entry point into the Seiko 5 Sports family.",
    story:
      "It feels balanced with denim, knitwear, or a simple tee, and it reads like a dependable daily automatic instead of a statement piece.",
    specs: ["42.5 mm case", "Black sunray dial", "4R36 automatic movement"],
    strap: "Solid-link steel bracelet with a familiar dive-style taper.",
    quickSpec: "Dark everyday sports watch",
    mood: "Understated sport",
    bestFor: "Daily rotation",
    standout: "Monochrome dial and bezel restraint",
    wristRead: "Confident without shouting",
    accent: "#d8b57a",
  },
  {
    id: "ssk003",
    code: "SSK003",
    name: "GMT Blue",
    descriptor: "Travel-ready GMT energy",
    intro:
      "The blue dial and two-tone bezel give the Seiko 5 GMT line a brighter, more kinetic presence while keeping the same approachable mechanical feel.",
    story:
      "If you want the family formula with extra motion and color, this is the reference that looks like it is already planning the next flight.",
    specs: ["42.5 mm case", "Blue GMT bezel", "4R34 automatic GMT movement"],
    strap: "Five-link bracelet that adds a little more shimmer on wrist.",
    quickSpec: "Travel-ready GMT energy",
    mood: "Modern traveler",
    bestFor: "Frequent flyers",
    standout: "Fourth GMT hand and bi-color bezel",
    wristRead: "Sharper and more extroverted",
    accent: "#6288ff",
  },
  {
    id: "srpg27",
    code: "SRPG27",
    name: "Field Balance",
    descriptor: "Field-first clarity",
    intro:
      "Arabic numerals, matte finishing, and disciplined contrast shift the Seiko 5 formula toward field-watch legibility without losing its casual versatility.",
    story:
      "It lands best for someone who values legibility and function first, but still wants enough polish to wear it beyond weekends and utility clothing.",
    specs: ["39.4 mm case", "Full Arabic dial", "Curved Hardlex crystal"],
    strap: "Brown leather strap that softens the tool-watch posture.",
    quickSpec: "Field-first clarity",
    mood: "Utility calm",
    bestFor: "Legibility lovers",
    standout: "Compact field proportions with full numerals",
    wristRead: "Lean, tidy, and practical",
    accent: "#8ec5a6",
  },
  {
    id: "srpk87",
    code: "SRPK87",
    name: "Compact Polish",
    descriptor: "Compact polished ease",
    intro:
      "A smaller case, warm champagne accents, and polished surfaces make this the most dressed-up Seiko 5 in the set without pushing into formal-watch stiffness.",
    story:
      "It suits slimmer wrists and cleaner outfits, delivering the same everyday Seiko practicality in a package that feels more refined at first glance.",
    specs: ["38 mm case", "Champagne-toned dial", "Exhibition caseback"],
    strap: "Polished bracelet that keeps the silhouette neat and compact.",
    quickSpec: "Compact polished ease",
    mood: "Casual dress",
    bestFor: "Smaller wrists",
    standout: "Dress-leaning finish in a compact case",
    wristRead: "Trim and polished",
    accent: "#e6c998",
  },
];

const comparisonRows = [
  {
    label: "Style mood",
    values: watchModels.map((model) => model.mood),
  },
  {
    label: "Best for",
    values: watchModels.map((model) => model.bestFor),
  },
  {
    label: "Standout detail",
    values: watchModels.map((model) => model.standout),
  },
  {
    label: "Wrist read",
    values: watchModels.map((model) => model.wristRead),
  },
];

const ownershipNotes = [
  {
    title: "Dependable automatic backbone",
    body: "Three of the four references share Seiko's dependable 4R36 engine, keeping hand-winding, hacking, and everyday serviceability at the center of the lineup.",
  },
  {
    title: "Ready for normal daily wear",
    body: "The sports-rooted cases are designed for rain, travel, and normal off-duty use without forcing the watches into precious-object territory.",
  },
  {
    title: "Practical legibility wins",
    body: "Legibility and convenience stay core to the family, making each watch easy to read quickly and practical for real daily wear.",
  },
  {
    title: "Seiko 5 variety without identity drift",
    body: "Each reference leans a different direction, but the shared case architecture, movement philosophy, and honest pricing keep them recognizably related.",
  },
];

export function App() {
  return (
    <main className="app-shell">
      <section className="hero" aria-label="Four Seiko 5 references. Four different temperaments.">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Seiko 5 Sports</p>
          <h1>Four Seiko 5 references. Four different temperaments.</h1>
          <p className="hero-body">
            From the dark all-rounder SRPD55 to the travel-minded SSK003, this lineup shows how far Seiko&apos;s
            everyday mechanical formula can stretch without losing its identity.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#models">
              Explore the four references
            </a>
          </div>
          <ul className="hero-facts">
            <li>Automatic 4R36 caliber</li>
            <li>100 m daily-ready water resistance</li>
            <li>LumiBrite hands and day-date utility</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-halo" />
          <div className="hero-orbit" />
          <div className="hero-watch hero-watch-main">
            <div className="watch-face" />
          </div>
          <div className="hero-watch hero-watch-secondary">
            <div className="watch-face" />
          </div>
          <p className="hero-tag hero-tag-top">Shared Seiko 5 backbone, tuned for four different routines.</p>
          <p className="hero-tag hero-tag-bottom">One mechanical family spanning sport, travel, field, and dressier daily wear.</p>
        </div>
      </section>

      <section className="section-panel" aria-label="Pick the Seiko 5 that fits your wrist and routine.">
        <div className="section-heading">
          <p className="eyebrow">Quick scan</p>
          <h2>Four watches, one shared mechanical backbone.</h2>
          <p className="section-copy">
            Use the lineup below to jump straight to the reference that matches how you dress, travel, and wear a watch day to day.
          </p>
        </div>
        <ul className="strip-grid">
          {watchModels.map((model) => (
            <li key={model.id}>
              <a className="strip-link" href={`#${model.id}`}>
                <strong>{model.code}</strong>
                <span>{model.quickSpec}</span>
                <em>{model.name}</em>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-panel" id="models">
        <div className="section-heading section-heading-inline">
          <div>
            <p className="eyebrow">Model showcase</p>
            <h2>Choose the reference with the right personality already built in.</h2>
          </div>
          <p className="section-copy">
            Each reference starts from the same approachable Seiko 5 idea, then pivots toward a distinct personality, use case, and wrist feel.
          </p>
        </div>
        <div className="models-grid">
          {watchModels.map((model) => (
            <article
              key={model.id}
              id={model.id}
              className="watch-card"
              aria-label={`${model.code} ${model.name}`}
              style={
                {
                  "--accent": model.accent,
                  "--glow": `${model.accent}33`,
                } as CSSProperties
              }
            >
              <div className="watch-visual" role="img" aria-label={`${model.code} ${model.name} watch illustration`}>
                <div className="watch-shell">
                  <div className="watch-shell-face" />
                </div>
              </div>
              <div className="watch-copy">
                <p className="watch-code">{model.code}</p>
                <h3>{`${model.code} ${model.name}`}</h3>
                <p className="watch-descriptor">{model.descriptor}</p>
                <p>{model.intro}</p>
                <p>{model.story}</p>
                <ul className="spec-list">
                  {model.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <p className="watch-strap">
                  <strong>Bracelet / strap</strong>
                  {` ${model.strap}`}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="spotlight" aria-label="Compare the mood at a glance.">
        <div className="spotlight-lead">
          <p className="eyebrow">Comparison spotlight</p>
          <h2>One platform, four different reasons to wear it.</h2>
          <p>
            The point of the Seiko 5 family is not just value. It is the ability to pick the same dependable core in a personality that already matches your wardrobe and routine.
          </p>
        </div>
        <div className="comparison-grid">
          <div className="comparison-row comparison-row-header">
            <span className="comparison-label">Reference</span>
            <div className="comparison-values comparison-values-header">
              {watchModels.map((model) => (
                <span key={model.code}>{model.code}</span>
              ))}
            </div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.label} className="comparison-row">
              <span className="comparison-label">{row.label}</span>
              <div className="comparison-values">
                {row.values.map((value) => (
                  <span key={`${row.label}-${value}`}>{value}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-panel heritage">
        <div className="heritage-copy">
          <p className="eyebrow">Why Seiko 5 still works</p>
          <h2>The range is broad, but the appeal stays practical.</h2>
        </div>
        <div className="heritage-copy">
          <p>
            Seiko 5 continues to matter because it lets you choose character without giving up honest everyday usability. You get mechanical credibility, legibility, and a case design that still feels comfortable in real routines.
          </p>
          <p>
            That is why this lineup works as a set: SRPD55 covers the neutral sports lane, SSK003 adds movement and travel energy, SRPG27 sharpens the field-watch brief, and SRPK87 trims the idea into something cleaner and more polished.
          </p>
        </div>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <p className="eyebrow">Ownership details</p>
          <h2>Built to stay easy in everyday wear.</h2>
        </div>
        <div className="ownership-grid">
          {ownershipNotes.map((note) => (
            <article key={note.title} className="ownership-card">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel closing">
        <p className="eyebrow">Closing note</p>
        <h2>Start with the reference that already matches how you dress.</h2>
        <p className="section-copy">
          The strongest Seiko 5 choice is usually the one that already feels natural with your routine. Choose the sports watch, the GMT, the field watch, or the compact polished option based on the life you are actually living, then let the mechanical common ground do the rest.
        </p>
        <div className="closing-links">
          <a className="primary-link" href="#models">
            Return to the lineup
          </a>
          <a className="text-link" href="#top">
            Back to the top
          </a>
        </div>
      </section>
    </main>
  );
}
