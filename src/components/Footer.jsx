import { socialLinks } from '../data/social.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">ANSU_PRIYA.EXE — GTM ENGINEER</div>
        <div className="footer-tag">Build. Test. Learn. Repeat.</div>
      </div>
      <div className="footer-links">
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>}
        {socialLinks.youtube && <a href={socialLinks.youtube} target="_blank" rel="noreferrer">YouTube</a>}
        <a href={`mailto:${socialLinks.email}`}>Email</a>
      </div>
      <div className="footer-copy">© 2026 Ansu Priya</div>
    </footer>
  )
}
