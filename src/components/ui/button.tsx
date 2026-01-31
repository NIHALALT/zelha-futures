import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Button variants with hand-tweaked styling for Zelha branding
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-colors duration-200 hover:shadow-md",
  {
    variants: {
      variant: {
        default: "h-10 px-4 py-2 rounded-lg text-sm bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",
        destructive: "h-10 px-4 py-2 rounded-lg text-sm bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "h-10 px-4 py-2 rounded-lg text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "h-10 px-4 py-2 rounded-lg text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "h-10 px-4 py-2 rounded-lg text-sm hover:bg-accent hover:text-accent-foreground",
        link: "h-10 px-4 py-2 text-sm text-primary underline-offset-4 hover:underline",
        hero: "h-11 px-6 py-2 rounded-xl text-base bg-primary text-primary-foreground hover:bg-zelha-green-dark hover:shadow-xl hover:scale-105 font-semibold",
        heroOutline: "h-11 px-6 py-2 rounded-xl text-base border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-semibold",
        accent: "h-10 px-4 py-2 rounded-lg text-sm bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg",
        sand: "h-10 px-4 py-2 rounded-lg text-sm bg-secondary text-secondary-foreground hover:bg-zelha-sand hover:shadow-md",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        xl: "",
        icon: "h-10 w-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Refactored for semantic clarity - using descriptive variable names
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const ComponentToRender = asChild ? Slot : "button";
    const combinedClasses = cn(buttonVariants({ variant, size, className }));
    return <ComponentToRender className={combinedClasses} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
