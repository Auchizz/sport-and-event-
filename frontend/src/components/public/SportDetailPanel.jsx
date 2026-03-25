import ContactPersonCard from './ContactPersonCard'

export default function SportDetailPanel({ sport, onContact }) {
  if (!sport) return null

  return (
    <aside className="sliit-card lg:sticky lg:top-24">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sliit-muted">Selected Sport</p>
          <h3 className="mt-3 text-4xl font-semibold text-white">{sport.icon} {sport.name}</h3>
          <p className="mt-2 text-base text-sliit-gold">{sport.team}</p>
        </div>
        <span className="rounded-full border border-sliit-gold/30 bg-sliit-gold/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-sliit-gold">
          How to Join
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-sliit-muted">{sport.description}</p>

      <div className="mt-8 space-y-4">
        <ContactPersonCard
          title="Captain"
          person={sport.captain}
          onContact={() => onContact({
            recipientName: sport.captain.name,
            recipientRole: 'Captain',
            sportOrClubName: sport.name,
            entityType: 'team'
          })}
        />
        <ContactPersonCard
          title="Vice Captain"
          person={sport.viceCaptain}
          onContact={() => onContact({
            recipientName: sport.viceCaptain.name,
            recipientRole: 'Vice Captain',
            sportOrClubName: sport.name,
            entityType: 'team'
          })}
        />
        <ContactPersonCard
          title="Club Secretary"
          person={sport.secretary}
          onContact={() => onContact({
            recipientName: sport.secretary.name,
            recipientRole: 'Secretary',
            sportOrClubName: sport.name,
            entityType: 'team'
          })}
        />
        <ContactPersonCard
          title="Club President"
          person={sport.president}
          onContact={() => onContact({
            recipientName: sport.president.name,
            recipientRole: 'President',
            sportOrClubName: sport.name,
            entityType: 'team'
          })}
        />
      </div>
    </aside>
  )
}
