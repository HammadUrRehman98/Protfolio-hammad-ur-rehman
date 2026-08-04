import { Contact } from '@/components/Contact';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Nav } from '@/components/Nav';
import { Path } from '@/components/Path';
import { TechStack } from '@/components/TechStack';
import { Work } from '@/components/Work';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <TechStack />
        <Path />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
