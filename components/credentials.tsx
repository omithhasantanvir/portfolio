import Image from 'next/image';
import { BadgeCheck, GraduationCap } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { certifications, education } from '@/lib/data';

/** Education and credentials — the degree leads, the CGPA stays quiet. */
export function Credentials() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">06 / Education</p>
            <h2>Education &amp; credentials</h2>
          </div>
        </Reveal>

        <div className="credentials">
          <Reveal className="credentials__main">
            <article className="degree">
              <p className="degree__icon" aria-hidden="true">
                <GraduationCap size={18} />
              </p>
              <h3>{education.degree}</h3>
              <p className="degree__institution">{education.institution}</p>
              <p className="degree__note">CGPA {education.cgpa}</p>
            </article>

            <ul className="certs">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <BadgeCheck size={16} aria-hidden="true" />
                  <span className="certs__title">{cert.title}</span>
                  <span className="certs__detail">{cert.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="credentials__media" delay={80}>
            <div className="gallery">
              <figure>
                <Image
                  src="/images/omith-hasan-graduation.jpg"
                  alt="Omith Hasan at his graduation ceremony"
                  width={960}
                  height={1280}
                  sizes="(max-width: 700px) 45vw, 240px"
                />
                <figcaption>Graduation</figcaption>
              </figure>
              <figure>
                <Image
                  src="/images/omith-hasan-iubat.jpg"
                  alt="Omith Hasan outside the IUBAT campus in Dhaka"
                  width={868}
                  height={1085}
                  sizes="(max-width: 700px) 45vw, 240px"
                />
                <figcaption>IUBAT campus</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
