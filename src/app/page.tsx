import { Contact } from '@/components/Contact';
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
