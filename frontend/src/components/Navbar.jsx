import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const pageMeta = {
  '/dashboard': {
    title: 'Performance Snapshot',
    subtitle: 'A cleaner view of account health, access level, and profile readiness.',
  },
  '/profile': {
    title: 'Profile Studio',
    subtitle: 'Manage your profile, and for admins, curate the full member directory.',
  },
  '/settings': {
    title: 'System Preferences',
    subtitle: 'Security, integrations, and account defaults.',
  },
}

export default function Navbar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const meta = pageMeta[location.pathname] || {
    title: 'SportSphere',
    subtitle: 'Student sports platform',
  }

  return (
    <header className="sticky top-0 z-30 border-b border-[#e7dac3] bg-[#fff8ef]/90 px-4 py-4 backdrop-blur-xl md:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('toggleSidebar'))}
            className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8c6ab] bg-[#fffdf8] text-primary shadow-sm md:hidden"
          >
            ☰
          </button>
          <div>
            <div className="inline-flex rounded-full border border-[#e7dac3] bg-[#efe3d3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Control Panel
            </div>
            <h1 className="mt-3 text-2xl font-black tracking-tight text-primary">{meta.title}</h1>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[#6f675d]">{meta.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="hidden items-center gap-3 rounded-2xl border border-[#e7dac3] bg-[#fffdf8]/92 px-4 py-3 shadow-sm lg:flex">
            <div className="text-right">
              <div className="text-xs uppercase tracking-[0.3em] text-[#8c7d69]">Signed in</div>
              <div className="text-sm font-semibold text-primary">{user?.email || 'No email'}</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-[#254e6f] to-sportgreen text-lg font-bold text-[#fff8ef] shadow-lg shadow-[rgba(23,50,77,0.22)]">
              {user?.name?.[0] || 'U'}
            </div>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center justify-center rounded-2xl border border-[#d8c6ab] bg-[#fffdf8] px-4 py-3 text-sm font-semibold text-primary shadow-sm transition hover:border-accent hover:text-primary"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
