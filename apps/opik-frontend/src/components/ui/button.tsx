import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "comet-body-s-accented inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active disabled:bg-muted-gray disabled:opacity-100",
        special:
          "text-primary-foreground disabled:bg-muted-gray bg-[#19A979] hover:bg-[#1E8A66] active:bg-[#1A7557] disabled:opacity-100",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-border bg-background hover:bg-primary-foreground hover:text-foreground active:bg-primary-100 active:text-foreground disabled:text-muted-gray border disabled:border-none disabled:opacity-100",
        secondary:
          "bg-primary-100 text-primary hover:bg-secondary hover:text-primary-hover active:bg-secondary active:text-primary-active disabled:bg-muted-disabled disabled:text-muted-gray dark:text-primary dark:hover:text-primary dark:active:text-primary disabled:border-none disabled:opacity-100 dark:bg-[#232A32] dark:hover:bg-[#2A323A] dark:active:bg-[#323A42]",
        ghost:
          "hover:text-primary-hover active:text-primary-active disabled:text-muted-gray font-normal disabled:opacity-100",
        minimal:
          "text-light-slate hover:text-foreground active:text-foreground disabled:text-muted-gray font-normal disabled:opacity-100",
        link: "text-primary underline-offset-4 hover:underline",
        tableLink:
          "text-foreground hover:text-primary active:text-primary-active disabled:text-muted-gray underline underline-offset-4 disabled:opacity-100",
        dark: "text-primary border-border border bg-[#232A32] hover:bg-[#2A323A] active:bg-[#323A42] disabled:border-none dark:bg-[#232A32] dark:hover:bg-[#2A323A] dark:active:bg-[#323A42]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        "2xs":
          "comet-body-xs-accented h-6 gap-1 px-2 [&>svg]:size-3.5 [&>svg]:shrink-0",
        "3xs": "comet-body-xs h-6 px-2",
        lg: "h-11 px-8",
        icon: "size-10 [&>svg]:size-4 [&>svg]:shrink-0",
        "icon-sm": "size-8 [&>svg]:size-3.5 [&>svg]:shrink-0",
        "icon-lg": "size-11 [&>svg]:size-4 [&>svg]:shrink-0",
        "icon-xs": "size-7 [&>svg]:size-3.5 [&>svg]:shrink-0",
        "icon-2xs": "size-6 [&>svg]:size-3 [&>svg]:shrink-0",
        "icon-3xs": "size-4 [&>svg]:size-3 [&>svg]:shrink-0",
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
