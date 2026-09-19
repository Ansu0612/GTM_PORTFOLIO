import { useState } from 'react'
import { troubleshootingScenarios } from '../data/troubleshooting.js'

function TroubleCard({ scenario }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      className="trouble-card"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      style={{ textAlign: 'left', width: '100%', border: '2px solid var(--panel-border)' }}
    >
      <div className="trouble-symptom">"{scenario.symptom}"</div>
      <div className="trouble-flow">
        {scenario.investigate.map((s, i) => (
          <span key={s}>{s}{i < scenario.investigate.length - 1 && ' → '}</span>
        ))}
      </div>
      {open && (
        <div className="trouble-detail">
          <div><strong>Hypotheses</strong></div>
          <ol style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {scenario.hypotheses.map((h) => (
              <li key={h} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{h}</li>
            ))}
          </ol>
          <div><strong>Data I'd check:</strong> {scenario.dataToCheck}</div>
          <div><strong>Experiment:</strong> {scenario.experiment}</div>
          <div><strong>Expected signal:</strong> {scenario.expectedSignal}</div>
        </div>
      )}
      <div className="trouble-toggle">{open ? '– Collapse' : '+ Investigate'}</div>
    </button>
  )
}

export default function TroubleshootingLab() {
  return (
    <section id="troubleshooting">
      <span className="eyebrow">🛠 GTM Troubleshooting Lab</span>
      <h2 className="section-title">Symptom → Hypothesis → Root Cause</h2>
      <p className="section-sub">How I diagnose a GTM motion before touching the fix.</p>

      <div className="trouble-grid">
        {troubleshootingScenarios.map((s) => <TroubleCard scenario={s} key={s.symptom} />)}
      </div>
    </section>
  )
}
