import Image from 'next/image';
import { Award, BadgeCheck, BookOpen, ExternalLink, GraduationCap, School } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { certifications, credlyBadges, educationJourney } from '@/lib/data';
import { site } from '@/lib/site';

const levelIcons = {
  School: School,
  College: BookOpen,
  University: GraduationCap,
} as const;

/** Education journey as a vertical timeline plus verified Credly badges. */
export function Credentials() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">02 / Verified Credentials</p>
            <h2>Certifications &amp; Digital Badges</h2>
            <p className="section-head__note">
              5 official credentials earned through Cisco Networking Academy &amp; Red Hat Academy, verified on Credly.
            </p>
          </div>
        </Reveal>

        {/* Verified Credly Digital Badges Showcase */}
        <div className="credly-section">
          <Reveal>
            <div className="credly-section__header">
              <div className="credly-section__header-left">
                <span className="label">Credly Verified</span>
                <h3 className="credly-section__title">Official Digital Credentials</h3>
                <p className="credly-section__desc">
                  3 Cisco CCNA modules and 2 Red Hat RHCSA modules, with direct public verification links.
                </p>
              </div>
              <a
                className="btn btn--outline btn--sm"
                href={site.socials.credly}
                target="_blank"
                rel="noreferrer"
              >
                <Award size={14} aria-hidden="true" />
                View Credly Profile
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <div className="badges-grid">
            {credlyBadges.map((badge, index) => (
              <Reveal delay={index * 50} key={badge.id}>
                <article className="badge-card">
                  <div className="badge-card__top">
                    <div className="badge-card__emblem">
                      <Image
                        src={badge.image}
                        alt={`${badge.title} badge`}
                        width={48}
                        height={48}
                        className="badge-card__img"
                      />
                    </div>
                    <span className={`badge-card__track badge-card__track--${badge.track.toLowerCase()}`}>
                      {badge.track}
                    </span>
                  </div>

                  <div className="badge-card__content">
                    <h4 className="badge-card__title">{badge.title}</h4>
                    <p className="badge-card__issuer">{badge.issuer}</p>
                    <time className="badge-card__date">{badge.issueDate}</time>
                  </div>

                  <div className="badge-card__footer">
                    <a
                      className="badge-card__verify"
                      href={badge.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BadgeCheck size={12} aria-hidden="true" />
                      Verify
                      <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="section-head" style={{ marginTop: 'clamp(28px, 4vw, 44px)' }}>
            <p className="label">Academic Background</p>
            <h2>Education journey</h2>
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

                      {entry.thesis && (
                        <div className="edu__thesis">
                          <div className="edu__thesis-header">
                            <span className="edu__thesis-badge">B.Sc. Thesis</span>
                            <h4 className="edu__thesis-title">{entry.thesis.title}</h4>
                          </div>
                          <div className="edu__thesis-body">
                            <p className="edu__thesis-label">Abstract</p>
                            <p className="edu__thesis-abstract">{entry.thesis.abstract}</p>
                          </div>
                          <div className="edu__thesis-footer">
                            <ul className="chips chips--tech" aria-label="Thesis technologies">
                              {entry.thesis.technologies.map((tech) => (
                                <li key={tech}>{tech}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
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
                  <div className="certs__header">
                    <BadgeCheck size={16} aria-hidden="true" />
                    {cert.verified && <span className="certs__verified-tag">Credly</span>}
                  </div>
                  <span className="certs__title">{cert.title}</span>
                  <span className="certs__detail">{cert.detail}</span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="certs__link"
                    >
                      View on Credly <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <p className="credentials__note">
              <Award size={14} aria-hidden="true" />
              Technical certifications sit alongside the degree — verified Cisco CCNA modules,
              Red Hat RHCSA modules, and CEHv12 cybersecurity training.
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
                    sizes="(max-width: 560px) 100vw, (max-width: 980px) 45vw, 330px"
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
                    sizes="(max-width: 560px) 100vw, (max-width: 980px) 45vw, 330px"
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
