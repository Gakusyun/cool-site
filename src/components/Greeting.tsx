import type { ComponentChildren } from 'preact'

export function Greeting({ children }: { children: ComponentChildren }) {
  return (
    <p className="mb-4 text-[13px] uppercase tracking-[1px] text-neutral-400">{children}</p>
  )
}