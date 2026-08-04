import type { Metadata } from 'next';
import { Faq } from '@/components/Faq';
import { FaqJsonLd } from '@/components/FaqJsonLd';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Frequently asked questions',
  description: site.faqDescription,
  alternates: { canonical: '/faq/' },
  openGraph: {
    type: 'article',
    title: `Frequently asked questions · ${site.name}`,
    description: site.faqDescription,
    url: `${site.url}/faq/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Frequently asked questions · ${site.name}`,
    description: site.faqDescription,
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <Nav />
      <main id="main">
        <Faq />
      </main>
      <Footer />
    </>
  );
}
