import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">Texas E-File</span>
          </div>
          <p className="text-sm text-muted-foreground">Streamlined electronic filing for Texas courts. Fast, secure, and compliant.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Platform</h4>
          <div className="flex flex-col gap-2">
            <Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product</Link>
            <Link to="/filing/start" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Start Filing</Link>
            <Link to="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Dashboards</h4>
          <div className="flex flex-col gap-2">
            <Link to="/dashboard/landlord" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Landlord</Link>
            <Link to="/dashboard/tenant" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tenant</Link>
            <Link to="/dashboard/court" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Court</Link>
            <Link to="/dashboard/agency" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Agency</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
            <span className="text-sm text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 Texas E-File System. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
