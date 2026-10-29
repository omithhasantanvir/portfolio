import Image from 'next/image';
import { Award, CheckCircle2, Cpu, Globe, Server, Shield } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { site } from '@/lib/site';

const facts = [
  { label: 'Role', value: 'System Administration' },
  { label: 'Location', value: site.location },
  { label: 'Education', value: 'B.Sc. Computer Engineering (IUBAT)' },
  { label: 'Availability', value: site.availability },
];

const pillars = [
  {
    icon: Globe,
    title: 'Network Engineering',
    desc: 'Routing, switching, VLAN segmentation, and OSPF/BGP routing to ensure predictable low-latency traffic.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Hardening',
    desc: 'Proactive defense, access control lists, firewalls, SELinux enforcement, and vulnerability mitigation.',
  },
  {
    icon: Server,
    title: 'System Administration',
    desc: 'Red Hat Enterprise Linux and Windows Server environments, Active Directory, storage and identity management.',
  },
  {
    icon: Cpu,
    title: 'Mission-Critical Reliability',
    desc: 'Zero-downtime broadcast systems, proactive monitoring, automated alerting, and rapid incident recovery.',
  },
];

/** About: engineering mindset and architectural pillars. */
export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="label">01 / Engineering Philosophy</p>
            <h2>Reliability is built into the architecture.</h2>
            <p className="section-head__note">
              Infrastructure is invisible when done well: traffic moves reliably, services respond instantly, and broadcasts stay on air.
            </p>
          </div>
        </Reveal>

        <div className="about-bento">
          {/* Narrative Glass Card */}
          <Reveal className="about-bento__card about-bento__narrative">
            <p className="lede">
              My engineering approach combines structured networking, rigorous cybersecurity hygiene, and practical system administration.
            </p>
            <p>
              Whether configuring Cisco enterprise networks, tuning Linux servers with Red Hat best practices, or keeping live broadcast IT infrastructure operational around the clock, I focus on eliminating single points of failure.
            </p>
            <p>
              I believe in clean documentation, proactive monitoring, and automated operational scripts so repetitive tasks disappear and systems remain auditable.
            </p>

            <dl className="facts-grid">
              {facts.map((fact) => (
                <div className="facts-card" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Pillars Glass Card */}
          <div className="about-bento__pillars">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal delay={idx * 60} key={pillar.title}>
                  <div className="pillar-card">
                    <div className="pillar-card__icon">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="pillar-card__title">{pillar.title}</h3>
                      <p className="pillar-card__desc">{pillar.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
