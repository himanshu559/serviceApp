import * as React from "react";
import { cn } from "../../lib/utils";

export function Switch({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition",
        checked ? "bg-primary" : "bg-muted"
      )}
    >
      <span
        className={cn(
          "inline-block h-5 w-5 rounded-full bg-white transition",
          checked ? "translate-x-5" : "translate-x-1"
        )}
      />
    </button>
  );
}
