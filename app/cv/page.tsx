import type { Metadata } from 'next';

import { PrintButton } from '@/components/print-button';
import { certifications, education, experience, expertise } from '@/lib/data';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Curriculum vitae of Omith Hasan — IT & Network Engineer working across networking, cybersecurity, system administration and broadcast IT.',
  alternates: { canonical: '/cv' },
};

/** Print-friendly CV built from the same data as the portfolio. */
export default function CvPage() {
  return (
    <main className="cv-page" id="main" tabIndex={-1}>
      <div className="container cv">
        <header className="cv__head">
          <div>
            <p className="label">{site.role}</p>
            <h1>{site.name}</h1>
            <p className="cv__contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span aria-hidden="true">·</span>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              <span aria-hidden="true">·</span>
              <span>{site.location}</span>
            </p>
          </div>
          <div className="cv__actions no-print">
            <PrintButton />
            <a className="btn btn--ghost btn--sm" href="/">
              Back to portfolio
            </a>
          </div>
        </header>

        <section className="cv__section">
          <h2>Profile</h2>
          <p className="cv__lead">{site.positioning}</p>
          <p>{site.intro}</p>
        </section>

        <section className="cv__section">
          <h2>Experience</h2>
          {experience.map((job) => (
            <article className="cv__entry" key={job.company}>
              <div className="cv__entry-head">
                <h3>{job.role}</h3>
                <p className="label label--muted">{job.period}</p>
              </div>
              <p className="cv__company">{job.company}</p>
              <p>{job.description}</p>
              <p className="cv__areas">{job.areas.join(' · ')}</p>
            </article>
          ))}
        </section>

        <section className="cv__section">
          <h2>Technical expertise</h2>
          <dl className="cv__skills">
            {expertise.map((group) => (
              <div key={group.id}>
                <dt>{group.title}</dt>
                <dd>{group.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="cv__section">
          <h2>Education</h2>
          <article className="cv__entry">
            <div className="cv__entry-head">
              <h3>{education.degree}</h3>
            </div>
            <p className="cv__company">{education.institution}</p>
            <p className="cv__areas">CGPA {education.cgpa}</p>
          </article>
        </section>

        <section className="cv__section">
          <h2>Certifications &amp; training</h2>
          <ul className="cv__certs">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <strong>{cert.title}</strong>
                <span>{cert.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className="cv__note no-print">
          Use your browser&apos;s print dialog and choose <em>Save as PDF</em> to keep a copy of this
          CV.
        </p>
      </div>
    </main>
  );
}
