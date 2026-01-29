const SaduPattern = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="sadu-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          {/* Traditional Sadu geometric weaving pattern */}
          <path
            d="M0 10 L10 0 L20 10 L10 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M5 5 L15 5 L15 15 L5 15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
          />
          <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3" />
          {/* Triangular accents - Najdi style */}
          <path d="M0 0 L5 0 L0 5 Z" fill="currentColor" opacity="0.2" />
          <path d="M20 0 L20 5 L15 0 Z" fill="currentColor" opacity="0.2" />
          <path d="M0 20 L5 20 L0 15 Z" fill="currentColor" opacity="0.2" />
          <path d="M20 20 L15 20 L20 15 Z" fill="currentColor" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sadu-pattern)" />
    </svg>
  );
};

export default SaduPattern;
