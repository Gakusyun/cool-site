import type { ComponentChildren } from 'preact'

type PageProps = {
  overlay?: ComponentChildren
  children: ComponentChildren
}

export function Page({ overlay, children }: PageProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-5 font-sans">
      {overlay}
      {children}
    </div>
  )
}