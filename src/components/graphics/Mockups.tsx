/**
 * Vector interface mockups for the homepage showcase.
 *
 * These are lightweight, on-brand SVG representations of the kinds of
 * interfaces built for clients. To use a real screenshot instead, drop the
 * image into /public and swap the component for a <img>/next Image in
 * WorkShowcase.tsx — the card layout stays the same.
 */

type MockupProps = { className?: string };

export function BrowserStorefront({ className }: MockupProps) {
  return (
    <svg
      viewBox="0 0 640 404"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Shopify Plus storefront interface"
    >
      <defs>
        <linearGradient id="sfHero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00ff87" />
          <stop offset="0.55" stopColor="#12c98a" />
          <stop offset="1" stopColor="#6d4caf" />
        </linearGradient>
        <linearGradient id="sfCard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a1a24" />
          <stop offset="1" stopColor="#12121a" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="638" height="402" rx="14" fill="#0c0c12" stroke="rgba(255,255,255,0.08)" />
      <path d="M1 15 A14 14 0 0 1 15 1 H625 A14 14 0 0 1 639 15 V38 H1 Z" fill="#16161e" />
      <circle cx="22" cy="20" r="4.5" fill="#c95f52" />
      <circle cx="39" cy="20" r="4.5" fill="#d98b3a" />
      <circle cx="56" cy="20" r="4.5" fill="#00ff87" />
      <rect x="210" y="12" width="220" height="16" rx="8" fill="#0a0a0a" />
      <text x="320" y="24" textAnchor="middle" fill="#6b6b76" fontFamily="monospace" fontSize="9">
        akshay-commerce.store
      </text>
      <text x="24" y="66" fill="#ffffff" fontFamily="sans-serif" fontWeight="700" fontSize="14">
        LUXE
      </text>
      <rect x="360" y="59" width="34" height="7" rx="3.5" fill="rgba(255,255,255,0.16)" />
      <rect x="406" y="59" width="34" height="7" rx="3.5" fill="rgba(255,255,255,0.16)" />
      <rect x="452" y="59" width="34" height="7" rx="3.5" fill="rgba(255,255,255,0.16)" />
      <circle cx="612" cy="62" r="9" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <rect x="24" y="104" width="70" height="9" rx="4.5" fill="#00ff87" opacity="0.85" />
      <rect x="24" y="126" width="220" height="16" rx="4" fill="rgba(255,255,255,0.85)" />
      <rect x="24" y="150" width="180" height="16" rx="4" fill="rgba(255,255,255,0.85)" />
      <rect x="24" y="182" width="240" height="7" rx="3.5" fill="rgba(255,255,255,0.14)" />
      <rect x="24" y="196" width="200" height="7" rx="3.5" fill="rgba(255,255,255,0.14)" />
      <rect x="24" y="222" width="120" height="34" rx="17" fill="#00ff87" />
      <text x="84" y="243" textAnchor="middle" fill="#06231a" fontFamily="sans-serif" fontWeight="700" fontSize="11">
        Shop now
      </text>
      <rect x="330" y="104" width="286" height="150" rx="14" fill="url(#sfHero)" />
      <circle cx="360" cy="134" r="16" fill="#0a0a0a" opacity="0.2" />
      <rect x="566" y="118" width="40" height="20" rx="10" fill="#0a0a0a" opacity="0.35" />
      <text x="586" y="132" textAnchor="middle" fill="#ffffff" fontFamily="sans-serif" fontSize="9" fontWeight="700">
        NEW
      </text>
      {[24, 230, 436].map((x, i) => (
        <g key={x}>
          <rect x={x} y="278" width="180" height="112" rx="12" fill="url(#sfCard)" stroke="rgba(255,255,255,0.06)" />
          <rect
            x={x + 12}
            y="290"
            width="156"
            height="58"
            rx="8"
            fill={["#12c98a", "#6d4caf", "#c95f52"][i]}
            opacity="0.3"
          />
          <rect x={x + 12} y="356" width="90" height="7" rx="3.5" fill="rgba(255,255,255,0.5)" />
          <rect x={x + 12} y="370" width="50" height="7" rx="3.5" fill="rgba(255,255,255,0.16)" />
          <text x={x + 168} y="376" textAnchor="end" fill="#00ff87" fontFamily="monospace" fontSize="10" fontWeight="700">
            ${[128, 96, 214][i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function PhonePDP({ className }: MockupProps) {
  return (
    <svg
      viewBox="0 0 260 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Headless mobile product page"
    >
      <defs>
        <linearGradient id="phImg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d4caf" />
          <stop offset="1" stopColor="#c95f52" />
        </linearGradient>
      </defs>
      <rect x="14" y="6" width="232" height="488" rx="40" fill="#0e0e15" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
      <rect x="26" y="18" width="208" height="464" rx="30" fill="#0b0b11" />
      <rect x="106" y="24" width="48" height="10" rx="5" fill="#000000" />
      <path d="M44 58 l-8 6 l8 6" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="104" y="56" width="52" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="214" cy="61" r="7" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" />
      <rect x="40" y="82" width="180" height="180" rx="18" fill="url(#phImg)" opacity="0.9" />
      <circle cx="108" cy="248" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="120" cy="248" r="3" fill="#ffffff" />
      <circle cx="132" cy="248" r="3" fill="rgba(255,255,255,0.3)" />
      <rect x="40" y="284" width="150" height="12" rx="4" fill="rgba(255,255,255,0.8)" />
      <rect x="40" y="304" width="96" height="9" rx="4" fill="rgba(255,255,255,0.2)" />
      <text x="40" y="345" fill="#00ff87" fontFamily="sans-serif" fontWeight="700" fontSize="20">
        $128.00
      </text>
      {[40, 86, 132, 178].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="362"
          width="36"
          height="30"
          rx="8"
          fill={i === 1 ? "rgba(0,255,135,0.15)" : "transparent"}
          stroke={i === 1 ? "#00ff87" : "rgba(255,255,255,0.18)"}
          strokeWidth="1.4"
        />
      ))}
      <rect x="40" y="410" width="180" height="42" rx="21" fill="#00ff87" />
      <text x="130" y="437" textAnchor="middle" fill="#06231a" fontFamily="sans-serif" fontWeight="700" fontSize="13">
        Add to cart
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <text key={i} x={44 + i * 15} y="475" fill={i < 4 ? "#c95f52" : "rgba(255,255,255,0.2)"} fontSize="13">
          ★
        </text>
      ))}
    </svg>
  );
}

export function AnalyticsDashboard({ className }: MockupProps) {
  const bars = [70, 110, 90, 132, 152];
  return (
    <svg
      viewBox="0 0 460 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Commerce analytics dashboard"
    >
      <defs>
        <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00ff87" stopOpacity="0.45" />
          <stop offset="1" stopColor="#00ff87" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="458" height="318" rx="14" fill="#0c0c12" stroke="rgba(255,255,255,0.08)" />
      <rect x="1" y="1" width="52" height="318" rx="14" fill="#101019" />
      <rect x="39" y="1" width="14" height="318" fill="#101019" />
      <circle cx="27" cy="34" r="9" fill="#00ff87" opacity="0.9" />
      {[80, 116, 152, 188].map((y) => (
        <rect key={y} x="18" y={y} width="18" height="10" rx="3" fill="rgba(255,255,255,0.14)" />
      ))}
      <rect x="72" y="24" width="120" height="10" rx="5" fill="rgba(255,255,255,0.7)" />
      <circle cx="436" cy="30" r="10" fill="#1a1a24" />
      {[
        { x: 72, c: "#00ff87", v: "+34%", w: 62 },
        { x: 204, c: "#6d4caf", v: "1.1s", w: 52 },
        { x: 336, c: "#c95f52", v: "$92k", w: 58 },
      ].map((t) => (
        <g key={t.x}>
          <rect x={t.x} y="52" width="112" height="60" rx="10" fill="#12121a" stroke="rgba(255,255,255,0.06)" />
          <text x={t.x + 14} y="84" fill={t.c} fontFamily="sans-serif" fontWeight="700" fontSize="18">
            {t.v}
          </text>
          <rect x={t.x + 14} y="94" width={t.w} height="6" rx="3" fill="rgba(255,255,255,0.18)" />
        </g>
      ))}
      <rect x="72" y="128" width="240" height="168" rx="10" fill="#101019" stroke="rgba(255,255,255,0.06)" />
      <path
        d="M88 250 L120 232 L152 240 L184 210 L216 218 L248 186 L296 196 L296 284 L88 284 Z"
        fill="url(#dashArea)"
      />
      <path
        d="M88 250 L120 232 L152 240 L184 210 L216 218 L248 186 L296 196"
        fill="none"
        stroke="#00ff87"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="324" y="128" width="124" height="168" rx="10" fill="#101019" stroke="rgba(255,255,255,0.06)" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={340 + i * 20}
          y={284 - h}
          width="12"
          height={h}
          rx="3"
          fill={i % 2 ? "#6d4caf" : "#00ff87"}
          opacity="0.85"
        />
      ))}
    </svg>
  );
}

