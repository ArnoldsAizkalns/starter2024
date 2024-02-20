import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <div>
        <h1>{t('title')}</h1>
      </div>
    </main>
  );
}
