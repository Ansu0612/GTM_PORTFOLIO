// Full-body pixel-art character: long black hair, round glasses (frame +
// lens + pupil), an open jacket over a graphic tee, trousers, sneakers with
// a pink accent. Built as mirrored half-rows (segments of [char, count]) so
// row lengths are always correct, then mirrored left/right in code.
// . empty  H hair  S skin  G glasses frame  L lens  P pupil/mouth
// B jacket  C accent  T tee  K trousers
const HALF_ROWS = [
  [['.', 3], ['H', 7]],                                         // r0  crown
  [['.', 2], ['H', 8]],                                         // r1
  [['.', 1], ['H', 9]],                                         // r2
  [['H', 10]],                                                   // r3
  [['H', 10]],                                                   // r4
  [['H', 4], ['S', 6]],                                         // r5  hairline
  [['H', 3], ['S', 7]],                                         // r6
  [['H', 2], ['S', 8]],                                         // r7
  [['H', 2], ['S', 8]],                                         // r8
  [['H', 2], ['S', 8]],                                         // r9  temple
  [['H', 2], ['S', 2], ['G', 6]],                               // r10 glasses top rim
  [['H', 2], ['S', 2], ['G', 1], ['L', 2], ['P', 2], ['G', 1]], // r11 lens + pupil
  [['H', 2], ['S', 2], ['G', 6]],                               // r12 glasses bottom rim
  [['H', 2], ['S', 8]],                                         // r13 cheek
  [['H', 2], ['S', 8]],                                         // r14 nose
  [['H', 2], ['S', 8]],                                         // r15
  [['H', 2], ['S', 6], ['P', 2]],                               // r16 mouth
  [['H', 2], ['S', 8]],                                         // r17 chin
  [['H', 1], ['S', 9]],                                         // r18 jaw
  [['H', 1], ['S', 9]],                                         // r19 chin point
  [['H', 2], ['S', 8]],                                         // r20 neck
  [['H', 2], ['S', 3], ['B', 5]],                               // r21 shoulders begin
  [['H', 2], ['B', 8]],                                         // r22
  [['H', 2], ['B', 7], ['C', 1]],                               // r23 collar accent
  [['H', 1], ['B', 9]],                                         // r24 hair ends
  [['B', 10]],                                                   // r25 jacket
  [['B', 7], ['T', 3]],                                         // r26 open jacket / tee
  [['B', 7], ['T', 3]],                                         // r27
  [['B', 7], ['T', 2], ['C', 1]],                               // r28 tee graphic fleck
  [['B', 7], ['T', 3]],                                         // r29
  [['.', 6], ['K', 3], ['.', 1]],                               // r30 legs begin
  [['.', 6], ['K', 3], ['.', 1]],                               // r31
  [['.', 6], ['K', 3], ['.', 1]],                               // r32
  [['.', 6], ['K', 3], ['.', 1]],                               // r33
  [['.', 6], ['K', 3], ['.', 1]],                               // r34
  [['.', 6], ['K', 3], ['.', 1]],                               // r35
  [['.', 5], ['K', 4], ['.', 1]],                               // r36 ankle
  [['.', 5], ['B', 4], ['.', 1]],                               // r37 shoe
  [['.', 5], ['B', 4], ['.', 1]],                               // r38 shoe
  [['.', 5], ['C', 4], ['.', 1]],                               // r39 sole accent
]

function expand(segments) {
  return segments.map(([ch, n]) => ch.repeat(n)).join('')
}

const GRID = HALF_ROWS.map((segments) => {
  const half = expand(segments)
  const mirrored = [...half].reverse().join('')
  return half + mirrored
})

const PALETTE = {
  H: '#151225',
  S: '#f0c8a0',
  G: '#f4f1e8',
  L: '#274156',
  P: '#0d0c14',
  B: '#20233a',
  C: '#ff3d81',
  T: '#1f5a66',
  K: '#181a28',
}

const COLS = GRID[0].length
const ROWS = GRID.length

export default function Character({ className = '', glow = 'pink', size = 220 }) {
  const glowColor = { pink: '#ff3d81', blue: '#3ddcff', purple: '#8b5cf6', green: '#4ade80' }[glow] || '#ff3d81'
  const height = Math.round(size * (ROWS / COLS))

  return (
    <svg
      className={className}
      width={size}
      height={height}
      viewBox={`0 0 ${COLS} ${ROWS}`}
      role="img"
      aria-label="Pixel-art avatar of Ansu Priya"
      shapeRendering="crispEdges"
    >
      <defs>
        <filter id="charGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="0.4" floodColor={glowColor} floodOpacity="0.55" />
        </filter>
      </defs>
      <g filter="url(#charGlow)">
        {GRID.map((row, y) =>
          [...row].map((cell, x) => {
            if (cell === '.') return null
            return (
              <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={PALETTE[cell]} />
            )
          })
        )}
      </g>
    </svg>
  )
}
