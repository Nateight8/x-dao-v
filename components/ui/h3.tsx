import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const h3Variants = cva("text-slate-100 font-medium ", {
  variants: {
    size: {
      default: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface H3Heading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h3Variants> {}

const H3 = forwardRef<HTMLHeadingElement, H3Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <h3 ref={ref} {...props} className={cn(h3Variants({ size, className }))}>
        {children}
      </h3>
    );
  }
);

H3.displayName = "H3";

export { H3, h3Variants };
