import { useEffect, useState } from 'preact/hooks'

const RIPPLES = 600
let rippleId = 0

type Ripple = { id: number; x: number; y: number }

export function Ripples() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      const id = rippleId++
      setRipples((current) => [...current, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.id !== id))
      }, RIPPLES)
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="pointer-events-none fixed size-2 rounded-full bg-blue-600/40 animate-ripple"
          style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
        />
      ))}
    </>
  )
}