import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const articles = [
  { id: 1, title: "Understanding Texas Eviction Filing Process", category: "Guides", date: "Feb 10, 2026", excerpt: "A comprehensive guide to navigating the eviction filing process in Texas courts.", author: "Legal Team" },
  { id: 2, title: "What Landlords Need to Know About E-Filing", category: "Landlords", date: "Feb 8, 2026", excerpt: "Key requirements and best practices for landlords using electronic filing systems.", author: "Filing Support" },
  { id: 3, title: "Tenant Rights During the Filing Process", category: "Tenants", date: "Feb 5, 2026", excerpt: "Understanding your rights and how to respond to filings as a tenant.", author: "Legal Team" },
  { id: 4, title: "Court Processing Timeline Explained", category: "Courts", date: "Feb 1, 2026", excerpt: "How courts process electronic filings and expected timelines.", author: "Court Admin" },
  { id: 5, title: "Document Requirements for E-Filing", category: "Guides", date: "Jan 28, 2026", excerpt: "Complete checklist of documents needed for different types of filings.", author: "Filing Support" },
  { id: 6, title: "Agency Oversight Best Practices", category: "Agencies", date: "Jan 25, 2026", excerpt: "How agencies can effectively manage and track assigned cases.", author: "Agency Ops" },
];

const ArticlePage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container">
        <h1 className="font-display text-4xl font-extrabold text-primary-foreground">Resources & Articles</h1>
        <p className="mt-3 text-lg text-primary-foreground/80">Guides, tips, and updates for the Texas E-Filing system</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.id} className="group rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover overflow-hidden">
              <div className="h-2 bg-gradient-hero" />
              <div className="p-6">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{a.category}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" />{a.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{a.date}</span>
                  </div>
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ArticlePage;
