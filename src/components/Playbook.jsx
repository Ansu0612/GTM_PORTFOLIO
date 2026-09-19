import { playbookTopics } from '../data/social.js'

const DEFAULT_OPEN = 'Why fit isn\'t the same as intent'

export default function Playbook() {
  return (
    <section id="playbook">
      <span className="eyebrow">📖 GTM Playbook</span>
      <h2 className="section-title">How I think about GTM</h2>

      <div className="playbook-list">
        {playbookTopics.map((topic) => (
          <details className="playbook-item" key={topic.title} open={topic.title === DEFAULT_OPEN}>
            <summary>{topic.title}</summary>
            <p className="playbook-body">{topic.body}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
