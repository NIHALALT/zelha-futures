interface WaveDividerProps {
  variant?: "wave" | "triangle";
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({
  variant = "wave",
  flip = false,
  className = "",
}: WaveDividerProps) => {
  if (variant === "triangle") {
    // Najd-style symmetric triangular teeth
    return (
      <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}>
        <svg
          className="w-full h-6 md:h-8"
          viewBox="0 0 1200 32"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32 L0,16 L30,32 L60,16 L90,32 L120,16 L150,32 L180,16 L210,32 L240,16 L270,32 L300,16 L330,32 L360,16 L390,32 L420,16 L450,32 L480,16 L510,32 L540,16 L570,32 L600,16 L630,32 L660,16 L690,32 L720,16 L750,32 L780,16 L810,32 L840,16 L870,32 L900,16 L930,32 L960,16 L990,32 L1020,16 L1050,32 L1080,16 L1110,32 L1140,16 L1170,32 L1200,16 L1200,32 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  // Wave variant
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        className="w-full h-12 md:h-16"
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 L0,32 C200,64 400,0 600,32 C800,64 1000,0 1200,32 L1200,64 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
