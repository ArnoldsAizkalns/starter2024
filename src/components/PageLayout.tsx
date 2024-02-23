import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title: ReactNode
}

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('')

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
