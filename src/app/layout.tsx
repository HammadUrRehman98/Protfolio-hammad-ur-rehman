import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Newsreader } from 'next/font/google';
import { site } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import './globals.css';

/*
 * next/font self-hosts these at build time: no request to fonts.googleapis.com,
 * no render-blocking stylesheet, no layout shift (metrics are injected as a
 * fallback face). Each exposes a CSS variable consumed by globals.css.
 */
/*
 * Two serifs, no sans, no mono. The pairing is what makes the page read as
 * set rather than assembled.
 *
 * Instrument Serif: high-contrast display face. One weight only, which is the
 * point: at nameplate sizes the drawing does the work, not the weight.
 * Newsreader: text face for everything else. Only the `wght` axis is loaded;
 * the optional `opsz` axis roughly doubles the file for no visible gain here.
 */
const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--display',
  display: 'swap',
});

const body = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--body',
  display: 'swap',
});

const title = `${site.name} · ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: title,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    firstName: site.firstName,
    lastName: site.lastName,
    username: site.name,
    gender: 'unspecified',
    title,
    description: site.description,
    url: site.url,
    siteName: title,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
    ...(site.twitterHandle ? { creator: site.twitterHandle } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(site.googleSiteVerification
    ? { verification: { google: site.googleSiteVerification } }
    : {}),
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#FAF8F3',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd />
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
