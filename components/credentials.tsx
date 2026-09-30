import Image from 'next/image';
import { Award, BadgeCheck, BookOpen, GraduationCap, School } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { certifications, educationJourney } from '@/lib/data';

const levelIcons = {
  School: School,
  College: BookOpen,
  University: GraduationCap,
} as const;

/** Education journey as a vertical timeline — school → college → university. */
export function Credentials() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">06 / Education</p>
            <h2>Education &amp; credentials</h2>
            <p className="section-head__note">
              My complete academic journey — from school through the engineering degree.
            </p>
          </div>
        </Reveal>

        <ol className="timeline">
          {educationJourney.map((entry, index) => {
            const Icon = levelIcons[entry.level];
            return (
              <li className="timeline__item" key={entry.id}>
                <Reveal delay={index * 70}>
                  <article
                    className={`edu${entry.featured ? ' edu--featured' : ''}`}
                  >
                    <div className="edu__meta">
                      <p className="label label--muted">0{index + 1}</p>
                      <p className="edu__period">{entry.period}</p>
                      <p className="edu__level">
                        <Icon size={13} aria-hidden="true" />
                        {entry.level}
                      </p>
                    </div>
                    <div className="edu__body">
                      <h3>{entry.institution}</h3>
                      <p className="edu__qualification">{entry.qualification}</p>
                      <dl className="edu__facts">
                        <div>
                          <dt>Field</dt>
                          <dd>{entry.field}</dd>
                        </div>
                        {entry.note && (
                          <div>
                            <dt>Board</dt>
                            <dd>{entry.note}</dd>
                          </div>
                        )}
                        {entry.result && (
                          <div>
                            <dt>Result</dt>
                            <dd>{entry.result}</dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <div className="credentials">
          <Reveal className="credentials__main">
            <ul className="certs">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <BadgeCheck size={16} aria-hidden="true" />
                  <span className="certs__title">{cert.title}</span>
                  <span className="certs__detail">{cert.detail}</span>
                </li>
              ))}
            </ul>
            <p className="credentials__note">
              <Award size={14} aria-hidden="true" />
              Technical certifications sit alongside the degree — CCNA, CEHv12 and RHCSA
              courses completed.
            </p>
          </Reveal>

          <Reveal className="credentials__media" delay={80}>
            <div className="gallery" role="list">
              <figure role="listitem">
                <div className="gallery__frame">
                  <Image
                    src="/images/omith-hasan-graduation.jpg"
                    alt="Omith Hasan at his graduation ceremony"
                    width={960}
                    height={1200}
                    sizes="(max-width: 560px) 100vw, (max-width: 980px) 42vw, 260px"
                  />
                </div>
                <figcaption>Graduation</figcaption>
              </figure>
              <figure role="listitem">
                <div className="gallery__frame">
                  <Image
                    src="/images/omith-hasan-iubat.jpg"
                    alt="Omith Hasan outside the IUBAT campus in Dhaka"
                    width={960}
                    height={1200}
                    sizes="(max-width: 560px) 100vw, (max-width: 980px) 42vw, 260px"
                  />
                </div>
                <figcaption>IUBAT campus</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
