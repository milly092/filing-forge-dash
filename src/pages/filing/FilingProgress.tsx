import { Link } from "react-router-dom";
import { CheckCircle, Clock, Circle, ArrowRight, FileText, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const steps = [
  { label: "Filing Submitted", desc: "Your filing has been submitted to the system.", time: "Feb 15, 2026 — 10:32 AM", status: "done" },
  { label: "Document Review", desc: "Court staff are reviewing your uploaded documents.", time: "Feb 15, 2026 — 11:15 AM", status: "done" },
  { label: "Compliance Check", desc: "Filing is being checked for compliance requirements.", time: "In Progress", status: "current" },
  { label: "Court Processing", desc: "Filing will be processed by the assigned court.", time: "Pending", status: "pending" },
  { label: "Filing Complete", desc: "Your filing has been fully processed and accepted.", time: "Pending", status: "pending" },
];

const statusIcon = (s: string) => {
  if (s === "done") return <CheckCircle className="h-6 w-6 text-success" />;
  if (s === "current") return <Clock className="h-6 w-6 text-primary animate-pulse" />;
  return <Circle className="h-6 w-6 text-muted-foreground/40" />;
};

const FilingProgress = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container max-w-3xl py-12">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-bold text-success-foreground">✓</span>
          <span>Start</span>
          <div className="h-px flex-1 bg-success" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-bold text-success-foreground">✓</span>
          <span>Details</span>
          <div className="h-px flex-1 bg-success" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-bold text-success-foreground">✓</span>
          <span>Upload</span>
          <div className="h-px flex-1 bg-primary" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">4</span>
          <span className="font-medium text-foreground">Progress</span>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-border bg-card p-5 shadow-card">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="font-display text-lg font-bold text-foreground">Case #TX-2026-0142</h2>
        </div>
        <p className="text-sm text-muted-foreground">Smith v. Johnson — Eviction Notice • Harris County</p>
      </div>

      <h1 className="font-display text-3xl font-bold text-foreground">Filing Progress</h1>
      <p className="mt-2 text-muted-foreground">Track your filing through each processing stage.</p>

      <div className="mt-8 space-y-0">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              {statusIcon(s.status)}
              {i < steps.length - 1 && (
                <div className={`h-full w-0.5 my-1 ${s.status === "done" ? "bg-success" : "bg-border"}`} />
              )}
            </div>
            <div className="pb-8">
              <h3 className={`font-display font-semibold ${s.status === "pending" ? "text-muted-foreground" : "text-foreground"}`}>{s.label}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <Link to="/dashboard/landlord">
          <Button variant="outline"><Home className="mr-2 h-4 w-4" /> Back to Dashboard</Button>
        </Link>
        <Link to="/">
          <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90">
            View All Filings <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default FilingProgress;
