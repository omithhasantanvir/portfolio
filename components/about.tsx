import Image from 'next/image';

import { Reveal } from '@/components/reveal';
import { site } from '@/lib/site';

const facts = [
  { label: 'Role', value: site.role },
  { label: 'Location', value: site.location },
  { label: 'Focus', value: site.disciplines.join(' · ') },
  { label: 'Availability', value: site.availability },
];

/** About: where the work sits, and how the author thinks about it. */
export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">01 / About</p>
            <h2>Engineering reliable systems behind the scenes.</h2>
          </div>
        </Reveal>

        <div className="about">
          <Reveal className="about__copy">
            <p className="lede">
              My work sits at the intersection of networking, infrastructure, cybersecurity, systems
              administration and broadcast technology.
            </p>
            <p>
              Infrastructure is invisible when it is done well: traffic moves, services answer,
              broadcasts stay on air. Most of the work is practical problem solving — tracing why
              something behaves unexpectedly, removing the single points of failure around it, and
              making the next failure easier to see and diagnose.
            </p>
            <p>
              In practice that means configuring and troubleshooting networks, controlling and
              monitoring what is exposed, administering servers and services, and automating the
              repetitive parts so operations stay consistent. Reliability is rarely a feature added
              at the end; it is a consequence of how a system is built and watched.
            </p>

            <dl className="facts">
              {facts.map((fact) => (
                <div className="facts__item" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="about__media" delay={80}>
            <figure className="photo">
              <div className="photo__frame">
                <Image
                  src="/images/omith-hasan-portrait.jpg"
                  alt="Portrait of Omith Hasan"
                  width={1120}
                  height={1288}
                  sizes="(max-width: 980px) 100vw, 440px"
                  priority
                />
              </div>
              <figcaption className="photo__caption">
                <span>{site.name}</span>
                <span>{site.location}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
