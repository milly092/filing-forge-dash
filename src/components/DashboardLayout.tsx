import { Link, useLocation } from "react-router-dom";
import { FileText, LayoutDashboard, FolderOpen, MessageSquare, Settings, Bell, User, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  role: string;
  roleLabel: string;
  children: React.ReactNode;
}

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", path: "" },
  { icon: FolderOpen, label: "My Filings", path: "#filings" },
  { icon: FileText, label: "Documents", path: "#documents" },
  { icon: MessageSquare, label: "Messages", path: "#messages" },
  { icon: Settings, label: "Settings", path: "#settings" },
];

const DashboardLayout = ({ role, roleLabel, children }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <FileText className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          <span className="font-display font-bold text-sidebar-foreground">Texas E-File</span>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {sidebarLinks.map((item) => (
            <Link
              key={item.label}
              to={`/dashboard/${role}${item.path}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Top Bar */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">{roleLabel} Dashboard</h2>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
            </Button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
              <User className="h-4 w-4 text-secondary-foreground" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
