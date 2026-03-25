import { Link } from 'react-router-dom'
import { publicNavLinks } from '../../data/sliitSportsHubData'

export default function PublicFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#09111f]/95">
      <div className="sliit-section grid gap-10 py-12 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sliit-gold/35 bg-sliit-gold/10 text-lg shadow-gold-glow">
              S
            </div>
            <div>
              <div className="sliit-heading text-2xl text-white">SLIIT Sports Hub</div>
              <div className="text-sm text-sliit-muted">Centralized university sports information for students and teams.</div>
            </div>
          </div>
          <p className="max-w-lg text-sm leading-7 text-sliit-muted">
            SLIIT Sports Hub brings together sports, clubs, fixtures, player contacts, and facilities into one modern platform for university life.
          </p>
        </div>

        <div>
          <h3 className="sliit-heading text-xl text-white">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm text-sliit-muted">
            {publicNavLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition hover:text-sliit-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="sliit-heading text-xl text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-sliit-muted">
            <a className="block transition hover:text-sliit-gold" href="mailto:sports@sliit.lk">
              sports@sliit.lk
            </a>
            <p>Malabe Campus, SLIIT University Sports Information Module</p>
            <p>Copyright © 2025 SLIIT Sports Hub</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
