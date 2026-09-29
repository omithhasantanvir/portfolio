export type Project = {
  index: string;
  title: string;
  /** "in-progress" renders an honest placeholder; "documented" renders the full case study. */
  status: 'in-progress' | 'documented';
  summary: string;
  tech: string[];
  problem?: string;
  solution?: string;
  role?: string;
  architecture?: string;
  outcome?: string;
  links?: { caseStudy?: string; github?: string; live?: string };
};

/**
 * Projects / technical work — case-study style.
 *
 * These are placeholders on purpose. To publish a case study: fill in `problem`,
 * `solution`, `role`, `architecture`, `outcome`, add `links`, then change
 * `status` to 'documented' and the card switches to the full layout.
 * Only publish outcomes that were actually measured.
 */
export const projects: Project[] = [
  {
    index: '01',
    status: 'in-progress',
    title: 'Network Monitoring & Traffic Analysis',
    summary:
      'Monitoring and diagnosing network infrastructure through practical traffic analysis and system monitoring.',
    tech: ['Wireshark', 'Linux', 'Networking'],
  },
  {
    index: '02',
    status: 'in-progress',
    title: 'Security Monitoring & Traffic Inspection',
    summary:
      'Working with security monitoring, traffic inspection and penetration-testing fundamentals in a lab environment.',
    tech: ['IDS/IPS', 'Firewall', 'Traffic analysis'],
  },
  {
    index: '03',
    status: 'in-progress',
    title: 'Broadcast IT Systems Support',
    summary:
      'Supporting broadcast server infrastructure, with a focus on monitoring, uptime and incident recovery.',
    tech: ['Broadcast servers', 'Infrastructure monitoring', 'Incident recovery'],
  },
];