export function OpsTable({ className }: MockupProps) {
  const rows = [
    { s: "AX-1024", q: "120", p: "$3,480" },
    { s: "AX-2210", q: "64", p: "$1,920" },
    { s: "AX-3078", q: "200", p: "$5,000" },
    { s: "AX-4501", q: "48", p: "$1,344" },
  ];
  const dot = ["#00ff87", "#6d4caf", "#c95f52", "#00ff87"];
  return (
    <svg
      viewBox="0 0 460 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="B2B quick order portal"
    >
      <rect x="1" y="1" width="458" height="318" rx="14" fill="#0c0c12" stroke="rgba(255,255,255,0.08)" />
      <rect x="24" y="24" width="120" height="11" rx="5" fill="rgba(255,255,255,0.75)" />
      <rect x="384" y="20" width="52" height="20" rx="10" fill="rgba(109,76,175,0.18)" stroke="#6d4caf" strokeWidth="1" />
      <text x="410" y="34" textAnchor="middle" fill="#8f6fd6" fontFamily="monospace" fontSize="9" fontWeight="700">
        B2B
      </text>
      <text x="24" y="66" fill="rgba(255,255,255,0.35)" fontFamily="monospace" fontSize="9">
        SKU
      </text>
      <text x="250" y="66" fill="rgba(255,255,255,0.35)" fontFamily="monospace" fontSize="9">
        QTY
      </text>
      <text x="436" y="66" textAnchor="end" fill="rgba(255,255,255,0.35)" fontFamily="monospace" fontSize="9">
        PRICE
      </text>
      <line x1="24" y1="74" x2="436" y2="74" stroke="rgba(255,255,255,0.08)" />
      {rows.map((r, i) => {
        const y = 96 + i * 38;
        return (
          <g key={r.s}>
            {i % 2 === 0 && <rect x="22" y={y - 16} width="416" height="30" rx="6" fill="#101019" />}
            <circle cx="34" cy={y - 1} r="4" fill={dot[i]} />
            <text x="48" y={y + 3} fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontSize="11">
              {r.s}
            </text>
            <rect x="244" y={y - 12} width="44" height="22" rx="6" fill="#15151d" stroke="rgba(255,255,255,0.1)" />
            <text x="266" y={y + 3} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="monospace" fontSize="10">
              {r.q}
            </text>
            <text x="436" y={y + 3} textAnchor="end" fill="rgba(255,255,255,0.85)" fontFamily="monospace" fontSize="11">
              {r.p}
            </text>
          </g>
        );
      })}
      <line x1="24" y1="256" x2="436" y2="256" stroke="rgba(255,255,255,0.08)" />
      <text x="24" y="285" fill="rgba(255,255,255,0.5)" fontFamily="monospace" fontSize="11">
        Total
      </text>
      <text x="150" y="286" fill="#00ff87" fontFamily="sans-serif" fontWeight="700" fontSize="15">
        $11,744
      </text>
      <rect x="330" y="268" width="106" height="30" rx="15" fill="#00ff87" />
      <text x="383" y="288" textAnchor="middle" fill="#06231a" fontFamily="sans-serif" fontWeight="700" fontSize="11">
        Submit order
      </text>
    </svg>
  );
}
