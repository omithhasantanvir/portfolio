import Image from 'next/image';
import { Award, BookOpen, Clock, ShieldCheck } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { site } from '@/lib/site';

const stats = [
  {
    icon: ShieldCheck,
    value: '5 Badges',
    label: 'Verified Credentials',
    detail: 'Cisco CCNA & Red Hat RHCSA',
  },
  {
    icon: Award,
    value: '4 Disciplines',
    label: 'Core Focus',
    detail: 'Networking · Security · Systems · Broadcast',
  },
  {
    icon: BookOpen,
    value: 'B.Sc. Eng.',
    label: 'Computer Engineering',
    detail: 'IUBAT, Dhaka',
  },
  {
    icon: Clock,
    value: 'Always-On',
    label: 'Broadcast IT',
    detail: 'High Availability Systems',
  },
];

const facts = [
  { label: 'Role', value: site.role },
  { label: 'Location', value: site.location },
  { label: 'Availability', value: site.availability },
  { label: 'Specialization', value: site.disciplines.join(' · ') },
];

/** About: engineering mindset, core pillars and background. */
export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">01 / About Me</p>
            <h2>Engineering reliable systems behind the scenes.</h2>
            <p className="section-head__note">
              My work sits at the intersection of network engineering, system administration, cybersecurity and broadcast IT operations.
            </p>
          </div>
        </Reveal>

        <div className="about-stats-grid">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal delay={idx * 50} key={item.label}>
                <div className="stat-card">
                  <div className="stat-card__icon">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className="stat-card__body">
                    <div className="stat-card__value">{item.value}</div>
                    <div className="stat-card__label">{item.label}</div>
                    <div className="stat-card__detail">{item.detail}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="about">
          <Reveal className="about__copy">
            <p className="lede">
              Infrastructure is invisible when it is done well: traffic moves predictably, services answer immediately, and critical broadcasts stay on air.
            </p>
            <p>
              Most of my daily work is practical problem solving — diagnosing why a system behaves unexpectedly, isolating single points of failure, and introducing monitoring so the next issue is caught before it impacts operations.
            </p>
            <p>
              From routing protocols and firewall inspection to Linux server hardening and always-on broadcast IT systems, I build infrastructure designed to withstand real-world demands.
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
                  src="/images/omith-hasan.jpg"
                  alt="Omith Hasan — IT & Network Engineer"
                  width={960}
                  height={1100}
                  sizes="(max-width: 980px) 100vw, 440px"
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
