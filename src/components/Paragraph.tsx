import type { ComponentChildren } from 'preact'

export function Paragraph({ children }: { children: ComponentChildren }) {
  return <p className="mb-3 leading-relaxed text-neutral-600">{children}</p>
}