import React from "react";

interface AcademyLogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showText?: boolean;
}

export default function AcademyLogo({
  className = "w-10 h-10",
  variant = "gold",
  showText = false,
}: AcademyLogoProps) {
  const isDarkBg = variant === "light" || variant === "gold";

  return (
    <div className="flex items-center gap-3">
      {/* Heraldic Crest SVG */}
      <svg
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Lil-El Academy Crest"
      >
        {/* Outer Shield with Gold Border */}
        <path
          d="M60 6C92 6 112 18 112 48C112 88 78 116 60 124C42 116 8 88 8 48C8 18 28 6 60 6Z"
          fill="#5A0F1D"
          stroke="#D4AF37"
          strokeWidth="4"
        />
        {/* Inner Shield Inset */}
        <path
          d="M60 14C86 14 103 24 103 48C103 82 74 106 60 114C46 106 17 82 17 48C17 24 34 14 60 14Z"
          fill="#4A0C17"
          stroke="#B3862A"
          strokeWidth="1.5"
          opacity="0.8"
        />
        {/* Laurel Left */}
        <path
          d="M32 80C26 68 28 50 36 38"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
        />
        {/* Laurel Right */}
        <path
          d="M88 80C94 68 92 50 84 38"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Central Cross */}
        <path
          d="M60 26V74M46 42H74"
          stroke="#D4AF37"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Open Book of Truth at Base */}
        <path
          d="M40 78C48 76 56 78 60 82C64 78 72 76 80 78V96C72 94 64 96 60 100C56 96 48 94 40 96V78Z"
          fill="#FAF5EB"
          stroke="#D4AF37"
          strokeWidth="2"
        />
        <path
          d="M60 82V100"
          stroke="#B3862A"
          strokeWidth="1.5"
        />

        {/* Star of Brilliance / Wisdom */}
        <path
          d="M60 20L62 25L67 26L63 29L64 34L60 31L56 34L57 29L53 26L58 25L60 20Z"
          fill="#FAF5EB"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-heading font-bold text-lg leading-tight tracking-wide ${
              isDarkBg ? "text-white" : "text-[#5A0F1D]"
            }`}
          >
            LIL-EL ACADEMY
          </span>
          <span
            className={`text-[11px] font-medium tracking-wider uppercase ${
              isDarkBg ? "text-[#D4AF37]" : "text-[#163A24]"
            }`}
          >
            Christian Supplementary School
          </span>
        </div>
      )}
    </div>
  );
}
