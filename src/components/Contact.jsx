import { useState } from 'react'
import { socialLinks } from '../data/social.js'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="currentColor" stroke="none">in</text>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.27 9.27 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.18.6.69.5A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Fill in your name, email and message first.')
      return
    }
    const subject = encodeURIComponent(`Next quest: ${form.company || 'GTM opportunity'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})${form.company ? `, ${form.company}` : ''}`
    )
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email client to send this...')
  }

  return (
    <section id="contact">
      <span className="eyebrow">Ready for the next quest?</span>
      <h2 className="section-title">Let's talk GTM.</h2>
      <p className="section-sub">
        I'm looking for GTM Engineering opportunities where I can work across account intelligence,
        automation, research and revenue systems.
      </p>
      <p className="section-sub" style={{ marginTop: 10 }}>
        If you're building a GTM motion and need someone who can connect data, research and execution — let's talk.
      </p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" value={form.name} onChange={update('name')} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={form.email} onChange={update('email')} required />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" value={form.company} onChange={update('company')} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} value={form.message} onChange={update('message')} required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Transmission →</button>
          <p className="contact-status">{status}</p>
        </form>

        <div className="contact-links">
          <a className="contact-link" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
          {socialLinks.github && (
            <a className="contact-link" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> GitHub
            </a>
          )}
          <a className="contact-link" href={`mailto:${socialLinks.email}`}>
            <MailIcon /> Email
          </a>
        </div>
      </div>
    </section>
  )
}
