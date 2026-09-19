import { gtmCapabilities } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="power-ups">
      <span className="eyebrow">⚡ GTM Power-Ups</span>
      <h2 className="section-title">Systems I Can Build</h2>

      <div className="skills-grid">
        {gtmCapabilities.map((cap) => (
          <div className="skill-card" key={cap.name}>
            <div className="skill-cat">{cap.name}</div>

            <div className="os-flow" style={{ marginTop: 0, marginBottom: 18 }}>
              {cap.chain.map((step, i) => (
                <span key={step} style={{ display: 'contents' }}>
                  <span className="os-node" style={{ padding: '8px 12px', fontSize: '0.72rem' }}>{step}</span>
                  {i < cap.chain.length - 1 && <span className="os-arrow">→</span>}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cap.tools.map((t) => <span className="pill" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
