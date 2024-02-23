'use client'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../utils/send-emails'

type Props = {
  locale: string
}
export type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const t = useTranslations('ContactForm')
  function onSubmit(data: FormData) {
    sendEmail(data)
  }

  return (
    <div className="container px-4 mx-auto py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto"
      >
        <div className="mb-2">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            {t('name_label')}
          </label>
          <input
            type="text"
            placeholder={t('name_placeholder')}
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('name', { required: true })}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            {t('email_label')}
          </label>
          <input
            type="email"
            placeholder={t('email_placeholder')}
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="phone"
            className="mb-3 block text-base font-medium text-black"
          >
            {t('phone_label')}
          </label>
          <input
            type="tel"
            placeholder={t('phone_placeholder')}
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('phone', { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black"
          >
            {t('message_label')}
          </label>
          <textarea
            rows={4}
            placeholder={t('message_placeholder')}
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-slate-800 py-3 px-8 text-base font-semibold text-white outline-none">
            {t('submit_button')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
