export type ExpertiseGroup = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

/** Technical expertise — grouped by discipline, not a wall of badges. */
export const expertise: ExpertiseGroup[] = [
  {
    id: 'networking',
    title: 'Networking & Infrastructure',
    summary: 'Configuring and troubleshooting the layer everything else depends on.',
    items: [
      'Network configuration & troubleshooting',
      'TCP/IP',
      'Routing & switching',
      'Network monitoring',
      'Firewall configuration',
      'IDS/IPS',
      'Wireshark',
      'Traffic analysis',
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    summary: 'Understanding how systems are attacked, and how to reduce that surface.',
    items: [
      'Security monitoring',
      'Penetration testing fundamentals',
      'Vulnerability assessment',
      'Bug bounty fundamentals',
      'Network security',
      'Incident troubleshooting',
    ],
  },
  {
    id: 'systems',
    title: 'Systems Administration',
    summary: 'Running servers, identity and services with predictable configuration.',
    items: [
      'Windows Server',
      'Linux',
      'Red Hat / RHCSA',
      'Active Directory',
      'Group Policy',
      'Mail servers',
      'FTP servers',
      'Web servers',
      'VMware',
      'Docker',
    ],
  },
  {
    id: 'automation',
    title: 'Automation & DevOps',
    summary: 'Removing repetitive manual work so operations stay consistent.',
    items: [
      'Python',
      'Bash',
      'PowerShell',
      'CI/CD fundamentals',
      'AWS fundamentals',
      'Infrastructure automation',
    ],
  },
  {
    id: 'broadcast',
    title: 'Broadcast IT',
    summary: 'Keeping always-on broadcast systems available, observable and recoverable.',
    items: [
      'Broadcast server infrastructure',
      'VizRT',
      'GV Status',
      'Octopus servers',
      'Infrastructure monitoring',
      'Broadcast uptime',
      'Incident recovery',
    ],
  },
];
