/**
 * Relevant banner visuals for the Technical work cards.
 * Pure inline SVG — no image download, works in dark + light theme,
 * decorative only (aria-hidden) so screen readers skip it.
 */
export function ProjectVisual({ index, title }: { index: string; title: string }) {
  return (
    <div className="project__visual" aria-hidden="true">
      {index === '01' && (
        <svg viewBox="0 0 640 200" preserveAspectRatio="xMidYMid slice" role="presentation">
          {/* Container hull outline */}
          <rect
            x="130"
            y="76"
            width="380"
            height="100"
            rx="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          {/* Container vertical corrugations */}
          <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.14">
            <line x1="170" y1="76" x2="170" y2="176" />
            <line x1="210" y1="76" x2="210" y2="176" />
            <line x1="250" y1="76" x2="250" y2="176" />
            <line x1="290" y1="76" x2="290" y2="176" />
            <line x1="350" y1="76" x2="350" y2="176" />
            <line x1="390" y1="76" x2="390" y2="176" />
            <line x1="430" y1="76" x2="430" y2="176" />
            <line x1="470" y1="76" x2="470" y2="176" />
          </g>

          {/* ESP8266 Central MCU inside container */}
          <rect
            x="292"
            y="102"
            width="56"
            height="48"
            rx="5"
            fill="rgba(6, 182, 212, 0.08)"
            stroke="#06b6d4"
            strokeWidth="1.5"
          />
          <text
            x="320"
            y="130"
            textAnchor="middle"
            fill="#06b6d4"
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.08em"
          >
            ESP8266
          </text>

          {/* Sensor nodes */}
          <g>
            {/* Flame sensor */}
            <circle cx="190" cy="115" r="13" fill="rgba(244, 63, 94, 0.12)" stroke="#f43f5e" strokeWidth="1.5" />
            <circle cx="190" cy="115" r="4" fill="#f43f5e" />
            <text x="190" y="165" textAnchor="middle" fill="#f43f5e" fontSize="8" fontWeight="700">
              FLAME SENSOR
            </text>
            <path d="M203 115 L292 122" stroke="#f43f5e" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />

            {/* Temperature sensor */}
            <circle cx="450" cy="115" r="13" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="450" cy="115" r="4" fill="#f59e0b" />
            <text x="450" y="165" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="700">
              TEMP SENSOR
            </text>
            <path d="M437 115 L348 122" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
          </g>

          {/* Wireless signal radiating from ESP8266 upwards */}
          <g stroke="#06b6d4" fill="none" strokeWidth="1.5" strokeLinecap="round">
            <path d="M308 86 A18 18 0 0 1 332 86" strokeOpacity="0.9" />
            <path d="M296 74 A34 34 0 0 1 344 74" strokeOpacity="0.6" />
            <path d="M284 62 A52 52 0 0 1 356 62" strokeOpacity="0.35" />
          </g>

          {/* Telegram cloud alert dispatch */}
          <g>
            <rect
              x="256"
              y="20"
              width="128"
              height="28"
              rx="14"
              fill="rgba(6, 182, 212, 0.14)"
              stroke="#06b6d4"
              strokeWidth="1.2"
            />
            <text
              x="320"
              y="38"
              textAnchor="middle"
              fill="#06b6d4"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.06em"
            >
              TELEGRAM API · SMS
            </text>
          </g>

          <text className="pv__tag" x="24" y="34">
            IOT · CONTAINER FIRE DETECTION
          </text>
        </svg>
      )}

      {index === '02' && (
        <svg viewBox="0 0 640 200" preserveAspectRatio="xMidYMid slice" role="presentation">
          {/* Dual Redundant Core Routers */}
          <g>
            {/* Core Router 1 */}
            <rect
              x="220"
              y="74"
              width="90"
              height="44"
              rx="6"
              fill="rgba(6, 182, 212, 0.1)"
              stroke="#06b6d4"
              strokeWidth="1.5"
            />
            <text
              x="265"
              y="96"
              textAnchor="middle"
              fill="#06b6d4"
              fontSize="8.5"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              CORE ROUTER 1
            </text>
            <text
              x="265"
              y="108"
              textAnchor="middle"
              fill="currentColor"
              opacity="0.6"
              fontSize="7.5"
              fontWeight="600"
            >
              Active / OSPF
            </text>

            {/* Core Router 2 */}
            <rect
              x="330"
              y="74"
              width="90"
              height="44"
              rx="6"
              fill="rgba(6, 182, 212, 0.1)"
              stroke="#06b6d4"
              strokeWidth="1.5"
            />
            <text
              x="375"
              y="96"
              textAnchor="middle"
              fill="#06b6d4"
              fontSize="8.5"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              CORE ROUTER 2
            </text>
            <text
              x="375"
              y="108"
              textAnchor="middle"
              fill="currentColor"
              opacity="0.6"
              fontSize="7.5"
              fontWeight="600"
            >
              Redundant / OSPF
            </text>

            {/* OSPF Trunk Interconnect */}
            <line x1="310" y1="96" x2="330" y2="96" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3 2" />
            <rect x="304" y="86" width="32" height="20" rx="3" fill="var(--bg, #0a0f1d)" stroke="#06b6d4" strokeWidth="1" />
            <text x="320" y="99" textAnchor="middle" fill="#06b6d4" fontSize="6.5" fontWeight="800">OSPF</text>
          </g>

          {/* GPON OLT on the left */}
          <g>
            <rect
              x="50"
              y="74"
              width="110"
              height="44"
              rx="6"
              fill="rgba(16, 185, 129, 0.1)"
              stroke="#10b981"
              strokeWidth="1.4"
            />
            <text
              x="105"
              y="95"
              textAnchor="middle"
              fill="#10b981"
              fontSize="8.5"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              GPON OLT
            </text>
            <text
              x="105"
              y="107"
              textAnchor="middle"
              fill="currentColor"
              opacity="0.6"
              fontSize="7"
            >
              (Replaced EPON)
            </text>

            {/* Redundant uplinks to both core routers */}
            <path d="M160 88 L220 88" stroke="#10b981" strokeWidth="1.5" />
            <path d="M160 104 L220 130 L330 110" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 2" strokeOpacity="0.7" />

            {/* Fiber distribution lines */}
            <line x1="75" y1="118" x2="60" y2="155" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="105" y1="118" x2="105" y2="155" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="135" y1="118" x2="150" y2="155" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
            <text x="105" y="167" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="600">
              FTTH SUBSCRIBERS
            </text>
          </g>

          {/* Reseller VPN & Central Services on the right */}
          <g>
            {/* VPN Reseller Box */}
            <rect
              x="475"
              y="52"
              width="120"
              height="38"
              rx="6"
              fill="rgba(168, 85, 247, 0.1)"
              stroke="#a855f7"
              strokeWidth="1.4"
            />
            <text
              x="535"
              y="71"
              textAnchor="middle"
              fill="#a855f7"
              fontSize="8"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              RESELLER VPN
            </text>
            <text
              x="535"
              y="82"
              textAnchor="middle"
              fill="currentColor"
              opacity="0.6"
              fontSize="6.5"
            >
              1-to-1 Secure Tunnel
            </text>
            <path d="M420 86 L475 71" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="3 2" />

            {/* Central Services (DHCP / FTP / SSH) */}
            <rect
              x="475"
              y="102"
              width="120"
              height="40"
              rx="6"
              fill="rgba(59, 130, 246, 0.1)"
              stroke="#3b82f6"
              strokeWidth="1.4"
            />
            <text
              x="535"
              y="120"
              textAnchor="middle"
              fill="#3b82f6"
              fontSize="8"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              DHCP · FTP · SSH
            </text>
            <text
              x="535"
              y="133"
              textAnchor="middle"
              fill="currentColor"
              opacity="0.6"
              fontSize="6.5"
            >
              Encrypted Admin &amp; File
            </text>
            <path d="M420 106 L475 120" stroke="#3b82f6" strokeWidth="1.2" />
          </g>

          <text className="pv__tag" x="24" y="34">
            ISP INFRASTRUCTURE · DUAL CORE OSPF · GPON · VPN
          </text>
        </svg>
      )}

      {index === '03' && (
        <svg viewBox="0 0 640 200" preserveAspectRatio="xMidYMid slice" role="presentation">
          {/* shield */}
          <path
            className="pv__shield"
            d="M320 30 L398 56 V108 C398 148 362 172 320 184 C278 172 242 148 242 108 V56 Z"
          />
          <path className="pv__shield-check" d="M292 108 L314 130 L350 88" />
          {/* scan lines */}
          <g className="pv__scan">
            <path d="M40 60 H200" />
            <path d="M40 96 H220" />
            <path d="M40 132 H200" />
            <path d="M440 60 H600" />
            <path d="M420 96 H600" />
            <path d="M440 132 H600" />
          </g>
          <circle className="pv__scan-dot pv__s1" cx="0" cy="0" r="3.5" />
          <circle className="pv__scan-dot pv__s2" cx="0" cy="0" r="3.5" />
          {/* lock nodes */}
          <g className="pv__nodes">
            <circle cx="80" cy="150" r="10" />
            <circle cx="560" cy="150" r="10" />
          </g>
          <text className="pv__tag" x="24" y="34">
            IDS/IPS · FIREWALL
          </text>
        </svg>
      )}

      {index === '04' && (
        <svg viewBox="0 0 640 200" preserveAspectRatio="xMidYMid slice" role="presentation">
          {/* broadcast tower */}
          <g className="pv__tower">
            <path d="M320 60 L288 170 M320 60 L352 170 M296 140 H344 M302 116 H338 M308 94 H332" />
            <circle cx="320" cy="52" r="7" />
          </g>
          {/* signal arcs */}
          <g className="pv__arcs">
            <path d="M288 44 A46 46 0 0 1 352 44" />
            <path d="M272 30 A70 70 0 0 1 368 30" />
            <path d="M256 16 A94 94 0 0 1 384 16" />
          </g>
          {/* server racks */}
          <g className="pv__racks">
            <rect x="60" y="110" width="104" height="60" rx="8" />
            <rect x="72" y="122" width="80" height="8" rx="4" />
            <rect x="72" y="136" width="80" height="8" rx="4" />
            <rect x="72" y="150" width="52" height="8" rx="4" />
            <rect x="476" y="110" width="104" height="60" rx="8" />
            <rect x="488" y="122" width="80" height="8" rx="4" />
            <rect x="488" y="136" width="80" height="8" rx="4" />
            <rect x="488" y="150" width="52" height="8" rx="4" />
          </g>
          <g className="pv__links">
            <path d="M164 140 H256 M384 140 H476" />
          </g>
          <circle className="pv__uptime pv__u1" cx="152" cy="126" r="4" />
          <circle className="pv__uptime pv__u2" cx="568" cy="126" r="4" />
          <text className="pv__tag" x="24" y="34">
            ON AIR · MONITORING
          </text>
        </svg>
      )}
    </div>
  );
}
