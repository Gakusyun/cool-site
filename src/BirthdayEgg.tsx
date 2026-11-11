import { useState } from 'preact/hooks'
import type { ComponentChildren } from 'preact'
import { Page } from './components/Page.tsx'
import { ProfileCard } from './components/ProfileCard.tsx'
import { Footer } from './components/Footer.tsx'
import { BirthdayButton } from './components/BirthdayButton.tsx'
import { BloomOverlay } from './components/BloomOverlay.tsx'

const BIRTHDAY_MONTH = 6 // July
const BIRTHDAY_DAY = 12
const BIRTHDAY_LINK = 'https://space.bilibili.com/36081646'

type Phase = 'idle' | 'opening' | 'birthday' | 'closing'

type CardView = {
  title: ComponentChildren
  paragraph: string
  linkLabel: string
  href: string
}

type BirthdayEggProps = {
  normal: CardView
  render: (view: CardView) => ComponentChildren
}

const BIRTHDAY: CardView = {
  title: (
    <>
      Happy Birthday to <span className="text-[#66CCFF]">Luo Tianyi</span>
    </>
  ),
  paragraph: 'Step on Your Heart',
  linkLabel: 'See Tianyi in bilibili →',
  href: BIRTHDAY_LINK,
}

function isBirthday(date = new Date()) {
  return date.getMonth() === BIRTHDAY_MONTH && date.getDate() === BIRTHDAY_DAY
}

export function BirthdayEgg({ normal, render }: BirthdayEggProps) {
  const [birthday] = useState(isBirthday)
  const [phase, setPhase] = useState<Phase>('idle')
  const [origin, setOrigin] = useState({ x: 0, y: 0 })
  const celebrating = phase === 'opening' || phase === 'birthday'

  const toggle = (e: MouseEvent) => {
    if (phase === 'opening' || phase === 'closing') return

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
    setPhase(phase === 'idle' ? 'opening' : 'closing')
  }

  return (
    <Page
      overlay={
        phase !== 'idle' && (
          <BloomOverlay
            closing={phase === 'closing'}
            x={origin.x}
            y={origin.y}
            onDone={() => setPhase(phase === 'opening' ? 'birthday' : 'idle')}
          />
        )
      }
    >
      <ProfileCard>
        <div className="relative">
          <div
            inert={celebrating}
            className={`transition-opacity duration-300 ${
              celebrating ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            {render(normal)}
          </div>
          <div
            inert={!celebrating}
            aria-hidden={!celebrating}
            className={`absolute inset-0 transition-opacity duration-300 ${
              celebrating ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {render(BIRTHDAY)}
          </div>
        </div>
      </ProfileCard>
      <Footer active={celebrating} />
      {birthday && <BirthdayButton active={phase !== 'idle'} onClick={toggle} />}
    </Page>
  )
}