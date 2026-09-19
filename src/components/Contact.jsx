import { useState } from 'react'
import { socialLinks } from '../data/social.js'

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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
          <a className="btn" href={socialLinks.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn →</a>
          {socialLinks.github && (
            <a className="btn" href={socialLinks.github} target="_blank" rel="noreferrer">View GitHub →</a>
          )}
          <a className="btn btn-ghost" href={`mailto:${socialLinks.email}`}>Email directly →</a>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4 }}>
            {socialLinks.email}
          </p>
        </div>
      </div>
    </section>
  )
}
