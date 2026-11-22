import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="contact">
          <div className="wrap">
            <p className="dept">
              <span className="dept-no">404</span>
              <span className="dept-name">Page not found</span>
            </p>
            <h1 className="contact-title">
              This page <em>doesn&rsquo;t exist.</em>
            </h1>
            <p>The link is broken, or the page has moved.</p>
            <a className="tlink" href="/">
              Back to the portfolio
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
