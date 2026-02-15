import { Link, useLocation } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Product" },
    { to: "/articles", label: "Resources" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">Texas E-File</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/dashboard/landlord">
            <Button variant="outline" size="sm">Dashboard</Button>
          </Link>
          <Link to="/filing/start">
            <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90">
              Start Filing
            </Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card p-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Link to="/dashboard/landlord" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" size="sm" className="w-full">Dashboard</Button>
            </Link>
            <Link to="/filing/start" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full bg-gradient-hero text-primary-foreground">Start Filing</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
