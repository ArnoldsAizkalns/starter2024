import { useTranslations } from 'next-intl'
import PageLayout from '@/components/PageLayout'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  const t = useTranslations('ContactPage')

  return (
    <PageLayout >
      <ContactForm />
    </PageLayout>
  )
}
