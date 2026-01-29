import { LucideIcon } from "lucide-react";

interface NajdiIconProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const NajdiIcon = ({ icon: Icon, className = "", size = "md" }: NajdiIconProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-7 w-7",
    lg: "h-10 w-10",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} flex items-center justify-center ${className}`}
    >
      {/* Najdi square frame */}
      <div className="absolute inset-0 border border-border rounded-lg bg-muted/50">
        {/* Triangular accent in top-right corner */}
        <div className="absolute -top-px -right-px w-3 h-3 overflow-hidden">
          <div className="absolute top-0 right-0 w-4 h-4 bg-primary transform rotate-45 translate-x-2 -translate-y-2" />
        </div>
      </div>
      <Icon className={`${iconSizes[size]} text-primary relative z-10`} />
    </div>
  );
};

export default NajdiIcon;
