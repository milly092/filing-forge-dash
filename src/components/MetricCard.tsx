import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
}

const MetricCard = ({ title, value, subtitle, icon: Icon, trend }: MetricCardProps) => (
  <div className="rounded-xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover animate-count-up">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="mt-1 font-display text-3xl font-bold text-foreground">{value}</p>
        {subtitle && (
          <p className={`mt-1 text-xs font-medium ${
            trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground"
          }`}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
        <Icon className="h-5 w-5 text-primary" />
      </div>
    </div>
  </div>
);

export default MetricCard;
