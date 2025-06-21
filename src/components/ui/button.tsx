
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden transform-gpu",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-bengali-gold text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-500",
        destructive: "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1",
        outline: "border-2 border-primary/80 bg-transparent text-primary shadow-md hover:bg-gradient-to-r hover:from-primary/10 hover:to-bengali-gold/10 hover:border-primary hover:shadow-xl hover:scale-105 hover:-translate-y-1 dark:border-bengali-gold/60 dark:text-bengali-gold dark:hover:border-bengali-gold dark:hover:from-bengali-gold/15 dark:hover:to-primary/15",
        secondary: "bg-gradient-to-r from-secondary to-bengali-cream text-primary shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 hover:from-bengali-cream hover:to-secondary",
        ghost: "text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-bengali-gold/10 hover:text-primary hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:text-bengali-gold transition-colors duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-lg font-semibold",
        icon: "h-10 w-10 rounded-lg shadow-lg hover:shadow-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
