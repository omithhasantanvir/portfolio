import type { Metadata } from 'next';

import { PrintButton } from '@/components/print-button';
import { credlyBadges, educationJourney, experience, expertise } from '@/lib/data';
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
            <a className="btn btn--primary btn--sm" href={site.cv} download="Omith-Hasan-Resume.pdf">
              Download PDF resume
            </a>
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
          {educationJourney.map((entry) => (
            <article className="cv__entry" key={entry.id}>
              <div className="cv__entry-head">
                <h3>
                  {entry.qualification} — {entry.institution}
                </h3>
                <p className="label label--muted">{entry.period}</p>
              </div>
              <p className="cv__company">
                {entry.level} · {entry.field}
                {entry.note ? ` · ${entry.note}` : ''}
              </p>
              {entry.result && <p className="cv__areas">{entry.result}</p>}
              {entry.thesis && (
                <p className="cv__areas" style={{ marginTop: '0.35rem' }}>
                  <strong>Thesis:</strong> {entry.thesis.title} (IoT, ESP8266, Wireless Sensors, Telegram API)
                </p>
              )}
            </article>
          ))}
        </section>

        <section className="cv__section">
          <div className="cv__section-head">
            <h2>Certifications &amp; credentials</h2>
            <a
              className="cv__ext-link no-print"
              href={site.socials.credly}
              target="_blank"
              rel="noreferrer"
            >
              Verify all on Credly ↗
            </a>
          </div>
          <ul className="cv__certs">
            {credlyBadges.map((badge) => (
              <li key={badge.id}>
                <div className="cv__cert-info">
                  <strong>{badge.title}</strong>
                  <p className="cv__cert-issuer">
                    {badge.issuer} · Issued {badge.issueDate}
                  </p>
                </div>
                <a
                  className="cv__cert-verify no-print"
                  href={badge.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify ↗
                </a>
              </li>
            ))}
            <li>
              <div className="cv__cert-info">
                <strong>Certified Ethical Hacker (CEHv12)</strong>
                <p className="cv__cert-issuer">EC-Council Course Completed</p>
              </div>
              <span className="cv__cert-status">Training</span>
            </li>
          </ul>
        </section>

        <p className="cv__note no-print">
          This page mirrors the downloadable resume at{' '}
          <a href={site.cv} download="Omith-Hasan-Resume.pdf">
            {site.cv}
          </a>
          . Use your browser&apos;s print dialog and choose <em>Save as PDF</em> if you need a
          copy of this page instead.
        </p>
      </div>
    </main>
  );
}
