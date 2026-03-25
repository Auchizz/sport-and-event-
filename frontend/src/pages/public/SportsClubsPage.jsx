import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import SportsGrid from '../../components/public/SportsGrid'
import ClubsGrid from '../../components/public/ClubsGrid'
import SportDetailPanel from '../../components/public/SportDetailPanel'
import ClubDetailPanel from '../../components/public/ClubDetailPanel'
import { clubs, sports } from '../../data/sliitSportsHubData'

export default function SportsClubsPage() {
  const { openContactModal } = useOutletContext()
  const location = useLocation()
  const navigate = useNavigate()
  const sportsSectionRef = useRef(null)
  const clubsSectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState('sports')
  const [selectedSportId, setSelectedSportId] = useState(sports[0].id)
  const [selectedClubId, setSelectedClubId] = useState(clubs[0].id)

  useEffect(() => {
    const targetTab = location.hash === '#clubs' ? 'clubs' : 'sports'
    setActiveTab(targetTab)
    const targetRef = targetTab === 'clubs' ? clubsSectionRef : sportsSectionRef
    window.requestAnimationFrame(() => {
      targetRef.current?.focus()
      targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.hash])

  const selectedSport = useMemo(
    () => sports.find((sport) => sport.id === selectedSportId) ?? sports[0],
    [selectedSportId]
  )

  const selectedClub = useMemo(
    () => clubs.find((club) => club.id === selectedClubId) ?? clubs[0],
    [selectedClubId]
  )

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    navigate(`/sports-clubs#${tab}`, { replace: true })
  }

  return (
    <section className="sliit-section py-12 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="sliit-pill justify-center">Sports & Clubs</p>
        <h1 className="sliit-heading mt-6 text-5xl text-white sm:text-6xl">Discover every team, club, and student leader in one place.</h1>
        <p className="mt-5 text-lg leading-8 text-sliit-muted">
          Explore all 21 sports and 9 clubs, then open the full detail panel to see exactly how to join and who to contact.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3" role="tablist" aria-label="Sports and Clubs tabs">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'sports'}
          onClick={() => handleTabChange('sports')}
          className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
            activeTab === 'sports'
              ? 'bg-sliit-gold text-sliit-bg'
              : 'border border-white/10 bg-white/5 text-sliit-muted hover:text-white'
          }`}
        >
          Sports
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'clubs'}
          onClick={() => handleTabChange('clubs')}
          className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
            activeTab === 'clubs'
              ? 'bg-sliit-blue text-white'
              : 'border border-white/10 bg-white/5 text-sliit-muted hover:text-white'
          }`}
        >
          Clubs & Societies
        </button>
      </div>

      <div className="mt-10 space-y-14">
        <section
          id="sports"
          ref={sportsSectionRef}
          tabIndex="-1"
          className={activeTab === 'sports' ? 'outline-none' : 'hidden'}
        >
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sliit-muted">Sports Directory</p>
            <h2 className="sliit-heading mt-3 text-4xl text-white sm:text-5xl">Open any sport to see exactly how to join.</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <SportsGrid sports={sports} selectedId={selectedSport.id} onSelect={setSelectedSportId} />
            <SportDetailPanel sport={selectedSport} onContact={openContactModal} />
          </div>
        </section>

        <section
          id="clubs"
          ref={clubsSectionRef}
          tabIndex="-1"
          className={activeTab === 'clubs' ? 'outline-none' : 'hidden'}
        >
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sliit-blue">Clubs & Societies</p>
            <h2 className="sliit-heading mt-3 text-4xl text-white sm:text-5xl">Find the right club and contact the people leading it.</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <ClubsGrid clubs={clubs} selectedId={selectedClub.id} onSelect={setSelectedClubId} />
            <ClubDetailPanel club={selectedClub} onContact={openContactModal} />
          </div>
        </section>
      </div>
    </section>
  )
}
