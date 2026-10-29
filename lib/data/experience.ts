export type ExperienceItem = {
  index: string;
  role: string;
  company: string;
  period: string;
  description: string;
  /** Areas involved — drawn from the expertise Omith has published. */
  areas: string[];
  practicum?: {
    title: string;
    features: string[];
  };
};

/** Professional experience — descriptions are the real published ones. */
export const experience: ExperienceItem[] = [
  {
    index: '01',
    role: 'Junior Broadcast Engineer',
    company: 'Independent Television Ltd.',
    period: 'Jan 2024 — Present',
    description:
      'Managing and troubleshooting broadcast IT systems, supporting server stability and helping maintain reliable broadcast infrastructure.',
    areas: ['Broadcast IT systems', 'Infrastructure monitoring', 'Incident recovery'],
  },
  {
    index: '02',
    role: 'Assistant Engineer — NOC',
    company: 'Unified Core Ltd.',
    period: 'Oct 2023 — Dec 2023',
    description:
      'Worked in a Network Operations Center environment with a focus on monitoring, troubleshooting and network operations.',
    areas: ['Network operations', 'Network monitoring', 'Troubleshooting'],
  },
  {
    index: '03',
    role: 'Network Intern',
    company: 'IP Link Network',
    period: 'Internship / Practicum',
    description:
      'Gained hands-on exposure to ISP networking operations, core routing topologies, and fiber access infrastructure while researching and developing the undergraduate engineering practicum project.',
    areas: ['ISP Networking', 'Dual Core Redundancy', 'OSPF Routing', 'GPON / OLT', 'VPN Tunnels', 'SSH Security'],
    practicum: {
      title: 'Network Management of IP Link Network',
      features: [
        'Implementation of a VPN suggested to enable one-to-one communication with the reseller',
        'Two core router has been added instead of one core switch',
        'Open Shortest Path Fast (OSPF) is used as the routing protocol',
        'For the remote access SSH security is suggested',
        'FTP has been added for better client service',
        'DHCP server has been suggested',
        'Used GPON instead of EPON in OLT',
      ],
    },
  },
];
