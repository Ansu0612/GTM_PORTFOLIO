import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
      <span className="eyebrow" style={{ justifyContent: 'center' }}>404</span>
      <h1 className="section-title" style={{ margin: '0 auto' }}>This quest doesn't exist yet.</h1>
      <p className="section-sub" style={{ margin: '18px auto 0' }}>The level you're looking for hasn't been built.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>Back to Home →</Link>
    </section>
  )
}
