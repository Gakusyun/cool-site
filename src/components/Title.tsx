import type { ComponentChildren } from 'preact'

export function Title({ children }: { children: ComponentChildren }) {
  return (
    <h1 className="mb-4 text-[28px] font-semibold text-neutral-900 max-[600px]:text-2xl">
      {children}
    </h1>
  )
}