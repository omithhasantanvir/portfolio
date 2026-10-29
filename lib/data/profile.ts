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
  thesis?: {
    title: string;
    type?: string;
    abstract: string;
    technologies: string[];
  };
  practicum?: {
    title: string;
    organization: string;
    features: string[];
    technologies: string[];
  };
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
    thesis: {
      title: 'Container Fire Detection System with Wireless Sensor',
      type: 'Undergraduate B.Sc. Engineering Thesis',
      abstract:
        "Now a day, we frequently hear about fires, and the number of people killed or injured as a result of fires is increasing. The project's goal is to detect fires early and to reduce fire-related losses. This project's Container fire detection system with wireless sensor will play an important role in detecting and monitoring the container to determine whether an unexpected situation has occurred. The Container Fire Detection System seeks to develop a system that ensures the safety of the container (which may contain chemicals) by sending an SMS alert to corporate officials for rescue as soon as a fire is detected. This is accomplished by utilizing IoT. The proposed system focuses primarily on developing a fire detection system using an ESP 8266 Microcontroller in conjunction with a temperature sensor, flame sensor, LCD monitor, and Telegram API. Initially, several sensors will be placed throughout the container to detect fire, and if a fire is detected, SMS will provide the fire detected container location via a link using the Telegram account. Following the completion of the project, the system is expected to respond quickly to the current situation. The system is capable of detecting heat, flame, and smoke detected by the detectors. When the sensors on each level are triggered individually, the main system activates and sends a message to the owner, as well as displaying the data on the control panel LCD display. The goal of this thesis is to design a low-cost, effective fire alarm and detection system that is user-friendly and simple to use. Sensors and ESP are used to reduce electricity waste and save lives in order to reduce the percentage of accidents.",
      technologies: [
        'IoT',
        'ESP8266 Microcontroller',
        'Wireless Sensors',
        'Telegram Bot API',
        'Flame & Heat Sensors',
        'Embedded C/C++',
        'Hardware Prototyping',
      ],
    },
    practicum: {
      title: 'Network Management of IP Link Network',
      organization: 'IP Link Network',
      features: [
        'Implementation of a VPN suggested to enable secure one-to-one communication with resellers',
        'Two core routers deployed instead of a single core switch for full network redundancy',
        'Open Shortest Path First (OSPF) configured as the dynamic routing protocol',
        'SSH security implemented for encrypted and authenticated remote administration access',
        'Dedicated FTP server added for high-speed local client service and file exchange',
        'Centralized DHCP server deployed for automated, conflict-free IP address allocation',
        'Optical access layer modernization: Deployed GPON instead of EPON in the OLT',
      ],
      technologies: [
        'Dual Core Redundancy',
        'OSPF Routing',
        'GPON / OLT',
        'Site-to-Site VPN',
        'SSH Security',
        'DHCP Server',
        'FTP Services',
      ],
    },
  },
];

export interface Certification {
  title: string;
  detail: string;
  verified?: boolean;
  verifiedCount?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: 'CCNA',
    detail: '3 Verified Badges (ITN, SRWE, ENSA)',
    verified: true,
    verifiedCount: '3 Badges',
    url: 'https://www.credly.com/users/omithhasantanvir/badges',
  },
  {
    title: 'RHCSA',
    detail: '2 Verified Badges (RH124, RH134)',
    verified: true,
    verifiedCount: '2 Badges',
    url: 'https://www.credly.com/users/omithhasantanvir/badges',
  },
  {
    title: 'CEHv12',
    detail: 'Course Completed',
  },
];

export interface CredlyBadge {
  id: string;
  title: string;
  issuer: string;
  issuerOrg: 'Cisco' | 'Red Hat';
  track: 'CCNA' | 'RHCSA';
  issueDate: string;
  url: string;
  image: string;
  summary: string;
  skills: string[];
}

/** Official digital badges earned from Cisco & Red Hat, verified via Credly. */
export const credlyBadges: CredlyBadge[] = [
  {
    id: 'ccna-itn',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    issuerOrg: 'Cisco',
    track: 'CCNA',
    issueDate: 'July 2023',
    url: 'https://www.credly.com/badges/b1222b2c-0c58-464b-ae9c-58bbb28a4969',
    image: '/images/badges/ccna-introduction-to-networks.png',
    summary:
      'Foundational networking concepts, IPv4 & IPv6 addressing, subnetting, Ethernet, switching and routing operations.',
    skills: ['IPv4 / IPv6', 'Subnetting', 'Ethernet Protocols', 'Network Fundamentals'],
  },
  {
    id: 'ccna-srwe',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    issuerOrg: 'Cisco',
    track: 'CCNA',
    issueDate: 'September 2023',
    url: 'https://www.credly.com/badges/4a32316a-328b-4170-899e-b11f2c11d3dd',
    image: '/images/badges/ccna-switching-routing-wireless-essentials.png',
    summary:
      'VLANs, inter-VLAN routing, STP, EtherChannel redundancy, DHCPv4 / SLAAC, and wireless LAN (WLAN) configuration.',
    skills: ['VLANs & Trunking', 'Spanning Tree (STP)', 'EtherChannel', 'WLAN / Wireless'],
  },
  {
    id: 'ccna-ensa',
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    issuerOrg: 'Cisco',
    track: 'CCNA',
    issueDate: 'November 2023',
    url: 'https://www.credly.com/badges/faf3e5f7-34d7-4d0e-9139-6f201eac0ac1',
    image: '/images/badges/ccna-enterprise-networking-security-automation.png',
    summary:
      'Single-area OSPFv2, enterprise network security concepts, ACLs, NAT, WAN technologies, QoS, and network automation APIs.',
    skills: ['OSPFv2 Routing', 'ACLs & Security', 'NAT & WAN', 'Network Automation'],
  },
  {
    id: 'rhcsa-rh124',
    title: 'Red Hat System Administration I (RH124)',
    issuer: 'Red Hat Academy',
    issuerOrg: 'Red Hat',
    track: 'RHCSA',
    issueDate: 'May 2025',
    url: 'https://www.credly.com/badges/ded0f440-62d1-4844-8c81-71ddab223456',
    image: '/images/badges/rhcsa-system-administration-i-rh124.png',
    summary:
      'Core Linux system administration: bash CLI, file system navigation, user & group management, Linux permissions, and OpenSSH security.',
    skills: ['Linux CLI', 'User & Group Admin', 'File Permissions', 'OpenSSH & Processes'],
  },
  {
    id: 'rhcsa-rh134',
    title: 'Red Hat System Administration II (RH134)',
    issuer: 'Red Hat Academy',
    issuerOrg: 'Red Hat',
    track: 'RHCSA',
    issueDate: 'June 2025',
    url: 'https://www.credly.com/badges/c4fa295d-f40e-4c69-a8cb-c8da67b84beb',
    image: '/images/badges/rhcsa-system-administration-ii-rh134.png',
    summary:
      'Advanced storage and LVM configuration, systemd service management, SELinux security enforcement, firewalld, and system rescue/recovery.',
    skills: ['Storage & LVM', 'Systemd Services', 'SELinux & Firewalld', 'System Recovery'],
  },
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
