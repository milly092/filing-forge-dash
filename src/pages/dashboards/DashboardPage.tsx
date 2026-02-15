import { useParams, Link } from "react-router-dom";
import { FileText, Clock, CheckCircle, AlertCircle, Plus, Upload, MessageSquare, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import MetricCard from "@/components/MetricCard";
import ActivityFeed from "@/components/ActivityFeed";
import { Button } from "@/components/ui/button";

interface RoleConfig {
  label: string;
  greeting: string;
  metrics: { title: string; value: number; subtitle: string; trend: "up" | "down" | "neutral" }[];
  actions: { icon: React.ElementType; label: string; desc: string; link: string }[];
}

const roleConfigs: Record<string, RoleConfig> = {
  landlord: {
    label: "Landlord",
    greeting: "Manage your active filings and property cases below.",
    metrics: [
      { title: "Active Filings", value: 12, subtitle: "+3 this week", trend: "up" },
      { title: "Pending Review", value: 5, subtitle: "2 urgent", trend: "neutral" },
      { title: "Closed Cases", value: 34, subtitle: "+8 this month", trend: "up" },
    ],
    actions: [
      { icon: Plus, label: "Start New Filing", desc: "Begin a new eviction or legal filing process.", link: "/filing/start" },
      { icon: Upload, label: "Upload Documents", desc: "Attach supporting documents to an existing filing.", link: "/filing/upload" },
      { icon: MessageSquare, label: "View Messages", desc: "Check updates from court or agency.", link: "#messages" },
    ],
  },
  tenant: {
    label: "Tenant",
    greeting: "View your cases and respond to notices below.",
    metrics: [
      { title: "My Active Cases", value: 3, subtitle: "1 new notice", trend: "neutral" },
      { title: "Notices Received", value: 7, subtitle: "+2 this week", trend: "up" },
      { title: "Resolved Cases", value: 11, subtitle: "All clear", trend: "up" },
    ],
    actions: [
      { icon: FileText, label: "Respond to Notice", desc: "Submit your response to an active notice.", link: "/filing/start" },
      { icon: Upload, label: "Upload Documents", desc: "Attach supporting documents.", link: "/filing/upload" },
      { icon: MessageSquare, label: "View Messages", desc: "Check updates on your cases.", link: "#messages" },
    ],
  },
  court: {
    label: "Court",
    greeting: "Review and manage incoming filings and submissions.",
    metrics: [
      { title: "New Submissions", value: 28, subtitle: "+12 today", trend: "up" },
      { title: "Pending Review", value: 15, subtitle: "5 urgent", trend: "neutral" },
      { title: "Processed Filings", value: 156, subtitle: "+22 this week", trend: "up" },
    ],
    actions: [
      { icon: FileText, label: "Review Submission", desc: "Review and process incoming filings.", link: "/filing/progress" },
      { icon: CheckCircle, label: "Update Filing Status", desc: "Change status on active filings.", link: "#filings" },
      { icon: MessageSquare, label: "Send Notification", desc: "Notify parties about case updates.", link: "#messages" },
    ],
  },
  agency: {
    label: "Agency",
    greeting: "Oversee assigned cases and manage processing.",
    metrics: [
      { title: "Assigned Cases", value: 19, subtitle: "+4 new", trend: "up" },
      { title: "Awaiting Processing", value: 8, subtitle: "3 overdue", trend: "down" },
      { title: "Completed Filings", value: 67, subtitle: "+11 this month", trend: "up" },
    ],
    actions: [
      { icon: Plus, label: "Assign Case", desc: "Assign a new case to your team.", link: "#filings" },
      { icon: CheckCircle, label: "Update Status", desc: "Update processing status on cases.", link: "#filings" },
      { icon: MessageSquare, label: "Team Messages", desc: "Communicate with team and stakeholders.", link: "#messages" },
    ],
  },
};

const sampleActivities = [
  { id: "1", action: "Filing Submitted", detail: "Case #TX-2026-0142 — Eviction Notice", time: "2h ago", status: "completed" as const },
  { id: "2", action: "Document Uploaded", detail: "Lease agreement for Case #TX-2026-0138", time: "5h ago", status: "completed" as const },
  { id: "3", action: "Review Pending", detail: "Case #TX-2026-0145 awaiting court review", time: "1d ago", status: "pending" as const },
  { id: "4", action: "Status Updated", detail: "Case #TX-2026-0130 moved to In Progress", time: "2d ago", status: "in-progress" as const },
];

const DashboardPage = () => {
  const { role } = useParams<{ role: string }>();
  const config = roleConfigs[role || "landlord"];

  if (!config) {
    return <div className="flex min-h-screen items-center justify-center text-foreground">Invalid role</div>;
  }

  const metricIcons = [FileText, Clock, CheckCircle];

  return (
    <DashboardLayout role={role || "landlord"} roleLabel={config.label}>
      <div className="space-y-6">
        {/* Welcome */}
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">{config.greeting}</p>
        </div>

        {/* Metrics */}
        <div className="grid gap-4 sm:grid-cols-3">
          {config.metrics.map((m, i) => (
            <MetricCard key={i} title={m.title} value={m.value} subtitle={m.subtitle} icon={metricIcons[i]} trend={m.trend} />
          ))}
        </div>

        {/* Activity Feed */}
        <ActivityFeed activities={sampleActivities} />

        {/* Quick Actions */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {config.actions.map((a, i) => (
              <Link to={a.link} key={i} className="group rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary mb-3 group-hover:bg-primary transition-colors">
                  <a.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-display font-semibold text-foreground">{a.label}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
