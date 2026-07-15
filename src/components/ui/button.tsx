import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — design-system primitive mapped to our brand tokens.
 * `asChild` renders the styles onto a child element (e.g. a Next <Link>)
 * so CTAs can be real links while keeping button styling.
 * No motion/animation yet — only static hover/focus states.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-action text-white hover:bg-action-strong",
        ink: "bg-ink text-paper hover:bg-ink/90",
        secondary: "border border-stone-200 bg-transparent text-ink hover:bg-stone-100",
        ghost: "bg-transparent text-ink hover:bg-stone-100",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        default: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
