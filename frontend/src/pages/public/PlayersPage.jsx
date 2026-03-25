import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import PlayerGrid from '../../components/public/PlayerGrid'
import { players } from '../../data/sliitSportsHubData'

export default function PlayersPage() {
  const { openContactModal } = useOutletContext()
  const [query, setQuery] = useState('')
  const [sportFilter, setSportFilter] = useState('all')

  const sportOptions = useMemo(
    () => ['all', ...new Set(players.map((player) => player.sport))],
    []
  )

  const filteredPlayers = useMemo(() => {
    return players.filter((player) => {
      if (sportFilter !== 'all' && player.sport !== sportFilter) return false
      if (!query.trim()) return true

      const searchValue = `${player.name} ${player.sport} ${player.role}`.toLowerCase()
      return searchValue.includes(query.trim().toLowerCase())
    })
  }, [query, sportFilter])

  return (
    <section className="sliit-section py-12 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="sliit-pill justify-center">Player Information</p>
        <h1 className="sliit-heading mt-6 text-5xl text-white sm:text-6xl">Search SLIIT players by name, sport, and leadership role.</h1>
        <p className="mt-5 text-lg leading-8 text-sliit-muted">
          Find captains, vice captains, and team members across the sports program. Leadership cards include direct contact actions.
        </p>
      </div>

      <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-sliit lg:grid-cols-[1.2fr_0.8fr]">
        <label className="grid gap-2 text-left text-sm text-sliit-muted">
          Search by player name or sport
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="sliit-input"
            placeholder="Search by player name or sport"
            aria-label="Search players"
          />
        </label>

        <label className="grid gap-2 text-left text-sm text-sliit-muted">
          Filter by sport
          <select
            value={sportFilter}
            onChange={(event) => setSportFilter(event.target.value)}
            className="sliit-input"
            aria-label="Filter players by sport"
          >
            {sportOptions.map((sport) => (
              <option key={sport} value={sport} className="bg-sliit-bg text-white">
                {sport === 'all' ? 'All sports' : sport}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-8">
        <PlayerGrid
          players={filteredPlayers}
          onContact={(player) => openContactModal({
            recipientName: player.name,
            recipientRole: player.role,
            sportOrClubName: player.sport,
            entityType: 'team'
          })}
        />
      </div>
    </section>
  )
}
