import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const h1Variants = cva(" font-heading ", {
  variants: {
    size: {
      default: "text-2xl md:text-4xl",
      large: "text-3xl sm:text-5xl md:text-6xl lg:7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface H1Heading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h1Variants> {}

const H1 = forwardRef<HTMLHeadingElement, H1Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <h1 ref={ref} {...props} className={cn(h1Variants({ size, className }))}>
        {children}
      </h1>
    );
  }
);

H1.displayName = "H1";

export { H1, h1Variants };
