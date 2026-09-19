import { gtmOperatingSystem } from '../data/skills.js'

export default function GTMOS() {
  return (
    <section id="operating-system">
      <span className="eyebrow">System</span>
      <h2 className="section-title">My GTM Operating System</h2>

      <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {gtmOperatingSystem.map((group, i) => (
          <div key={group.layer}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>{group.layer}</div>
            <div className="os-flow" style={{ marginTop: 0 }}>
              {group.nodes.map((node, j) => (
                <span key={node} style={{ display: 'contents' }}>
                  <span className="os-node">{node}</span>
                  {j < group.nodes.length - 1 && <span className="os-arrow">→</span>}
                </span>
              ))}
            </div>
            {i < gtmOperatingSystem.length - 1 && (
              <div style={{ marginTop: 16, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>↓</div>
            )}
          </div>
        ))}
      </div>

      <p className="os-note">
        I don't treat GTM as a collection of disconnected activities. <strong>I think in systems.</strong>
      </p>
    </section>
  )
}
