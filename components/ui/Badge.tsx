type BadgeVariant = "teal" | "navy" | "green" | "amber";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  teal: "bg-teal-100 text-teal-800",
  navy: "bg-navy-100 text-navy-800",
  green: "bg-green-100 text-green-800",
  amber: "bg-amber-100 text-amber-800",
};

export default function Badge({
  children,
  variant = "teal",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
