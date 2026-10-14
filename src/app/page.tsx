const sections = [
  { id: "philosophy", number: "01", title: "The philosophy", label: "A foundation for performance", description: "This space will introduce Meg’s coaching philosophy and approach to supporting rodeo athletes." },
  { id: "background", number: "02", title: "Meet your coach", label: "The person behind the practice", description: "Meg’s story, experience, and verified credentials will be shared here." },
  { id: "athletes", number: "03", title: "Athlete stories", label: "Perspectives from the arena", description: "Future client testimonials will appear here with permission. No testimonials have been published yet." },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-7 md:px-12">
        <a href="#" className="brand" aria-label="Coach Meg Walker home">MW<span>COACH MEG WALKER</span></a>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
          <a href="#philosophy">The approach</a><a href="#background">Meet Meg</a><a className="nav-cta" href="#work-together">Work with Meg <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:px-12 md:py-24" aria-labelledby="hero-heading">
          <div>
            <p className="eyebrow"><span className="small-star" aria-hidden="true">✦</span> RODEO PERFORMANCE COACH</p>
            <h1 id="hero-heading">Rooted in rodeo.<br /><em>Focused on<br />performance.</em></h1>
            <p className="hero-copy">Coach Meg Walker’s home for rodeo performance coaching. A place to discover the philosophy, the person, and the possibilities ahead.</p>
            <a className="button" href="#philosophy">Explore the approach <span aria-hidden="true">↗</span></a>
            <p className="launch-note">A new chapter is taking shape. Full website coming soon.</p>
          </div>
          <div className="arena-art" role="img" aria-label="Abstract Western landscape with arena-inspired rings, a sun, and rolling hills">
            <span className="art-caption">THE ARENA IS JUST THE BEGINNING</span>
            <div className="sun" /><div className="arena-ring ring-one" /><div className="arena-ring ring-two" /><div className="arena-ring ring-three" />
            <div className="hill hill-back" /><div className="hill hill-front" />
            <span className="art-star" aria-hidden="true">✦</span><span className="art-signature">Meg Walker</span>
            <span className="art-footnote">RODEO / PERFORMANCE / PURPOSE</span>
          </div>
        </section>
        <div className="chapter-strip px-6 py-5 text-center"><span aria-hidden="true">✦</span> A strong foundation. A purposeful next chapter. <span aria-hidden="true">✦</span></div>
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24" aria-labelledby="foundation-heading">
          <div className="section-intro"><p className="eyebrow">GET TO KNOW COACH MEG</p><h2 id="foundation-heading">Behind the performance.</h2><p>The story and approach behind the coaching. More details are on the way.</p></div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {sections.map((section) => <article id={section.id} key={section.id} className="foundation-card scroll-mt-8"><span className="card-number">{section.number} /</span><h3>{section.title}</h3><p className="card-label">{section.label}</p><p>{section.description}</p><span className="status">CONTENT COMING SOON</span></article>)}
          </div>
        </section>
        <section id="work-together" className="work-section px-6 py-20 md:px-12" aria-labelledby="work-heading">
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.1fr_1fr]"><div><p className="eyebrow">THE NEXT CHAPTER</p><h2 id="work-heading">Your next step<br /><em>starts here.</em></h2></div><div><p>Ways to work with Coach Meg will be introduced here, along with program details and how to get in touch.</p><p className="work-note">Coaching and contact information coming soon.</p><a className="text-link" href="#philosophy">Get to know the approach <span aria-hidden="true">↗</span></a></div></div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-8 text-sm md:px-12"><p className="footer-name">Coach Meg Walker</p><p>Rodeo Performance Coach</p><a href="#">Back to top ↑</a></footer>
    </>
  );
}
