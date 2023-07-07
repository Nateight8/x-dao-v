import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const cardVariants = cva(" font-heading ", {
  variants: {
    size: {
      default: "text-2xl md:text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface TeamCardProp
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardVariants> {}

const TeamCard = forwardRef<HTMLDivElement, TeamCardProp>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(cardVariants({ size, className }))}
      >
        {children}
      </div>
    );
  }
);

TeamCard.displayName = "Card";

export { TeamCard, cardVariants };
