import { useEffect } from 'preact/hooks'

export function useCursorFollow(ref: { current: HTMLElement | null }) {
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      el.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [ref])
}