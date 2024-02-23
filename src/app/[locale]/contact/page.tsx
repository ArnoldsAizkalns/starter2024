import { useTranslations } from 'next-intl'
import PageLayout from '@/components/PageLayout'
import ContactForm from '@/components/ContactForm'
import CompanyInfo from '@/components/CompanyInfo'

export default function ContactPage() {
  const t = useTranslations('ContactPage')

  return (
    <PageLayout>
      <CompanyInfo />
      <ContactForm />
    </PageLayout>
  )
}
