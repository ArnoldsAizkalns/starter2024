'use client'
import Link from 'next/link'
import Image from 'next/image'
import Mobile from './Mobile'
import LocaleSwitcher from '../LocaleSwitcher'
import logo from '../../../public/test.png'
import { useTranslations } from 'next-intl'
export default function Navigation() {
  const t = useTranslations('Navigation')

  const menu = [
    { title: t('home'), path: '/' },
    { title: t('about'), path: '/about' },
    { title: t('contact'), path: '/contact' },
  ]

  return (
    <nav className="sticky bg-white p-4 lg:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="block flex-none md:hidden">
          <Mobile />
        </div>
        <Link href="/" className="hidden md:block">
          <Image alt="" src={logo} width={75} height={75}></Image>
        </Link>
        <div className="flex w-full items-center">
          <div className="flex justify-end gap-4 w-full ">
            {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map(({ title, path }) => (
                  <li key={title}>
                    <Link
                      href={path}
                      className="text-neutral-500  underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            <LocaleSwitcher />
          </div>
        </div>
        <div className="block md:hidden">
          <Image alt="" src={logo} width={75} height={75}></Image>
        </div>
      </div>
    </nav>
  )
}
