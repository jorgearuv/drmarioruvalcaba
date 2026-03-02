import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-500 hover:to-teal-600 shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/25 hover:-translate-y-0.5",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20 hover:-translate-y-0.5",
  outline:
    "border border-navy-200 text-navy-700 hover:border-teal-400 hover:text-teal-700 hover:shadow-lg hover:-translate-y-0.5",
  whatsapp:
    "bg-gradient-to-br from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 shadow-lg shadow-green-500/20 hover:shadow-xl hover:-translate-y-0.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-10 py-4.5 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 rounded-2xl font-semibold transition-all duration-300 cursor-pointer";
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={combinedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
