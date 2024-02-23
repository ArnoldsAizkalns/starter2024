import { useTranslations } from 'next-intl'
import PageLayout from '@/components/PageLayout'
import ExternalLink from '@/components/ExternalLink'
import Slider from '@/components/Slider'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  const t = useTranslations('ContactPage')

  return (
    <PageLayout title={t('title')}>
      <ContactForm />
    </PageLayout>
  )
}
