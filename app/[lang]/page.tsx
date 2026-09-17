import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMeta } from '@/lib/metadata'
import { getDictionary, locales, isLocale, type Locale } from '@/content/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/components/pages/Home'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  if (!isLocale(params.lang)) return {}
  const d = getDictionary(params.lang)
  return pageMeta({
    lang: params.lang,
    title: d.meta.homeTitle,
    description: d.meta.homeDescription,
  })
}

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound()
  const lang: Locale = params.lang
  return (
    <>
      <Header lang={lang} />
      <main id="inhalt">
        <Home lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
