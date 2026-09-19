import { useState } from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#quests', label: 'Quests' },
  { href: '/#power-ups', label: 'Power-Ups' },
  { href: '/#journey', label: 'Journey' },
  { href: '/#playbook', label: 'Playbook' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
        <span className="nav-brand-name">ANSU_PRIYA.EXE</span>
        <span className="nav-brand-role">GTM ENGINEER</span>
      </Link>

      <nav className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>

      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : '☰'}
      </button>

      <div className={`nav-mobile-menu ${open ? 'open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </header>
  )
}
