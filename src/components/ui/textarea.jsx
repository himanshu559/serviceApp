import { cn } from "../../lib/utils";

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
