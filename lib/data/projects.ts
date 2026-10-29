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
 * Both the Undergraduate Thesis and the Practicum Project are fully documented
 * with real architecture, problem, solution, role, and outcome.
 */
export const projects: Project[] = [
  {
    index: '01',
    status: 'documented',
    title: 'Container Fire Detection System with Wireless Sensor',
    summary:
      'Undergraduate B.Sc. Engineering Thesis: An IoT-based automated early fire detection and wireless safety monitoring system for chemical and cargo containers using ESP8266, multi-sensor detection, and instant Telegram/SMS alert notifications.',
    tech: [
      'IoT',
      'ESP8266',
      'Wireless Sensors',
      'Telegram API',
      'Flame & Heat Sensors',
      'Embedded C/C++',
      'Hardware Prototyping',
    ],
    problem:
      'Industrial and transport containers (especially those housing volatile chemicals) are at high risk of rapid, catastrophic fires. Conventional fire alarms lack remote connectivity, cannot pinpoint isolated container locations across transit yards, and fail to alert authorities before fires spread.',
    solution:
      'Designed and built an intelligent wireless fire detection system utilizing an ESP8266 microcontroller paired with flame and temperature sensors, an LCD display, and the Telegram API. Upon detecting heat, flame, or smoke, the system triggers local audiovisual feedback and instantly dispatches emergency SMS and Telegram alerts containing a live link to the container’s location.',
    role:
      'Lead Project Researcher & Hardware/Firmware Developer (IUBAT B.Sc. Engineering Thesis). Responsible for sensor circuit design, ESP8266 microcontroller programming in C/C++, Telegram Bot API integration, and end-to-end hardware prototype testing.',
    architecture:
      'Multi-Level Sensor Nodes (Flame, Heat, Smoke) -> ESP8266 Microcontroller -> Local LCD Control Panel & Alarm -> Wi-Fi Gateway -> Telegram Cloud API & SMS Alert -> Emergency Rescue Link with Container ID & Location.',
    outcome:
      'Successfully verified rapid multi-level sensor response times, reliable instant Telegram alert delivery, low-power consumption with ESP8266, and clear local display readings, delivering a low-cost, user-friendly prototype to protect lives and cargo.',
  },
  {
    index: '02',
    status: 'documented',
    title: 'Network Management of IP Link Network',
    summary:
      'Undergraduate B.Sc. Engineering Practicum Project: Comprehensive network infrastructure management and redesign for IP Link Network, featuring dual-core router redundancy, OSPF routing, GPON optical migration, and secure reseller VPN tunnels.',
    tech: [
      'Dual Core Routers',
      'OSPF Routing',
      'GPON / OLT',
      'VPN Tunnels',
      'SSH Security',
      'DHCP Server',
      'FTP Services',
      'ISP Operations',
    ],
    problem:
      'Operating with a single core switch created a severe single point of failure (SPOF) vulnerable to total network outages. In addition, legacy EPON optical architecture limited bandwidth capacity for growing subscribers, static routing lacked dynamic failover, remote access lacked encryption, and reseller communications were not securely isolated.',
    solution:
      'Architected and proposed a high-availability ISP infrastructure: replaced the single switch with two redundant core routers running Open Shortest Path First (OSPF), migrated the OLT access layer from EPON to high-speed GPON, implemented site-to-site VPNs for dedicated reseller communications, enforced SSH encryption for remote management, and integrated dedicated DHCP and FTP service servers.',
    role:
      'Practicum Network Engineer & System Analyst (IUBAT B.Sc. Practicum Project at IP Link Network). Researched network bottlenecks, drafted the high-availability topology, planned OSPF area design and route distribution, and specified GPON optical deployment parameters.',
    architecture:
      'Subscribers / FTTH -> GPON OLT Access -> Layer 2 Distribution -> Dual Redundant Core Routers (OSPF Dynamic Routing & Redundant Uplinks) -> Reseller VPN Gateway + Hardened SSH Remote Access + Centralized DHCP & FTP Servers -> Upstream Transit Provider.',
    outcome:
      'Eliminated single-point failure vulnerabilities through automated router failover, expanded subscriber optical bandwidth and split ratios with GPON, secured remote administrative access with SSH, and guaranteed private, encrypted connectivity for reseller partners.',
  },
  {
    index: '03',
    status: 'in-progress',
    title: 'Security Monitoring & Traffic Inspection',
    summary:
      'Working with security monitoring, traffic inspection and penetration-testing fundamentals in a lab environment.',
    tech: ['IDS/IPS', 'Firewall', 'Traffic analysis'],
  },
  {
    index: '04',
    status: 'in-progress',
    title: 'Broadcast IT Systems Support',
    summary:
      'Supporting broadcast server infrastructure, with a focus on monitoring, uptime and incident recovery.',
    tech: ['Broadcast servers', 'Infrastructure monitoring', 'Incident recovery'],
  },
];
