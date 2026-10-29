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
          {/* traffic waveform */}
          <path
            className="pv__wave pv__wave--soft"
            d="M0 120 C 60 90, 110 150, 170 118 S 290 70, 350 112 S 470 160, 530 104 S 600 90, 640 112"
          />
          <path
            className="pv__wave"
            d="M0 132 C 70 100, 120 162, 190 128 S 300 82, 370 122 S 480 168, 545 114 S 605 102, 640 124"
          />
          {/* nodes */}
          <g className="pv__nodes">
            <circle cx="90" cy="78" r="14" />
            <circle cx="320" cy="60" r="18" />
            <circle cx="550" cy="72" r="14" />
            <circle cx="200" cy="140" r="10" />
            <circle cx="445" cy="142" r="10" />
          </g>
          <g className="pv__links">
            <path d="M90 78 L200 140 L320 60 L445 142 L550 72" />
          </g>
          {/* packets */}
          <circle className="pv__packet pv__p1" cx="0" cy="0" r="3.5" />
          <circle className="pv__packet pv__p2" cx="0" cy="0" r="3.5" />
          <circle className="pv__packet pv__p3" cx="0" cy="0" r="3.5" />
          {/* bars */}
          <g className="pv__bars">
            <rect x="120" y="150" width="10" height="26" rx="2" />
            <rect x="136" y="142" width="10" height="34" rx="2" />
            <rect x="152" y="156" width="10" height="20" rx="2" />
            <rect x="470" y="148" width="10" height="28" rx="2" />
            <rect x="486" y="140" width="10" height="36" rx="2" />
            <rect x="502" y="156" width="10" height="20" rx="2" />
          </g>
          <text className="pv__tag" x="24" y="34">
            TRAFFIC · {title}
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
