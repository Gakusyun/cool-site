type FooterProps = {
  active: boolean
}

export function Footer({ active }: FooterProps) {
  return (
    <footer
      className={`relative z-10 mt-10 text-[13px] transition-colors duration-300 ${
        active ? 'text-neutral-50' : 'text-neutral-400'
      }`}
    >
      &copy; 2026 Gakusyun. All Rights Reserved.
    </footer>
  )
}