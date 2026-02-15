import { Link } from "react-router-dom";
import { ArrowRight, Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const UploadDocuments = () => {
  const [files, setFiles] = useState<string[]>(["Lease_Agreement.pdf", "Notice_to_Vacate.pdf"]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-3xl py-12">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-bold text-success-foreground">✓</span>
            <span>Start</span>
            <div className="h-px flex-1 bg-success" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-bold text-success-foreground">✓</span>
            <span>Details</span>
            <div className="h-px flex-1 bg-primary" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
            <span className="font-medium text-foreground">Upload</span>
            <div className="h-px flex-1 bg-border" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">4</span>
            <span>Review</span>
          </div>
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground">Upload Documents</h1>
        <p className="mt-2 text-muted-foreground">Attach supporting documents and notices for your filing.</p>

        <div className="mt-8 space-y-6">
          {/* Upload Area */}
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50 p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary mb-4">
              <Upload className="h-7 w-7 text-primary" />
            </div>
            <p className="font-medium text-foreground">Drag & drop files here</p>
            <p className="mt-1 text-sm text-muted-foreground">or click to browse (PDF, DOC, JPG up to 10MB)</p>
            <Button variant="outline" className="mt-4">Browse Files</Button>
          </div>

          {/* Uploaded files */}
          {files.length > 0 && (
            <div className="rounded-xl border border-border bg-card shadow-card">
              <div className="border-b border-border px-5 py-3">
                <h3 className="text-sm font-medium text-foreground">Uploaded Documents ({files.length})</h3>
              </div>
              <div className="divide-y divide-border">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                    <button onClick={() => setFiles(files.filter((_, fi) => fi !== i))} className="text-muted-foreground hover:text-destructive">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Link to="/filing/select-type">
              <Button variant="outline">Back</Button>
            </Link>
            <Link to="/filing/progress">
              <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90">
                Submit Filing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
