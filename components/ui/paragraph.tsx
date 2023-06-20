import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const pVariants = cva(" tracking-wide font-normal text-gray-400", {
  variants: {
    size: {
      default: "text-base",
      large: "text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface Paragraph
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pVariants> {}

const P = forwardRef<HTMLParagraphElement, Paragraph>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn(pVariants({ size, className }))}>
        {children}
      </p>
    );
  }
);

P.displayName = "H2";

export { P, pVariants };
