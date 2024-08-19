import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: " flex items-center text-center text-sm md:text-base font-normal",
        orange:
          "bg-secondar border-2 border-transparent hover:border-secondar hover:bg-white hover:text-secondar duration-300 transition-all text-white text-center text-xs mb:text-sm  md:text-base font-normal leading-normal",
        blue:
          "bg-[#0C68F4] text-white text-sm font-normal md:text-base ",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: "w-[100px] h-12 py-1 px-2 ",
        sm: "h-10 sm:h-12 rounded-lg p-2 sm:px-4 sm:py-[14px]",
        lg: "sm:h-12 sm:px-8 lg:min-h-[56px] lg:w-[288px] rounded-md  px-4 py-2",
        icon: "h-10 w-10 py-2 px-4 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
