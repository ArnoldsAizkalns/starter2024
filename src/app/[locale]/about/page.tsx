import { useTranslations } from 'next-intl'
import PageLayout from '@/components/PageLayout'
import Image from 'next/image'

export default function AboutPage() {
  const t = useTranslations('AboutPage')

  return (
    <PageLayout>
      <div className="container mx-auto flex flex-col items-center justify-center p-4 animate-fadeIn">
        <div className="mb-4">
          <Image
            src="/test.png"
            alt={t('image_alt')}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">{t('heading')}</h1>
        <p className="text-center text-gray-600">{t('description')}</p>
      </div>
    </PageLayout>
  )
}
