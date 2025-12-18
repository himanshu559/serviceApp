import * as React from "react";
import { cn } from "../../lib/utils";

const TabsContext = React.createContext();

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      {children}
    </TabsContext.Provider>
  );
}

export function TabsList({ className, children }) {
  return <div className={cn("flex gap-2", className)}>{children}</div>;
}

export function TabsTrigger({ value, children }) {
  const ctx = React.useContext(TabsContext);
  const active = ctx.value === value;

  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={cn(
        "px-4 py-2 rounded-md text-sm",
        active ? "bg-primary text-primary-foreground" : "bg-muted"
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  const ctx = React.useContext(TabsContext);
  return ctx.value === value ? <div>{children}</div> : null;
}
