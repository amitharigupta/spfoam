import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProductFooter = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">MAISON</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Thoughtfully designed furniture for modern living. Crafted with care, built to last.
          </p>
        </div>
        {[
          { title: "Shop", links: ["Sofas", "Chairs", "Tables", "Bedroom", "Sale"] },
          { title: "Support", links: ["FAQ", "Shipping", "Returns", "Warranty", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-semibold text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Get 10% off your first order.</p>
          <div className="flex gap-2">
            <Input
              placeholder="Your email"
              className="rounded-full bg-background border-border text-sm"
            />
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-5 text-sm">
              Join
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
        © 2026 MAISON. All rights reserved.
      </div>
    </div>
  </footer>
);

export default ProductFooter;
