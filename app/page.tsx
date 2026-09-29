'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Download, Github, Linkedin, Mail, Menu, Network, Server, ShieldCheck, Terminal, X } from 'lucide-react';

const skills = [
  { icon: Network, title: 'Networking & Security', items: ['Network configuration & troubleshooting','Firewall & IDS/IPS','Wireshark & traffic analysis','Penetration testing','Bug bounty fundamentals'] },
  { icon: Server, title: 'System Administration', items: ['Windows Server 2016','Linux / RHCSA','Active Directory & GPO','Mail, FTP & Web servers','VMware & Docker'] },
  { icon: Terminal, title: 'Programming & Automation', items: ['Python automation','Bash scripting','PowerShell','DevOps & CI/CD fundamentals','AWS cloud fundamentals'] },
  { icon: ShieldCheck, title: 'Broadcast IT Systems', items: ['VizRT & GV Status','Octopus servers','Broadcast server uptime','IT infrastructure monitoring','Incident recovery'] },
];

const experience = [
  { date: 'Jan 2024 — Present', role: 'Junior Broadcast Engineer', company: 'Independent Television Ltd.', text: 'Managing and troubleshooting broadcast IT systems, supporting server stability and helping maintain reliable broadcast infrastructure.' },
  { date: 'Oct 2023 — Dec 2023', role: 'Assistant Engineer — NOC', company: 'Unified Core Ltd.', text: 'Worked in a Network Operations Center environment with a focus on monitoring, troubleshooting and network operations.' },
  { date: 'Internship', role: 'Network Intern', company: 'IP Link Network', text: 'Gained practical exposure to networking operations and real-world IT infrastructure.' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const nav = ['About','Skills','Experience','Education','Contact'];
  const go = (id: string) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };

  return <main>
    <header className="nav-wrap"><nav className="nav container">
      <button className="brand" onClick={() => go('about')}><span className="brand-avatar"><Image src="/images/omith-hasan-avatar.jpg" alt="Omith Hasan" width={756} height={944} priority/></span> Omith Hasan</button>
      <div className={`nav-links ${open ? 'show' : ''}`}>{nav.map(n => <button key={n} onClick={() => go(n)}>{n}</button>)}</div>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
    </nav></header>

    <section id="about" className="hero container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"/> IT • NETWORK • SECURITY • BROADCAST</div>
        <h1>Building reliable <em>IT infrastructure</em> for real-world systems.</h1>
        <p>I’m Omith Hasan, an IT professional focused on Networking, Cybersecurity, System Administration and Broadcast IT. I enjoy solving technical problems, automating repetitive work and keeping critical systems stable.</p>
        <div className="actions"><button className="primary" onClick={() => go('contact')}>Let’s connect <ArrowUpRight size={18}/></button><a className="secondary" href="mailto:omithhasan940@gmail.com"><Mail size={18}/> Email me</a></div>
        <div className="quick"><span><b>01</b> Network</span><span><b>02</b> Security</span><span><b>03</b> Systems</span></div>
      </div>
      <div className="hero-card">
        <div className="terminal-bar"><i/><i/><i/><span>omith@portfolio:~</span></div>
        <figure className="hero-photo">
          <div className="hero-photo-img"><Image src="/images/omith-hasan.jpg" alt="Omith Hasan, IT, network and broadcast engineer" width={1402} height={1122} priority sizes="(max-width: 850px) 100vw, 460px"/></div>
          <figcaption className="photo-meta"><span><b>omith-hasan</b> · IT &amp; Network Engineer</span><span className="green">● available</span></figcaption>
        </figure>
        <div className="terminal-body"><p><b>$ whoami</b></p><p className="green">omith-hasan</p><p><b>$ focus --list</b></p><p>→ networking</p><p>→ cybersecurity</p><p>→ system-administration</p><p>→ broadcast-it</p><p><b>$ status</b></p><p className="green">● available for new opportunities</p><span className="cursor">_</span></div>
      </div>
    </section>

    <section id="skills" className="section container"><div className="section-head"><span>01 / CAPABILITIES</span><h2>Technical toolkit</h2></div><div className="skills-grid">{skills.map(({icon: Icon,title,items}) => <article className="skill" key={title}><Icon className="skill-icon"/><h3>{title}</h3><ul>{items.map(x => <li key={x}>{x}</li>)}</ul></article>)}</div></section>

    <section id="experience" className="section alt"><div className="container"><div className="section-head"><span>02 / EXPERIENCE</span><h2>Where I’ve worked</h2></div><div className="timeline">{experience.map((e,i)=><article className="job" key={e.company}><div className="job-index">0{i+1}</div><div><span className="date">{e.date}</span><h3>{e.role}</h3><h4>{e.company}</h4><p>{e.text}</p></div></article>)}</div></div></section>

    <section id="education" className="section container"><div className="section-head"><span>03 / EDUCATION</span><h2>Academic background</h2></div><div className="education"><div><span className="tag">B.SC ENGINEERING</span><h3>Computer Engineering</h3><p>International University of Business Agriculture and Technology (IUBAT)</p></div><strong>CGPA 2.98<span>/4.00</span></strong></div><div className="edu-media"><figure><Image src="/images/omith-hasan-graduation.jpg" alt="Omith Hasan at his graduation ceremony holding his cap" width={960} height={1280} sizes="(max-width: 550px) 100vw, 545px"/><figcaption>Graduation · IUBAT</figcaption></figure><figure><Image src="/images/omith-hasan-iubat.jpg" alt="Omith Hasan in front of the IUBAT campus in Dhaka" width={868} height={1085} sizes="(max-width: 550px) 100vw, 545px"/><figcaption>IUBAT Campus · Dhaka</figcaption></figure></div><div className="certs"><div><b>CCNA</b><span>Course Completed</span></div><div><b>CEHv12</b><span>Course Completed</span></div><div><b>RHCSA</b><span>Self-taught</span></div></div></section>

    <section id="contact" className="contact"><div className="container contact-inner"><div><span className="section-kicker">04 / CONTACT</span><h2>Have a technical challenge?<br/><em>Let’s talk.</em></h2><p>For opportunities, collaboration or IT/networking projects, feel free to reach out.</p></div><div className="contact-card"><a href="mailto:omithhasan940@gmail.com"><Mail/><span><small>Email</small>omithhasan940@gmail.com</span></a><a href="tel:+8801740721194"><BriefcaseBusiness/><span><small>Phone</small>+880 1740 721194</span></a><div className="socials"><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="GitHub"><Github/></a></div></div></div></section>

    <footer><div className="container"><span>© {new Date().getFullYear()} Omith Hasan</span><span>Built with Next.js & TypeScript</span></div></footer>
  </main>;
}
