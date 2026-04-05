import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-strong border-t border-border/50 px-4 py-3 safe-area-pb">
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <p className="font-heading font-bold text-foreground text-sm">Aubrey Sofa</p>
        <p className="text-lg font-bold text-foreground">$1,899</p>
      </div>
      <Button className="h-12 px-8 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all">
        Add to Cart
      </Button>
    </div>
  </div>
);

export default StickyMobileCTA;
