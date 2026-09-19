export default function About() {
  return (
    <section id="about">
      <span className="eyebrow">Player Profile</span>
      <h2 className="section-title">The Path Here</h2>

      <div className="about-grid">
        <p className="about-lede">
          I'm a GTM Engineer with 3+ years of experience across sales, growth, data, revenue and research.
        </p>

        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.75 }}>
            My strength is connecting the pieces that usually sit in different teams.
          </p>
          <div className="about-lines">
            <p className="about-line"><strong>Sales</strong> taught me how customers think.</p>
            <p className="about-line"><strong>Revenue work</strong> taught me what the business measures.</p>
            <p className="about-line"><strong>Data</strong> taught me how to find patterns.</p>
            <p className="about-line"><strong>Research</strong> taught me how to find signals.</p>
            <p className="about-line"><strong>GTM Engineering</strong> lets me turn those skills into systems.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
