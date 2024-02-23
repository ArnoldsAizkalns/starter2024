import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()
  const copyrightDate = `2023${currentYear > 2023 ? `-${currentYear}` : ''}`

  const navigation = [
    { title: t('home'), path: '/' },
    { title: t('about'), path: '/about' },
    { title: t('contact'), path: '/contact' },
    { title: t('privacyPolicy'), path: '/privacy' },
    { title: t('termsAndConditions'), path: '/terms' },
  ]

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="w-full md:mx-0 gap-6 border-t border-neutral-400 text-sm">
        <div className="container px-4 md:px-0  mx-auto">
          <ul className="flex flex-col py-6 space-y-2 md:space-y-2 md:text-gray-600 md:font-medium">
            {navigation.map((item, idx) => (
              <li key={idx} className="duration-150 hover:text-gray-900">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-400 py-6 text-sm">
        <div className="mx-4">
          <div className="flex-col mx-auto flex justify-center container">
            <p>
              &copy; {copyrightDate} {t('allRightsReserved')}
            </p>
            <hr className="mx-4 hidden h-4 w-[1px] md:inline-block" />
            <p>{t('designedIn')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
