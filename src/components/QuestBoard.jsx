import { Link } from 'react-router-dom'
import { projects, sideQuests, analyticsQuests } from '../data/projects.js'

function QuestCard({ quest }) {
  return (
    <Link to={`/projects/${quest.id}`} className="quest-card" style={{ '--card-glow': `var(--${quest.accent})` }}>
      {quest.coverImage && (
        <div className="quest-card-cover">
          <img src={quest.coverImage} alt={`${quest.title} preview`} loading="lazy" />
        </div>
      )}
      <span className="quest-card-badge">{quest.questNumber}</span>
      <span className="quest-card-tag">{quest.subtitle}</span>
      <h3 className="quest-card-title">{quest.title}</h3>
      <p className="quest-card-subtitle">{quest.tagline}</p>

      <div className="quest-card-visual">
        {quest.visual.steps.map((s, i) => (
          <span key={s}>
            <span className={i === quest.visual.steps.length - 1 || /^\d/.test(s) ? 'num' : ''}>{s}</span>
            {i < quest.visual.steps.length - 1 && <span> → </span>}
          </span>
        ))}
      </div>

      <p className="quest-card-desc">{quest.description}</p>

      <div className="quest-card-tags">
        {quest.tags.slice(0, 4).map((t) => <span className="pill" key={t}>{t}</span>)}
      </div>

      <span className="quest-card-cta">Play Quest →</span>
    </Link>
  )
}

export default function QuestBoard() {
  return (
    <section id="quests">
      <span className="eyebrow">🎮 Quest Board</span>
      <h2 className="section-title">Real companies. Real GTM problems.</h2>
      <p className="section-sub">Systems built to solve them.</p>

      <div className="quest-board-grid">
        {projects.map((p) => <QuestCard quest={p} key={p.id} />)}
      </div>

      <div className="quest-board-grid" style={{ marginTop: 22 }}>
        {sideQuests.map((p) => <QuestCard quest={p} key={p.id} />)}
        {analyticsQuests.map((p) => <QuestCard quest={p} key={p.id} />)}
      </div>
    </section>
  )
}
