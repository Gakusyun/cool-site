type BloomOverlayProps = {
  closing: boolean
  x: number
  y: number
  onDone: () => void
}

export function BloomOverlay({ closing, x, y, onDone }: BloomOverlayProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 bg-[#66CCFF] ${
        closing ? 'animate-bloom-out' : 'animate-bloom-in'
      }`}
      style={{ '--bloom-x': `${x}px`, '--bloom-y': `${y}px` }}
      onAnimationEnd={onDone}
    />
  )
}