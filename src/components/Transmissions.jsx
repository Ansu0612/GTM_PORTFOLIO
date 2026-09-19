import { transmissions } from '../data/social.js'

export default function Transmissions() {
  return (
    <section id="transmissions">
      <span className="eyebrow">Transmissions</span>
      <h2 className="section-title">Incoming from the command center</h2>
      <p className="section-sub">LinkedIn posts and GTM experiments, as they go out.</p>

      <div className="transmission-grid">
        {transmissions.map((t) => (
          <div className="transmission-card" key={t.id}>
            <div className="transmission-id">TRANSMISSION #{t.id}</div>
            <div className="transmission-title">{t.title}</div>
            {t.link ? (
              <a className="transmission-link" href={t.link} target="_blank" rel="noreferrer">{t.platform} →</a>
            ) : (
              <span className="transmission-link" style={{ color: 'var(--text-dim)' }}>{t.platform} — link coming soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
