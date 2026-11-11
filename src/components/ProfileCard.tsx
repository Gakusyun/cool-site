import { useRef } from 'preact/hooks'
import type { ComponentChildren } from 'preact'
import { useCursorFollow } from '../hooks/useCursorFollow.ts'

export function ProfileCard({ children }: { children: ComponentChildren }) {
  const cardRef = useRef<HTMLElement>(null)
  useCursorFollow(cardRef)

  return (
    <main className="relative z-10 w-full max-w-[480px]">
      <section
        ref={cardRef}
        className="rounded-xl bg-white p-12 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out will-change-transform max-[600px]:p-8 max-[600px]:px-6"
      >
        {children}
      </section>
    </main>
  )
}