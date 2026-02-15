import { Clock } from "lucide-react";

interface Activity {
  id: string;
  action: string;
  detail: string;
  time: string;
  status: "completed" | "pending" | "in-progress";
}

interface ActivityFeedProps {
  activities: Activity[];
}

const statusStyles: Record<string, string> = {
  completed: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  "in-progress": "bg-info/10 text-info",
};

const ActivityFeed = ({ activities }: ActivityFeedProps) => (
  <div className="rounded-xl border border-border bg-card shadow-card">
    <div className="border-b border-border px-5 py-4">
      <h3 className="font-display font-semibold text-foreground">Recent Activity</h3>
    </div>
    <div className="divide-y divide-border">
      {activities.map((a) => (
        <div key={a.id} className="flex items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{a.action}</p>
              <p className="text-xs text-muted-foreground">{a.detail}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[a.status]}`}>
              {a.status.replace("-", " ")}
            </span>
            <span className="text-xs text-muted-foreground">{a.time}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;
