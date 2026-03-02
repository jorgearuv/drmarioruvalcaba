interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = false,
  glow = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`card-premium ${glow ? "card-glow" : ""} ${paddingStyles[padding]} ${
        hover ? "" : "[&]:hover:transform-none [&]:hover:shadow-none [&]:hover:border-navy-200/60"
      } ${className}`}
    >
      {children}
    </div>
  );
}
