import type { ComponentChildren } from 'preact'

type TextLinkProps = {
  href: string
  children: ComponentChildren
}

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <a
      href={href}
      className="border-b border-transparent text-[#66CCFF] transition-colors hover:border-[#66CCFF]"
    >
      {children}
    </a>
  )
}