import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Clock, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Electronic filing in minutes",
  "Role-based access for all stakeholders",
  "Real-time case tracking and notifications",
  "Secure document storage",
  "Full Texas court compliance",
  "Multi-step workflow management",
];

const ProductDetail = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container">
        <h1 className="font-display text-4xl font-extrabold text-primary-foreground md:text-5xl">Texas E-Filing Platform</h1>
        <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
          A comprehensive electronic filing system designed for Texas courts, landlords, tenants, and agencies.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground">Why Choose Texas E-File?</h2>
          <p className="mt-4 text-muted-foreground">Our platform streamlines the entire filing process from start to finish, with dedicated dashboards for every role.</p>
          <ul className="mt-8 space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                  <Check className="h-3.5 w-3.5 text-success" />
                </div>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: ShieldCheck, title: "Compliance", desc: "Built for Texas court requirements" },
            { icon: Clock, title: "Speed", desc: "File in minutes, not days" },
            { icon: BarChart3, title: "Analytics", desc: "Track all filing metrics" },
            { icon: Lock, title: "Security", desc: "Bank-grade encryption" },
          ].map((c, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <c.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-display font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-muted/50 py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold text-foreground">Start Filing Today</h2>
        <p className="mt-3 text-muted-foreground">Experience the future of Texas court filing</p>
        <Link to="/filing/start">
          <Button size="lg" className="mt-6 bg-gradient-hero text-primary-foreground hover:opacity-90 font-semibold">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default ProductDetail;
