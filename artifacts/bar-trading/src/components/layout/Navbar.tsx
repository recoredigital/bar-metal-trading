import React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import barLogoPath from "@assets/bar-trading-logo-transparent.png";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Materials", href: "/materials" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={barLogoPath}
            alt="BAR Trading Ltd"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-foreground ${
                location === link.href ? "text-foreground" : "text-muted-foreground"
              }`}
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="ml-4">
            <Button
              variant="default"
              size="sm"
              className="rounded-none font-medium px-6 h-10 tracking-widest uppercase text-xs bg-[hsl(38_72%_55%)] hover:bg-[hsl(38_72%_48%)] text-black border-0"
              data-testid="nav-cta-enquire"
            >
              Enquire Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background py-4 px-4 space-y-4 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-base font-medium py-2 ${
                location === link.href ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full rounded-none bg-[hsl(38_72%_55%)] hover:bg-[hsl(38_72%_48%)] text-black border-0" data-testid="mobile-nav-cta">
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
