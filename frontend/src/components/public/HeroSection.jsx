import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="sliit-section relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <div className="sliit-pill">
            <span>SLIIT University</span>
            <span className="h-1 w-1 rounded-full bg-sliit-gold" />
            <span>Sports Information Module</span>
          </div>

          <h1 className="sliit-heading mt-6 max-w-4xl text-6xl leading-[0.95] text-white sm:text-7xl lg:text-[6.25rem]">
            One home for SLIIT sports, clubs, players, and fixtures.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-sliit-muted sm:text-xl">
            SLIIT Sports Hub gives students a direct route to discover teams, connect with leaders, follow matches,
            and explore club opportunities across campus.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/sports-clubs#sports" className="sliit-button-primary">
              Find Your Sport →
            </Link>
            <Link to="/matches" className="sliit-button-secondary">
              View Live Fixtures
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="sliit-grid sliit-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-sliit-gold/30 bg-sliit-gold/10 blur-2xl" />
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0d1529] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-sliit-muted">Today at SLIIT</span>
                  <span className="sliit-pill px-3 py-1 text-xs">Live Campus Pulse</span>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-sliit-gold/25 bg-sliit-gold/10 p-4">
                    <div className="flex items-center gap-3 text-sm text-sliit-gold">
                      <span className="sliit-live-dot" />
                      Football Live
                    </div>
                    <div className="mt-3 text-3xl font-bold text-white">SLIIT FC 2–1 UoM Rangers</div>
                    <div className="mt-2 text-sm text-sliit-muted">63' • Main Ground • University League</div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-sliit-muted">Join Teams</div>
                      <div className="mt-3 text-3xl font-bold text-white">Direct captain access</div>
                    </div>
                    <div className="rounded-2xl border border-sliit-blue/25 bg-sliit-blue/10 p-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-sliit-blue">Student Clubs</div>
                      <div className="mt-3 text-3xl font-bold text-white">9 active communities</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-sliit-muted">Teams</div>
                  <div className="mt-2 text-2xl font-bold text-white">40+</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-sliit-muted">Athletes</div>
                  <div className="mt-2 text-2xl font-bold text-white">500+</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-sliit-muted">Facilities</div>
                  <div className="mt-2 text-2xl font-bold text-white">Courts & grounds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
