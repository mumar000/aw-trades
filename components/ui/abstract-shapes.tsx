"use client";

export default function AbstractShapes() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden bg-[#050505]">
      {/* Container for shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 1400 200"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grid lines - horizontal */}
          <line
            x1="0"
            y1="50"
            x2="1400"
            y2="50"
            stroke="#fec5c6"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="100"
            x2="1400"
            y2="100"
            stroke="#fec5c6"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="150"
            x2="1400"
            y2="150"
            stroke="#fec5c6"
            strokeOpacity="0.05"
            strokeWidth="1"
          />

          {/* Trading line chart - main line */}
          <path
            d="M0 150 Q100 140, 150 120 T300 100 T450 130 T600 80 T750 90 T900 60 T1050 70 T1200 40 T1400 50"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Glow effect for the line */}
          <path
            d="M0 150 Q100 140, 150 120 T300 100 T450 130 T600 80 T750 90 T900 60 T1050 70 T1200 40 T1400 50"
            fill="none"
            stroke="#fec5c6"
            strokeWidth="8"
            strokeLinecap="round"
            strokeOpacity="0.1"
            filter="url(#glow)"
          />

          {/* Area fill under the line */}
          <path
            d="M0 150 Q100 140, 150 120 T300 100 T450 130 T600 80 T750 90 T900 60 T1050 70 T1200 40 T1400 50 L1400 200 L0 200 Z"
            fill="url(#areaGradient)"
          />

          {/* Candlesticks scattered */}
          {/* Candle 1 */}
          <rect x="200" y="85" width="4" height="30" fill="#fec5c6" fillOpacity="0.3" rx="1" />
          <line x1="202" y1="80" x2="202" y2="120" stroke="#fec5c6" strokeOpacity="0.3" strokeWidth="1" />

          {/* Candle 2 */}
          <rect x="350" y="95" width="4" height="25" fill="#fec5c6" fillOpacity="0.2" rx="1" />
          <line x1="352" y1="90" x2="352" y2="125" stroke="#fec5c6" strokeOpacity="0.2" strokeWidth="1" />

          {/* Candle 3 */}
          <rect x="550" y="70" width="4" height="35" fill="#fec5c6" fillOpacity="0.25" rx="1" />
          <line x1="552" y1="65" x2="552" y2="110" stroke="#fec5c6" strokeOpacity="0.25" strokeWidth="1" />

          {/* Candle 4 */}
          <rect x="800" y="55" width="4" height="28" fill="#fec5c6" fillOpacity="0.3" rx="1" />
          <line x1="802" y1="50" x2="802" y2="88" stroke="#fec5c6" strokeOpacity="0.3" strokeWidth="1" />

          {/* Candle 5 */}
          <rect x="1000" y="60" width="4" height="32" fill="#fec5c6" fillOpacity="0.2" rx="1" />
          <line x1="1002" y1="55" x2="1002" y2="97" stroke="#fec5c6" strokeOpacity="0.2" strokeWidth="1" />

          {/* Candle 6 */}
          <rect x="1150" y="35" width="4" height="30" fill="#fec5c6" fillOpacity="0.25" rx="1" />
          <line x1="1152" y1="30" x2="1152" y2="70" stroke="#fec5c6" strokeOpacity="0.25" strokeWidth="1" />

          {/* Data points / dots on line */}
          <circle cx="150" cy="120" r="4" fill="#fec5c6" fillOpacity="0.5" />
          <circle cx="450" cy="130" r="3" fill="#fec5c6" fillOpacity="0.4" />
          <circle cx="750" cy="90" r="4" fill="#fec5c6" fillOpacity="0.5" />
          <circle cx="1050" cy="70" r="3" fill="#fec5c6" fillOpacity="0.4" />

          {/* Geometric shapes */}
          {/* Triangle */}
          <polygon
            points="100,160 120,130 140,160"
            fill="none"
            stroke="#fec5c6"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          {/* Diamond */}
          <polygon
            points="1250,100 1270,80 1290,100 1270,120"
            fill="none"
            stroke="#fec5c6"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          {/* Small circles */}
          <circle cx="650" cy="150" r="15" fill="none" stroke="#fec5c6" strokeOpacity="0.1" strokeWidth="1" />
          <circle cx="950" cy="140" r="10" fill="none" stroke="#fec5c6" strokeOpacity="0.08" strokeWidth="1" />

          {/* Dashed trend line */}
          <line
            x1="100"
            y1="160"
            x2="1300"
            y2="30"
            stroke="#fec5c6"
            strokeOpacity="0.1"
            strokeWidth="1"
            strokeDasharray="8 8"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fec5c6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#fec5c6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fec5c6" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fec5c6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fec5c6" stopOpacity="0" />
            </linearGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
}
