import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SelectFilingType = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container max-w-3xl py-12">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-bold text-success-foreground">✓</span>
          <span>Start</span>
          <div className="h-px flex-1 bg-primary" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
          <span className="font-medium text-foreground">Details</span>
          <div className="h-px flex-1 bg-border" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">3</span>
          <span>Upload</span>
          <div className="h-px flex-1 bg-border" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">4</span>
          <span>Review</span>
        </div>
      </div>

      <h1 className="font-display text-3xl font-bold text-foreground">Filing Details</h1>
      <p className="mt-2 text-muted-foreground">Provide the details for your filing.</p>

      <div className="mt-8 space-y-6 rounded-xl border border-border bg-card p-6 shadow-card">
        <div>
          <label className="text-sm font-medium text-foreground">Case Title</label>
          <Input placeholder="e.g., Smith v. Johnson — Eviction Notice" className="mt-1.5" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Property Address</label>
          <Input placeholder="Enter the property address" className="mt-1.5" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">County</label>
          <Input placeholder="e.g., Harris County" className="mt-1.5" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Description</label>
          <Textarea placeholder="Describe the reason for filing..." className="mt-1.5" rows={4} />
        </div>

        <div className="flex justify-between pt-4">
          <Link to="/filing/start">
            <Button variant="outline">Back</Button>
          </Link>
          <Link to="/filing/upload">
            <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default SelectFilingType;
