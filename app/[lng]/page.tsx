import { useTranslation } from '../lib/i18n/index'
import Link from 'next/link';

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'common')
  return (
    <>
      <div>{t('title')}</div>
      <div>{t('main.text')}</div>
      <div style={{ 'display': 'flex', 'flexDirection': "column", 'gap': '10px' }}>
        <Link href='/en' >en</Link>
        <Link href='/it' >it</Link>
        <Link href='/' >/</Link>
      </div>
    </>
  );
}