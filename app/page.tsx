import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Credentials } from '@/components/credentials';
import { Experience } from '@/components/experience';
import { Expertise } from '@/components/expertise';
import { FocusAreas } from '@/components/focus-areas';
import { Hero } from '@/components/hero';
import { Infrastructure } from '@/components/infrastructure';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Infrastructure />
      <Credentials />
      <FocusAreas />
      <Contact />
    </main>
  );
}
