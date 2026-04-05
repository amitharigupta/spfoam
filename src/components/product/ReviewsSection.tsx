import { useState } from "react";
import { Star, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "Sarah M.", date: "March 2026", rating: 5, title: "Absolutely stunning", body: "This sofa exceeded all expectations. The fabric is luxurious, the comfort is incredible, and it looks even better in person than in photos.", helpful: 24, verified: true },
  { name: "James K.", date: "February 2026", rating: 5, title: "Worth every penny", body: "We spent months looking for the perfect sofa. The Aubrey is it — beautiful, comfortable, and incredibly well-made. The delivery team was fantastic too.", helpful: 18, verified: true },
  { name: "Emily R.", date: "January 2026", rating: 4, title: "Beautiful but firm", body: "Gorgeous sofa with excellent build quality. It's a bit firmer than expected but breaking in nicely. The velvet sage fabric is absolutely beautiful.", helpful: 12, verified: true },
  { name: "Michael D.", date: "December 2025", rating: 5, title: "Perfect centerpiece", body: "This sofa transformed our living room. The mid-century design is timeless and the quality is exceptional for the price point.", helpful: 9, verified: true },
];

const ratingDist = [85, 10, 3, 1, 1];

const ReviewsSection = () => {
  const [sortBy, setSortBy] = useState("Most Helpful");
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12">
          Customer Reviews
        </h2>

        {/* Summary */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex flex-col items-center gap-2 md:pr-8 md:border-r border-border">
            <span className="text-5xl font-heading font-bold text-foreground">4.8</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < 5 ? "fill-amber-400 text-amber-400" : "text-border"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Based on 127 reviews</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {ratingDist.map((pct, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="w-8 text-right text-muted-foreground">{5 - i}★</span>
                <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-400 transition-all duration-1000"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-10 text-right text-muted-foreground">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm text-muted-foreground">127 reviews</span>
          <button className="flex items-center gap-1 text-sm font-medium text-foreground">
            Sort: {sortBy} <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Reviews list */}
        <div className="space-y-6">
          {(showAll ? reviews : reviews.slice(0, 3)).map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-card border border-border/50 shadow-card"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-semibold text-foreground">{r.name}</span>
                    {r.verified && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-3.5 w-3.5 ${j < r.rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
                    />
                  ))}
                </div>
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">{r.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              <button className="flex items-center gap-1.5 mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <ThumbsUp className="h-3.5 w-3.5" /> Helpful ({r.helpful})
              </button>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="rounded-full px-8"
            >
              Show All Reviews
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
