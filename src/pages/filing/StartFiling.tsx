import { Link } from "react-router-dom";
import { ArrowRight, FileText, Home, Scale, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const filingTypes = [
  { icon: Home, title: "Eviction Filing", desc: "File for property eviction proceedings.", tag: "Most Common" },
  { icon: Scale, title: "Civil Filing", desc: "General civil case filing for Texas courts.", tag: "" },
  { icon: AlertTriangle, title: "Urgent Filing", desc: "Expedited filing for time-sensitive matters.", tag: "Priority" },
  { icon: FileText, title: "Document Filing", desc: "Submit supplementary documents for existing cases.", tag: "" },
];

const StartFiling = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container max-w-3xl py-12">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
          <span className="font-medium text-foreground">Start Filing</span>
          <div className="h-px flex-1 bg-border" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">2</span>
          <span>Select Type</span>
          <div className="h-px flex-1 bg-border" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">3</span>
          <span>Upload</span>
          <div className="h-px flex-1 bg-border" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">4</span>
          <span>Review</span>
        </div>
      </div>

      <h1 className="font-display text-3xl font-bold text-foreground">Start a New Filing</h1>
      <p className="mt-2 text-muted-foreground">Select the type of filing you'd like to submit to the Texas courts.</p>

      <div className="mt-8 space-y-4">
        {filingTypes.map((f, i) => (
          <Link to="/filing/select-type" key={i} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary group-hover:bg-primary transition-colors">
              <f.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
                {f.tag && <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">{f.tag}</span>}
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default StartFiling;
