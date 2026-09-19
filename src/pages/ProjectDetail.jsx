import { useParams, Link, Navigate } from 'react-router-dom'
import { findProject } from '../data/projects.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = findProject(id)

  if (!project) return <Navigate to="/404" replace />

  return (
    <>
      <section className="detail-hero">
        <Link to="/#quests" className="detail-back">← Back to Quest Board</Link>
        <span className="detail-quest-num">{project.questNumber}</span>
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-tagline">{project.tagline}</p>

        {project.disclaimer && (
          <div className="detail-disclaimer">{project.disclaimer}</div>
        )}

        <div className="detail-flow">
          {project.flow.map((step, i) => (
            <span key={step} style={{ display: 'contents' }}>
              <span className="os-node">{step}</span>
              {i < project.flow.length - 1 && <span className="os-arrow">↓</span>}
            </span>
          ))}
        </div>
      </section>

      {project.sections.map((sec, i) => (
        <section className="detail-section" key={sec.title}>
          <div className="detail-section-num">{String(i + 1).padStart(2, '0')} —</div>
          <h2 className="detail-section-title">{sec.title}</h2>
          <div className="detail-section-body">
            {sec.body.map((p, j) => <p key={j}>{p}</p>)}
          </div>
        </section>
      ))}

      {project.screenshots?.length > 0 && (
        <section className="detail-section">
          <div className="detail-section-num">Screenshots</div>
          <h2 className="detail-section-title">The workflow, in the tools</h2>
          <div className="detail-gallery">
            {project.screenshots.map((shot) => (
              <div className="detail-gallery-item" key={shot.src}>
                <img src={shot.src} alt={shot.caption} loading="lazy" />
                <div className="detail-gallery-caption">{shot.caption}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.tools?.length > 0 && (
        <section className="detail-section">
          <div className="detail-section-num">Tools</div>
          <div className="detail-tools">
            {project.tools.map((t) => <span className="pill" key={t}>{t}</span>)}
          </div>
        </section>
      )}

      <section>
        <div className="detail-complete">
          <div className="detail-complete-mark">QUEST COMPLETE ✓</div>
          <div className="detail-complete-flow">{project.flow.join('  →  ')}</div>
          <div style={{ marginTop: 28 }}>
            <Link to="/#quests" className="btn">View More Quests →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
