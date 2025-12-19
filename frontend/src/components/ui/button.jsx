import * as React from "react";
import { cn } from "../../lib/utils";

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" && "border border-border bg-transparent hover:bg-muted",
        variant === "ghost" && "hover:bg-muted",
        size === "sm" && "h-9 px-3",
        size === "default" && "h-10 px-4",
        size === "lg" && "h-11 px-8",
        className
      )}
      {...props}
    />
  );
}
