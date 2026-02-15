import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Building2, Users, Gavel, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const roles = [
  { id: "landlord", label: "Landlord", icon: Building2, desc: "Manage eviction filings and property cases" },
  { id: "tenant", label: "Tenant", icon: Users, desc: "Respond to notices and track your cases" },
  { id: "court", label: "Court", icon: Gavel, desc: "Review submissions and manage case flow" },
  { id: "agency", label: "Agency", icon: Briefcase, desc: "Oversee assigned cases and processing" },
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("landlord");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userRole", selectedRole);
    localStorage.setItem("userName", name || email.split("@")[0] || "User");
    localStorage.setItem("isLoggedIn", "true");
    navigate(`/dashboard/${selectedRole}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-gradient-hero p-12">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-primary-foreground">Texas E-File</span>
        </div>

        <div>
          <h1 className="font-display text-4xl font-extrabold text-primary-foreground leading-tight">
            Streamlined Texas Court E-Filing
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-md">
            Fast, secure, and compliant electronic filing for landlords, tenants, courts, and agencies.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { val: "500+", label: "Active Filings" },
              { val: "4", label: "Role Portals" },
              { val: "99.9%", label: "Uptime" },
              { val: "<5min", label: "Avg Filing Time" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-primary-foreground/10 p-4">
                <p className="font-display text-2xl font-bold text-primary-foreground">{s.val}</p>
                <p className="text-sm text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-primary-foreground/50">© 2026 Texas E-File System</p>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 flex-col items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">Texas E-File</span>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <div className="space-y-1 mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Welcome back</h2>
                <p className="text-sm text-muted-foreground">Sign in to access your dashboard</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Password</label>
                  <Input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5" required />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground">Select Your Role</label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {roles.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setSelectedRole(r.id)}
                        className={`flex items-center gap-2.5 rounded-lg border p-3 text-left transition-all ${
                          selectedRole === r.id
                            ? "border-primary bg-secondary shadow-card-hover"
                            : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                          selectedRole === r.id ? "bg-primary" : "bg-secondary"
                        }`}>
                          <r.icon className={`h-4 w-4 ${selectedRole === r.id ? "text-primary-foreground" : "text-primary"}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{r.label}</p>
                          <p className="text-[11px] text-muted-foreground leading-tight">{r.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 font-semibold">
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <div className="space-y-1 mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Create an account</h2>
                <p className="text-sm text-muted-foreground">Get started with Texas E-File</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Password</label>
                  <Input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5" required />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground">Select Your Role</label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {roles.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setSelectedRole(r.id)}
                        className={`flex items-center gap-2.5 rounded-lg border p-3 text-left transition-all ${
                          selectedRole === r.id
                            ? "border-primary bg-secondary shadow-card-hover"
                            : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                          selectedRole === r.id ? "bg-primary" : "bg-secondary"
                        }`}>
                          <r.icon className={`h-4 w-4 ${selectedRole === r.id ? "text-primary-foreground" : "text-primary"}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{r.label}</p>
                          <p className="text-[11px] text-muted-foreground leading-tight">{r.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 font-semibold">
                  Create Account <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
