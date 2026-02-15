import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, FileCheck, Building2, Gavel, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  { icon: Zap, title: "Fast Filing", desc: "Submit filings electronically in minutes, not hours." },
  { icon: Shield, title: "Secure & Compliant", desc: "Bank-grade encryption and full Texas court compliance." },
  { icon: Users, title: "Role-Based Access", desc: "Dedicated portals for landlords, tenants, courts, and agencies." },
  { icon: FileCheck, title: "Track Progress", desc: "Real-time status updates throughout the filing process." },
];

const roles = [
  { icon: Building2, title: "Landlord", desc: "Manage eviction filings and property cases.", link: "/dashboard/landlord" },
  { icon: Users, title: "Tenant", desc: "Respond to notices and track your cases.", link: "/dashboard/tenant" },
  { icon: Gavel, title: "Court", desc: "Review submissions and manage case flow.", link: "/dashboard/court" },
  { icon: Briefcase, title: "Agency", desc: "Oversee assigned cases and processing.", link: "/dashboard/agency" },
];

const steps = [
  { num: "01", title: "Create Filing", desc: "Select your filing type and enter case details." },
  { num: "02", title: "Upload Documents", desc: "Attach supporting documents and notices." },
  { num: "03", title: "Track Progress", desc: "Monitor your filing through each stage to completion." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-hero py-24 md:py-32">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Texas Court E-Filing Platform
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Streamlined Texas E-Filing System
            </h1>
            <p className="mt-5 max-w-lg text-lg text-primary-foreground/80">
              Fast, secure, and compliant electronic filing for Texas courts. Manage cases with role-based dashboards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/filing/start">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                  Start Filing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/product">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img src={heroImage} alt="Texas E-Filing Platform" className="rounded-2xl shadow-elevated" />
          </div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl font-bold text-foreground">How It Works</h2>
          <p className="mt-3 text-muted-foreground">Three simple steps to file electronically</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-xl border border-border bg-card p-6 shadow-card animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <span className="font-display text-4xl font-extrabold text-primary/15">{s.num}</span>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="border-y border-border bg-muted/50 py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl font-bold text-foreground">Key Features</h2>
          <p className="mt-3 text-muted-foreground">Everything you need for electronic filing</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6 text-center shadow-card transition-shadow hover:shadow-card-hover animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Roles */}
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl font-bold text-foreground">Who It's For</h2>
          <p className="mt-3 text-muted-foreground">Tailored experiences for every stakeholder</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => (
            <Link to={r.link} key={i} className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <r.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                View Dashboard <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground">Ready to Get Started?</h2>
        <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">
          Begin your electronic filing today. Fast, secure, and fully compliant with Texas courts.
        </p>
        <Link to="/filing/start">
          <Button size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
            Start Your Filing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
