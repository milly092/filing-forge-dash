import { Link } from "react-router-dom";
import { Shield, Target, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container">
        <h1 className="font-display text-4xl font-extrabold text-primary-foreground md:text-5xl">About Texas E-File</h1>
        <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">Modernizing the Texas court filing experience for all stakeholders.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground">Our Mission</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Texas E-File is committed to streamlining the electronic filing process for Texas courts. We provide a secure, efficient, and compliant platform that serves landlords, tenants, court administrators, and agencies — all under one unified system.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Our platform eliminates the hassle of paper filings, reduces processing times, and ensures every stakeholder has the tools they need to manage cases effectively.
        </p>
      </div>
    </section>

    <section className="border-y border-border bg-muted/50 py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Target, title: "Efficiency", desc: "Reduce filing times from days to minutes with our streamlined electronic process." },
            { icon: Shield, title: "Security", desc: "Bank-grade encryption and full compliance with Texas court requirements." },
            { icon: Scale, title: "Compliance", desc: "Built to meet all Texas legal standards for electronic court filings." },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold text-foreground">Ready to File?</h2>
        <p className="mt-3 text-muted-foreground">Get started with Texas E-File today</p>
        <Link to="/filing/start">
          <Button size="lg" className="mt-6 bg-gradient-hero text-primary-foreground hover:opacity-90 font-semibold">
            Start Filing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default About;
