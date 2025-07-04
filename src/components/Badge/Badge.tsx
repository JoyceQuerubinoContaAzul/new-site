import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

const badgeVariants = cva(
  "inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        solid: "bg-[#1b69c8] text-white text-lg [font-family:'Ping_Pong-Bold',Helvetica] p-3 pr-8 font-bold",
        outline: "text-gray-600 font-normal",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

type BadgeProps = {
  text: string;
  icon?: React.ReactNode | string;
  asChild?: boolean;
  className?: string;
  iconAlt?: string;
  iconSize?: number;
} & VariantProps<typeof badgeVariants> & React.ComponentPropsWithoutRef<"span">;

export function Badge({
  text,
  icon,
  variant,
  asChild = false,
  className,
  iconAlt = "Ícone",
  iconSize = 24,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {icon && (
        <span className="flex items-center justify-center w-8 h-8">
          {typeof icon === "string" ? (
            <Image src={icon} alt={iconAlt} width={iconSize} height={iconSize} />
          ) : (
            icon
          )}
        </span>
      )}
      <span>{text}</span>
    </Comp>
  );
}
