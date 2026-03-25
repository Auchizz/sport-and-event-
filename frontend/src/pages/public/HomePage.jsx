import { Link } from 'react-router-dom'
import HeroSection from '../../components/public/HeroSection'
import StatsBar from '../../components/public/StatsBar'
import FeatureHighlights from '../../components/public/FeatureHighlights'
import CTABanner from '../../components/public/CTABanner'
import {
  featuredClubs,
  featuredSports,
  featureHighlights,
  homeStats
} from '../../data/sliitSportsHubData'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar stats={homeStats} />
      <FeatureHighlights items={featureHighlights} />
      <CTABanner />

      <section className="sliit-section py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="sliit-card overflow-hidden p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sliit-muted">Featured Sports</p>
                <h2 className="sliit-heading mt-3 text-5xl text-white">Your next team could start here.</h2>
              </div>
              <Link to="/sports-clubs#sports" className="sliit-button-secondary hidden sm:inline-flex">
                Browse All Sports
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {featuredSports.map((sport) => (
                <Link
                  key={sport.id}
                  to="/sports-clubs#sports"
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-sliit-gold/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{sport.icon}</span>
                    <span className="rounded-full border border-sliit-gold/25 bg-sliit-gold/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-sliit-gold">
                      Join Team
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{sport.name}</h3>
                  <p className="mt-2 text-sm text-sliit-muted">{sport.team}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="sliit-card border-sliit-blue/25 bg-sliit-blue/10 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-sliit-blue">Clubs & Societies</p>
              <h2 className="sliit-heading mt-3 text-4xl text-white">Creative, technical, and student-led communities.</h2>
              <div className="mt-6 space-y-4">
                {featuredClubs.map((club) => (
                  <Link
                    key={club.id}
                    to="/sports-clubs#clubs"
                    className="block rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-sliit-blue/35"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-2xl">{club.icon}</div>
                        <div className="mt-2 font-semibold text-white">{club.name}</div>
                      </div>
                      <span className="rounded-full border border-sliit-blue/30 bg-sliit-blue/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-sliit-blue">
                        Join Club
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sliit-card p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-sliit-muted">Built For Students</p>
              <h2 className="sliit-heading mt-3 text-4xl text-white">Get from discovery to direct contact in minutes.</h2>
              <p className="mt-4 text-base leading-7 text-sliit-muted">
                Find the team, view the leader, send your interest message, and stay up to date with fixtures and campus facilities.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/join-team" className="sliit-button-primary">
                  Open Join Directory
                </Link>
                <Link to="/players" className="sliit-button-secondary">
                  Browse Captains
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
