import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

export default function PageLayout({ children }: Props) {
  const t = useTranslations('')

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
