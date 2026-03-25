import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { publicNavLinks } from '../../data/sliitSportsHubData'

export default function PublicNavbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111e]/80 backdrop-blur-xl">
      <div className="sliit-section flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sliit-gold/35 bg-sliit-gold/10 text-lg shadow-gold-glow">
            S
          </div>
          <div>
            <div className="sliit-heading text-2xl leading-none text-white">SLIIT Sports Hub</div>
            <div className="text-xs uppercase tracking-[0.24em] text-sliit-muted">Sports Information Module</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {publicNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-sliit-gold text-sliit-bg'
                  : 'text-sliit-muted hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-sliit-muted transition hover:border-sliit-gold/40 hover:text-white">
            Log In
          </Link>
          <Link to="/join-team" className="sliit-button-primary px-4 py-2 text-sm">
            Join Now
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0a1425]/95 lg:hidden">
          <div className="sliit-section py-4">
            <nav className="grid gap-2">
              {publicNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-sliit-gold text-sliit-bg'
                      : 'bg-white/5 text-sliit-muted hover:text-white'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 grid gap-2">
              <Link to="/login" className="sliit-button-secondary justify-center">
                Log In
              </Link>
              <Link to="/join-team" className="sliit-button-primary justify-center">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
