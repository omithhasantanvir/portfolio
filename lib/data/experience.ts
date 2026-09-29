export type ExperienceItem = {
  index: string;
  role: string;
  company: string;
  period: string;
  description: string;
  /** Areas involved — drawn from the expertise Omith has published. */
  areas: string[];
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
    period: 'Internship',
    description: 'Gained practical exposure to networking operations and real-world IT infrastructure.',
    areas: ['Networking operations', 'IT infrastructure'],
  },
];
