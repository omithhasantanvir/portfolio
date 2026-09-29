/**
 * Decorative infrastructure topology: Internet → Firewall → Core Switch →
 * Servers / Clients / Monitoring. Pure SVG + CSS animation (no JavaScript),
 * and every animation is disabled under prefers-reduced-motion.
 */
export function Topology() {
  return (
    <svg
      className="topology"
      viewBox="0 0 560 400"
      role="img"
      aria-labelledby="topology-title topology-desc"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="topology-title">Network topology</title>
      <desc id="topology-desc">
        Internet traffic passes through a firewall and a core switch, which distributes it to
        servers, clients and infrastructure monitoring.
      </desc>

      <defs>
        <pattern id="topology-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" className="topology__dot" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="560" height="400" fill="url(#topology-grid)" aria-hidden="true" />

      {/* links */}
      <path className="topology__link" d="M280 74 V116" />
      <path className="topology__link" d="M280 162 V204" />
      <path className="topology__link" d="M280 250 V276" />
      <path className="topology__link" d="M92 276 H468" />
      <path className="topology__link" d="M92 276 V312" />
      <path className="topology__link" d="M280 276 V312" />
      <path className="topology__link" d="M468 276 V312" />

      {/* flowing packets */}
      <circle className="topology__packet topology__packet--v1" cx="280" cy="74" r="2.5" />
      <circle className="topology__packet topology__packet--v2" cx="280" cy="162" r="2.5" />
      <circle className="topology__packet topology__packet--v3" cx="280" cy="250" r="2.5" />
      <circle className="topology__packet topology__packet--h1" cx="92" cy="276" r="2.5" />
      <circle className="topology__packet topology__packet--v4" cx="468" cy="276" r="2.5" />

      {/* internet */}
      <g className="topology__node">
        <rect x="205" y="28" width="150" height="46" rx="9" />
        <text x="280" y="56" textAnchor="middle">INTERNET</text>
      </g>

      {/* firewall */}
      <g className="topology__node topology__node--accent">
        <rect x="205" y="116" width="150" height="46" rx="9" />
        <text x="280" y="144" textAnchor="middle">FIREWALL / IDS</text>
      </g>

      {/* core switch */}
      <g className="topology__node">
        <rect x="205" y="204" width="150" height="46" rx="9" />
        <text x="280" y="232" textAnchor="middle">CORE SWITCH</text>
      </g>

      {/* edge devices */}
      <g className="topology__node topology__node--sm">
        <rect x="28" y="312" width="128" height="42" rx="8" />
        <text x="92" y="338" textAnchor="middle">SERVERS</text>
      </g>
      <g className="topology__node topology__node--sm">
        <rect x="216" y="312" width="128" height="42" rx="8" />
        <text x="280" y="338" textAnchor="middle">CLIENTS</text>
      </g>
      <g className="topology__node topology__node--sm topology__node--accent">
        <rect x="404" y="312" width="128" height="42" rx="8" />
        <text x="468" y="338" textAnchor="middle">MONITORING</text>
      </g>

      <g className="topology__pulse" aria-hidden="true">
        <circle cx="468" cy="333" r="7" />
      </g>
    </svg>
  );
}
