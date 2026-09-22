// Full-body avatar, rendered from a real image asset (background removed).
// Since this is a single static image rather than a sprite sheet, "walking"
// and "waving" are simulated with CSS: a one-time walk-in entrance, a
// continuous idle float, and a periodic greeting tilt/bounce.
export default function Character({ className = '', glow = 'pink', size = 220 }) {
  const glowColor = { pink: '#ff3d81', blue: '#3ddcff', purple: '#8b5cf6', green: '#4ade80' }[glow] || '#ff3d81'

  return (
    <img
      src="/images/character-fullbody.png"
      alt="Pixel-art avatar of Ansu Priya, waving hello"
      className={`character-avatar ${className}`}
      style={{ width: size, height: 'auto', '--character-glow': glowColor }}
      loading="eager"
    />
  )
}
