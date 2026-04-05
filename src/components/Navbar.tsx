import { useState, useEffect, useRef } from "react";
import { Menu, X, ShoppingCart, Search, ChevronDown, ChevronRight } from "lucide-react";

interface MegaMenuItem {
  name: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

interface MegaMenuRange {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuCategory {
  label: string;
  subLinks?: string[];
  ranges: MegaMenuRange[];
}

const megaMenuData: Record<string, MegaMenuCategory[]> = {
  Sleep: [
    {
      label: "Mattress",
      subLinks: ["Comparison", "All Mattresses", "Find Perfect Mattress"],
      ranges: [
        {
          title: "ORTHO RANGE",
          items: [
            { name: "Smart Ortho Mattress", description: "Advanced Back Pain Relief" },
            { name: "Smart Ortho SnowTec Mattress", description: "4-6° Cooler Sleep & Back Support" },
            { name: "Smart Ortho Pro Mattress", description: "5 Zone Orthopedic Support", badge: "BESTSELLER", badgeColor: "bg-primary" },
            { name: "Smart Ortho Pro SnowTec Mattress", description: "4-6° Cooler Sleep & Orthopedic Support", badge: "COOLEST", badgeColor: "bg-accent" },
          ],
        },
        {
          title: "LUXE RANGE",
          items: [
            { name: "Smart Luxe Pro Mattress", description: "Cloud-Like Comfort With Latex", badge: "TAILBONE RELIEF", badgeColor: "bg-primary" },
            { name: "Smart Luxe Pro SnowTec Mattress", description: "4-6° Cooler Sleep With Latex Comfort", badge: "COOLEST", badgeColor: "bg-accent" },
            { name: "Smart Luxe Royale Mattress", description: "Latex Comfort With Luxurious Feel" },
          ],
        },
        {
          title: "ULTRA-LUXURY RANGE",
          items: [
            { name: "Grand Elite Mattress", description: "Indulgence, Handcrafted To Perfection" },
            { name: "Luxe Recliner Mattress", description: "Reclines, Adapts & Supports", badge: "NEW", badgeColor: "bg-primary" },
          ],
        },
        {
          title: "AI MATTRESS",
          items: [
            { name: "SensAI Mattress", description: "Sleep Recovery Powered by AI", badge: "NEW", badgeColor: "bg-primary" },
          ],
        },
      ],
    },
    {
      label: "Pillow",
      subLinks: ["All Pillows"],
      ranges: [
        {
          title: "PILLOWS",
          items: [
            { name: "Smart Pillow", description: "Adaptive Neck Support", badge: "BESTSELLER", badgeColor: "bg-primary" },
            { name: "Smart Pillow Pro", description: "Premium Ergonomic Comfort" },
            { name: "Smart Cooling Pillow", description: "SnowTec Cooling Technology", badge: "NEW", badgeColor: "bg-primary" },
          ],
        },
      ],
    },
    {
      label: "Bedding",
      subLinks: ["All Bedding"],
      ranges: [
        {
          title: "BEDDING ESSENTIALS",
          items: [
            { name: "Smart Comforter", description: "All-Season Cloud Comfort" },
            { name: "Smart Mattress Protector", description: "Waterproof & Breathable" },
            { name: "Smart Bedsheet Set", description: "Ultra-Soft Premium Cotton" },
          ],
        },
      ],
    },
  ],
  Sit: [
    {
      label: "Cushion",
      subLinks: ["All Cushions"],
      ranges: [
        {
          title: "SEAT CUSHIONS",
          items: [
            { name: "Smart Seat Cushion", description: "All-Day Sitting Comfort", badge: "BESTSELLER", badgeColor: "bg-primary" },
            { name: "Smart Lumbar Support", description: "Ergonomic Back Support" },
          ],
        },
      ],
    },
  ],
  Relax: [
    {
      label: "Recliner Bed",
      subLinks: ["All Recliners"],
      ranges: [
        {
          title: "RECLINERS",
          items: [
            { name: "Smart Recliner Bed", description: "Zero Gravity Experience", badge: "NEW", badgeColor: "bg-primary" },
            { name: "Smart Recliner Sofa", description: "SmartGRID Comfort Seating" },
          ],
        },
      ],
    },
  ],
};

const navLinks = [
  { label: "All Categories", hasMega: false },
  { label: "Sleep", hasMega: true },
  { label: "Sit", hasMega: true },
  { label: "Relax", hasMega: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(label);
    setActiveCategory(0);
  };

  const closeMega = () => {
    timeoutRef.current = setTimeout(() => setActiveMega(null), 200);
  };

  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const categories = activeMega ? megaMenuData[activeMega] || [] : [];
  const currentCategory = categories[activeCategory];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#" className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Dream<span className="text-gradient">Rest</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasMega && openMega(link.label)}
              onMouseLeave={closeMega}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 py-2">
                {link.label}
                {link.hasMega && <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Search">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors relative" aria-label="Cart">
            <ShoppingCart className="w-5 h-5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full gradient-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
              2
            </span>
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeMega && categories.length > 0 && (
        <div
          ref={megaRef}
          onMouseEnter={keepOpen}
          onMouseLeave={closeMega}
          className="hidden md:block absolute left-0 right-0 top-full bg-background/98 backdrop-blur-xl border-b border-border shadow-2xl animate-fade-up"
        >
          <div className="container mx-auto flex px-4 lg:px-8 py-6 gap-0">
            {/* Left sidebar - Categories */}
            <div className="w-48 flex-shrink-0 border-r border-border pr-4 space-y-1">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  onMouseEnter={() => setActiveCategory(i)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === i
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {cat.label}
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              ))}
            </div>

            {/* Right content - Ranges & Products */}
            {currentCategory && (
              <div className="flex-1 pl-8">
                {/* Category header */}
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">{currentCategory.label}</h3>
                    <p className="text-sm text-muted-foreground">Explore our premium collection</p>
                  </div>
                  {currentCategory.subLinks && (
                    <div className="flex items-center gap-6">
                      {currentCategory.subLinks.map((sl) => (
                        <a key={sl} href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {sl}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Ranges grid */}
                <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                  {currentCategory.ranges.map((range) => (
                    <div key={range.title}>
                      <h4 className="text-[11px] font-bold tracking-widest text-muted-foreground/70 uppercase mb-3 border-b border-border pb-2">
                        {range.title}
                      </h4>
                      <div className="space-y-3">
                        {range.items.map((item) => (
                          <a
                            key={item.name}
                            href="#"
                            className="group block hover:bg-muted/50 rounded-lg px-2 py-1.5 -mx-2 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full text-primary-foreground ${item.badgeColor}`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-xl p-4 animate-fade-up max-h-[70vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                className="w-full flex items-center justify-between py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                onClick={() => {
                  if (link.hasMega) {
                    setMobileExpanded(mobileExpanded === link.label ? null : link.label);
                  }
                }}
              >
                {link.label}
                {link.hasMega && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                )}
              </button>
              {link.hasMega && mobileExpanded === link.label && megaMenuData[link.label] && (
                <div className="pl-4 pb-2 space-y-3">
                  {megaMenuData[link.label].map((cat) => (
                    <div key={cat.label}>
                      <p className="text-xs font-bold tracking-wider text-primary uppercase px-4 py-1">{cat.label}</p>
                      {cat.ranges.map((range) =>
                        range.items.map((item) => (
                          <a
                            key={item.name}
                            href="#"
                            className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
