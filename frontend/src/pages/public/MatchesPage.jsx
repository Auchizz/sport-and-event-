import { useState } from 'react'
import MatchList from '../../components/public/MatchList'
import { matches } from '../../data/sliitSportsHubData'

export default function MatchesPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section className="sliit-section py-12 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="sliit-pill justify-center">Match Schedules & Results</p>
        <h1 className="sliit-heading mt-6 text-5xl text-white sm:text-6xl">Follow live action, upcoming fixtures, and recent results.</h1>
        <p className="mt-5 text-lg leading-8 text-sliit-muted">
          Track what is happening today, see what is coming next, and revisit the latest completed university contests.
        </p>
      </div>

      <div className="mt-10">
        <MatchList matches={matches} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>
    </section>
  )
}
