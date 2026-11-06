import { faqAnswerText, faqItems } from '../lib/faqContent.js'

const siteUrl = 'https://www.ecobin.eco/'
const previewImage = 'https://www.ecobin.eco/ecobin_hero.svg'
const description =
  'EcoBin is a Ghana-focused household waste collection service. Request pickups, monitor bins, and learn how to sort and recycle with the EcoBin app.'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: siteUrl,
      name: 'EcoBin — Waste management, made effortless',
      description,
      primaryImageOfPage: previewImage,
      image: previewImage,
    },
    {
      '@type': 'Organization',
      name: 'EcoBin',
      url: siteUrl,
      image: previewImage,
      logo: 'https://www.ecobin.eco/logo.svg',
      description,
      areaServed: {
        '@type': 'Country',
        name: 'Ghana',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faqAnswerText(item),
        },
      })),
    },
  ],
}

export default function HomeJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
