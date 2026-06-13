import React from "react";
import { Link, useLocation } from "wouter";
import barLogoPath from "@assets/bar-trading-logo-transparent.png";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home",      href: "/" },
    { label: "Materials", href: "/materials" },
    { label: "About",     href: "/about" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-white/8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">

        <Link href="/" className="flex items-center" data-testid="nav-logo">
          <img src={barLogoPath} alt="BAR Trading Ltd" className="h-9 w-auto" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium tracking-widest uppercase transition-colors ${
                location === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact">
            <button
              className="ml-6 h-9 px-6 text-[11px] font-semibold tracking-[0.18em] uppercase border border-foreground/60 text-foreground hover:bg-foreground hover:text-background transition-colors"
              data-testid="nav-cta-enquire"
            >
              Enquire
            </button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(v => !v)}
          data-testid="mobile-menu-toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-5 absolute w-full shadow-2xl">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`block text-sm tracking-widest uppercase font-medium ${
                location === l.href ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full h-11 text-xs font-semibold tracking-[0.18em] uppercase border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors" data-testid="mobile-nav-cta">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
