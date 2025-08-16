export function StaticWaves() {
  return (
    <div className="fixed inset-0 h-screen w-full overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#761b2b" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#84404b" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#ea6077" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Multiple wave layers for depth */}
        <path
          d="M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z"
          fill="url(#waveGradient)"
          opacity="0.6"
        />
        <path
          d="M0,250 Q400,200 800,250 T1200,250 L1200,400 L0,400 Z"
          fill="url(#waveGradient)"
          opacity="0.4"
        />
        <path
          d="M0,300 Q500,250 1000,300 T1200,300 L1200,400 L0,400 Z"
          fill="url(#waveGradient)"
          opacity="0.2"
        />

        {/* Subtle accent lines */}
        <path
          d="M0,180 Q200,160 400,180 T800,180 T1200,180"
          stroke="rgba(228, 228, 228, 0.1)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0,220 Q300,200 600,220 T1200,220"
          stroke="rgba(228, 228, 228, 0.08)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0,260 Q400,240 800,260 T1200,260"
          stroke="rgba(228, 228, 228, 0.06)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}
