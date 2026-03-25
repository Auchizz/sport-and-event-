import ContactPersonCard from './ContactPersonCard'

export default function ClubDetailPanel({ club, onContact }) {
  if (!club) return null

  return (
    <aside className="sliit-card lg:sticky lg:top-24">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sliit-muted">Selected Club</p>
          <h3 className="mt-3 text-4xl font-semibold text-white">{club.icon} {club.name}</h3>
        </div>
        <span className="rounded-full border border-sliit-blue/30 bg-sliit-blue/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-sliit-blue">
          How to Join
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-sliit-muted">{club.description}</p>

      <div className="mt-8 space-y-4">
        <ContactPersonCard
          title="Club President"
          person={club.president}
          accent="blue"
          onContact={() => onContact({
            recipientName: club.president.name,
            recipientRole: 'President',
            sportOrClubName: club.name,
            entityType: 'club'
          })}
        />
        <ContactPersonCard
          title="Club Secretary"
          person={club.secretary}
          accent="blue"
          onContact={() => onContact({
            recipientName: club.secretary.name,
            recipientRole: 'Secretary',
            sportOrClubName: club.name,
            entityType: 'club'
          })}
        />
      </div>
    </aside>
  )
}
