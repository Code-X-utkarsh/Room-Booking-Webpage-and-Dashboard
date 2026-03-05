import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  /** When true, renders at design-system height (52px). Default true. */
  fullHeight?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#3B82F6] text-white hover:bg-[#2563EB] active:bg-[#1D4ED8] focus:ring-[#3B82F6]/30 hover:-translate-y-[1px] active:translate-y-0",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400/30",
  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500/30",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      fullHeight = true,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center font-semibold",
          "transition-all duration-200 ease-in-out",
          "focus:outline-none focus:ring-[3px] focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-60",
          variantStyles[variant],
          className,
        ].join(" ")}
        style={{
          height: fullHeight ? 52 : undefined,
          borderRadius: 12,
          fontSize: 16,
          border: "none",
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

