import { BirthdayEgg } from './BirthdayEgg.tsx'
import { Greeting } from './components/Greeting.tsx'
import { Title } from './components/Title.tsx'
import { Paragraph } from './components/Paragraph.tsx'
import { TextLink } from './components/TextLink.tsx'
import { Ripples } from './components/Ripples.tsx'

function timeGreeting(date = new Date()) {
  const hour = date.getHours()
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export function App() {
  return (
    <>
      <BirthdayEgg
        normal={{
          title: (
            <>
              Hi, I'm <span className="text-[#66CCFF]">Gakusyun</span>
            </>
          ),
          paragraph: 'Welcome to my corner of the internet.',
          linkLabel: 'Visit my blog →',
          href: 'https://www.gxj62.cn',
        }}
        render={({ title, paragraph, linkLabel, href }) => (
          <>
            <Greeting>{timeGreeting()}.</Greeting>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
            <Paragraph>
              <TextLink href={href}>{linkLabel}</TextLink>
            </Paragraph>
          </>
        )}
      />

      <Ripples />
    </>
  )
}