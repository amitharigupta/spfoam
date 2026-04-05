import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";

const ProductNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="text-xl font-heading font-bold text-foreground tracking-tight">
          MAISON
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {["Sofas", "Chairs", "Tables", "Bedroom", "Sale"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Search className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors hidden md:block" />
          <User className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors hidden md:block" />
          <div className="relative">
            <ShoppingBag className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-foreground text-background text-[10px] font-bold flex items-center justify-center">
              2
            </span>
          </div>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 animate-fade-up">
          <nav className="flex flex-col gap-4">
            {["Sofas", "Chairs", "Tables", "Bedroom", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-heading font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default ProductNavbar;
