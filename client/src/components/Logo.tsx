interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-sm' },
    md: { icon: 48, text: 'text-base' },
    lg: { icon: 72, text: 'text-xl' }
  };

  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <circle cx="50" cy="38" r="12" fill="#f5e6d0" opacity="0.6" />
        
        <g transform="translate(50, 38) rotate(-45)">
          <path
            d="M0 -8 L2 -35 L0 -38 L-2 -35 Z"
            fill="#cfa15a"
          />
          <ellipse cx="0" cy="-20" rx="3" ry="12" fill="#8B5A2B" opacity="0.3" />
          <path d="M-2 -18 Q-6 -22 -4 -28" stroke="#cfa15a" strokeWidth="1.5" fill="none" />
          <path d="M2 -18 Q6 -22 4 -28" stroke="#cfa15a" strokeWidth="1.5" fill="none" />
          <path d="M-2 -22 Q-5 -25 -3 -30" stroke="#cfa15a" strokeWidth="1.2" fill="none" />
          <path d="M2 -22 Q5 -25 3 -30" stroke="#cfa15a" strokeWidth="1.2" fill="none" />
        </g>
        
        <g transform="translate(50, 38) rotate(45)">
          <path
            d="M0 -8 L2 -35 L0 -38 L-2 -35 Z"
            fill="#cfa15a"
          />
          <ellipse cx="0" cy="-20" rx="3" ry="12" fill="#8B5A2B" opacity="0.3" />
          <path d="M-2 -18 Q-6 -22 -4 -28" stroke="#cfa15a" strokeWidth="1.5" fill="none" />
          <path d="M2 -18 Q6 -22 4 -28" stroke="#cfa15a" strokeWidth="1.5" fill="none" />
          <path d="M-2 -22 Q-5 -25 -3 -30" stroke="#cfa15a" strokeWidth="1.2" fill="none" />
          <path d="M2 -22 Q5 -25 3 -30" stroke="#cfa15a" strokeWidth="1.2" fill="none" />
        </g>

        <g transform="translate(50, 38) rotate(-135)">
          <path
            d="M0 -8 L2 -35 L0 -38 L-2 -35 Z"
            fill="#cfa15a"
          />
          <ellipse cx="0" cy="-20" rx="3" ry="12" fill="#8B5A2B" opacity="0.3" />
          <path d="M-2 -18 Q-6 -22 -4 -28" stroke="#cfa15a" strokeWidth="1.5" fill="none" />
          <path d="M2 -18 Q6 -22 4 -28" stroke="#cfa15a" strokeWidth="1.5" fill="none" />
          <path d="M-2 -22 Q-5 -25 -3 -30" stroke="#cfa15a" strokeWidth="1.2" fill="none" />
          <path d="M2 -22 Q5 -25 3 -30" stroke="#cfa15a" strokeWidth="1.2" fill="none" />
        </g>
        
        <g transform="translate(50, 38) rotate(135)">
          <path
            d="M0 -8 L2 -35 L0 -38 L-2 -35 Z"
            fill="#cfa15a"
          />
          <ellipse cx="0" cy="-20" rx="3" ry="12" fill="#8B5A2B" opacity="0.3" />
          <path d="M-2 -18 Q-6 -22 -4 -28" stroke="#cfa15a" strokeWidth="1.5" fill="none" />
          <path d="M2 -18 Q6 -22 4 -28" stroke="#cfa15a" strokeWidth="1.5" fill="none" />
          <path d="M-2 -22 Q-5 -25 -3 -30" stroke="#cfa15a" strokeWidth="1.2" fill="none" />
          <path d="M2 -22 Q5 -25 3 -30" stroke="#cfa15a" strokeWidth="1.2" fill="none" />
        </g>

        <circle cx="50" cy="38" r="5" fill="#cfa15a" />
        <circle cx="50" cy="38" r="3" fill="#8B5A2B" />

        <path
          d="M42 42 L40 80 Q40 85 50 85 Q60 85 60 80 L58 42 Z"
          fill="#e8d4be"
          stroke="#8B5A2B"
          strokeWidth="1.5"
        />
        
        <path
          d="M45 50 L45 75"
          stroke="#d4c4ae"
          strokeWidth="2"
        />
        <path
          d="M55 50 L55 75"
          stroke="#d4c4ae"
          strokeWidth="2"
        />
        
        <path
          d="M47 55 Q50 52 53 55"
          fill="#8B5A2B"
        />
        
        <rect x="45" y="60" width="10" height="14" rx="1" fill="#7c9a47" opacity="0.8" />

        <path
          d="M32 85 Q50 82 68 85"
          stroke="#8B5A2B"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M28 88 Q50 84 72 88"
          stroke="#8B5A2B"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span 
            className={`font-heading font-semibold tracking-wide text-foreground ${text}`}
            style={{ letterSpacing: '0.12em' }}
          >
            TRUE ORGANIC
          </span>
          <span 
            className="text-xs tracking-[0.3em] text-muted-foreground uppercase"
            style={{ fontSize: size === 'sm' ? '0.6rem' : size === 'md' ? '0.7rem' : '0.85rem' }}
          >
            FARMS
          </span>
        </div>
      )}
    </div>
  );
}
