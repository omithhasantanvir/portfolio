/** Education, credentials and active focus areas. */

export interface EducationEntry {
  id: string;
  level: 'School' | 'College' | 'University';
  institution: string;
  qualification: string;
  field: string;
  period: string;
  result?: string;
  note?: string;
  featured?: boolean;
}

/** Complete academic journey, oldest first. */
export const educationJourney: EducationEntry[] = [
  {
    id: 'school',
    level: 'School',
    institution: 'Uchakhila Bahumukhi High School',
    qualification: 'Secondary School Certificate (SSC)',
    field: 'Science',
    period: '2014',
    result: 'GPA 5.00 / 5.00',
    note: 'Dhaka Board',
  },
  {
    id: 'college',
    level: 'College',
    institution: 'Agricultural University College, Mymensingh',
    qualification: 'Higher Secondary Certificate (HSC)',
    field: 'Science',
    period: '2016',
    result: 'GPA 3.83 / 5.00',
    note: 'Dhaka Board',
  },
  {
    id: 'university',
    level: 'University',
    institution: 'International University of Business Agriculture and Technology (IUBAT)',
    qualification: 'B.Sc. Engineering — Computer Engineering',
    field: 'Faculty of Engineering',
    period: 'B.Sc. Engineering',
    result: 'CGPA 2.98 / 4.00',
    featured: true,
  },
];

export const certifications: { title: string; detail: string }[] = [
  { title: 'CCNA', detail: 'Course Completed' },
  { title: 'CEHv12', detail: 'Course Completed' },
  { title: 'RHCSA', detail: 'Self-taught' },
];

/** "Currently focused on" grid. */
export const focusAreas: { title: string; description: string }[] = [
  {
    title: 'Network Infrastructure',
    description: 'Routing, switching and the monitoring that keeps a network predictable.',
  },
  {
    title: 'Cybersecurity',
    description: 'Hardening, monitoring and understanding how systems are attacked.',
  },
  {
    title: 'System Administration',
    description: 'Windows Server, Linux, identity and services that stay available.',
  },
  {
    title: 'Broadcast Technology',
    description: 'Always-on broadcast IT systems, where downtime is not an option.',
  },
  {
    title: 'Infrastructure Automation',
    description: 'Scripting and tooling that removes repetitive operational work.',
  },
  {
    title: 'Cloud & DevOps',
    description: 'AWS and CI/CD fundamentals behind modern infrastructure delivery.',
  },
];

/** Infrastructure thinking model — rendered as a layered architecture flow. */
export const infrastructureLayers: { label: string; note: string }[] = [
  { label: 'Users', note: 'The people and services depending on the system' },
  { label: 'Network', note: 'Connectivity, routing, switching and segmentation' },
  { label: 'Firewall / Security Layer', note: 'Controlled access, inspection and monitoring' },
  { label: 'Core Infrastructure', note: 'Servers, identity, storage and virtualization' },
  { label: 'Servers / Applications', note: 'The services that deliver the work' },
  { label: 'Monitoring / Recovery', note: 'Visibility, alerting and getting back to normal' },
];
