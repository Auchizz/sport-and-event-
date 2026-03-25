import { useEffect, useMemo, useRef, useState } from 'react'

function buildDefaultMessage(recipientName, sportOrClubName, entityType) {
  const label = entityType === 'club' ? 'club' : 'team'
  return `Hi ${recipientName}, I'm interested in joining the ${sportOrClubName} ${label}. Could you please share more details about how to get involved?`
}

export default function ContactModal({
  recipientName,
  recipientRole,
  sportOrClubName,
  entityType = 'team',
  onClose,
  onSuccess
}) {
  const initialMessage = useMemo(
    () => buildDefaultMessage(recipientName, sportOrClubName, entityType),
    [recipientName, sportOrClubName, entityType]
  )
  const firstInputRef = useRef(null)
  const [form, setForm] = useState({
    fullName: '',
    studentId: '',
    email: '',
    message: initialMessage
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setForm({
      fullName: '',
      studentId: '',
      email: '',
      message: initialMessage
    })
    setErrors({})
  }, [initialMessage])

  useEffect(() => {
    const timeoutId = window.setTimeout(() => firstInputRef.current?.focus(), 50)
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const validate = () => {
    const nextErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!form.studentId.trim()) nextErrors.studentId = 'Student ID is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Please add a short message.'
    return nextErrors
  }

  const handleChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSubmitting(true)
    onSuccess?.()
    window.setTimeout(() => {
      setSubmitting(false)
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#030711]/80 px-4 py-8 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close contact modal"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-sliit-gold/35 bg-[#0d1527] p-6 shadow-gold-glow sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="sliit-pill mb-4">Contact {recipientRole}</p>
            <h2 id="contact-modal-title" className="sliit-heading text-4xl text-white">
              Contact {recipientRole} — {recipientName}
            </h2>
            <p className="mt-2 text-sm text-sliit-muted">Re: {sportOrClubName}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-sliit-gold/40 hover:text-sliit-gold"
          >
            ×
          </button>
        </div>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-sliit-muted">
              Full Name*
              <input
                ref={firstInputRef}
                className="sliit-input"
                value={form.fullName}
                onChange={(event) => handleChange('fullName', event.target.value)}
                placeholder="Your full name"
              />
              {errors.fullName ? <span className="text-xs text-rose-300">{errors.fullName}</span> : null}
            </label>

            <label className="grid gap-2 text-sm text-sliit-muted">
              Student ID*
              <input
                className="sliit-input"
                value={form.studentId}
                onChange={(event) => handleChange('studentId', event.target.value)}
                placeholder="IT21XXXXXX"
              />
              {errors.studentId ? <span className="text-xs text-rose-300">{errors.studentId}</span> : null}
            </label>
          </div>

          <label className="grid gap-2 text-sm text-sliit-muted">
            Your Email*
            <input
              type="email"
              className="sliit-input"
              value={form.email}
              onChange={(event) => handleChange('email', event.target.value)}
              placeholder="you@sliit.lk"
            />
            {errors.email ? <span className="text-xs text-rose-300">{errors.email}</span> : null}
          </label>

          <label className="grid gap-2 text-sm text-sliit-muted">
            Message*
            <textarea
              rows="6"
              className="sliit-input resize-none"
              value={form.message}
              onChange={(event) => handleChange('message', event.target.value)}
            />
            {errors.message ? <span className="text-xs text-rose-300">{errors.message}</span> : null}
          </label>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-sliit-muted">
              Your message will be queued as a mock request for this demo experience.
            </p>
            <button type="submit" className="sliit-button-primary min-w-[11rem]" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
