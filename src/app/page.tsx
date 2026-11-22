import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { JsonLd } from '@/components/JsonLd';
import { Nav } from '@/components/Nav';
import { Path } from '@/components/Path';
import { TechStack } from '@/components/TechStack';
import { Testimonials } from '@/components/Testimonials';
import { Work } from '@/components/Work';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <TechStack />
        <Path />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
