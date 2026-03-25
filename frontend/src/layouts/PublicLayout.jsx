import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import PublicNavbar from '../components/public/PublicNavbar'
import PublicFooter from '../components/public/PublicFooter'
import ContactModal from '../components/public/ContactModal'
import ToastNotification from '../components/public/ToastNotification'

export default function PublicLayout() {
  const location = useLocation()
  const [activeContact, setActiveContact] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!toast) return undefined
    const timeoutId = window.setTimeout(() => setToast(null), 2600)
    return () => window.clearTimeout(timeoutId)
  }, [toast])

  const outletContext = useMemo(() => ({
    openContactModal: ({
      recipientName,
      recipientRole,
      sportOrClubName,
      entityType = 'team'
    }) => {
      setActiveContact({
        recipientName,
        recipientRole,
        sportOrClubName,
        entityType
      })
    }
  }), [])

  return (
    <div className="sliit-shell">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-sliit-gold/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-12 h-80 w-80 rounded-full bg-sliit-blue/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sliit-gold/10 blur-3xl" />
      </div>

      <PublicNavbar />

      <main className="relative z-10 pb-16">
        <Outlet context={outletContext} />
      </main>

      <PublicFooter />

      {activeContact && (
        <ContactModal
          recipientName={activeContact.recipientName}
          recipientRole={activeContact.recipientRole}
          sportOrClubName={activeContact.sportOrClubName}
          entityType={activeContact.entityType}
          onClose={() => setActiveContact(null)}
          onSuccess={() => {
            setToast({
              message: `Message sent! ${activeContact.recipientName} will get back to you soon.`
            })
          }}
        />
      )}

      {toast && <ToastNotification message={toast.message} />}
    </div>
  )
}
