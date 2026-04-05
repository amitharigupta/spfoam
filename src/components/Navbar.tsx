import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, Moon } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Mattresses", "Pillows", "Recliners", "Technology", "About"];

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

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
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

      {mobileOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-xl p-4 animate-fade-up">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
