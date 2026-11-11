type BirthdayButtonProps = {
  active: boolean
  onClick: (e: MouseEvent) => void
}

export function BirthdayButton({ active, onClick }: BirthdayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="A little surprise"
      className={`fixed top-6 right-6 z-20 rounded-full border px-4 py-1.5 text-[13px] font-medium shadow-sm transition-colors ${
        active
          ? 'border-neutral-200 bg-neutral-50 text-neutral-500'
          : 'border-transparent bg-[#66CCFF] text-neutral-900'
      }`}
    >
      Tianyi
    </button>
  )
}