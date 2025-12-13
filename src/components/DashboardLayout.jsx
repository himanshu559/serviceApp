import { Link } from "react-router-dom";
import { Icons } from "./icons";
import { cn } from "../lib/utils";

export default function DashboardLayout({
  children,
  navItems = [],
  currentPath = "",
}) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-border hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icons.Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">QuickServe</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = Icons[item.icon];
            const isActive = currentPath === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6">
          <p className="font-medium">Provider Panel</p>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Icons.User className="w-5 h-5 text-primary" />
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
