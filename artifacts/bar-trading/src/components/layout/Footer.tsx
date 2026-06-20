import React from "react";
import { Link } from "wouter";
import barLogoPath from "@assets/bar-trading-logo-transparent.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 md:px-10 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <img src={barLogoPath} alt="BAR Trading Ltd" className="h-14 w-auto mb-5 opacity-80" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Specialist non-ferrous metals trading house. Superalloys, aluminium, copper, brass &amp; stainless. UK-based. Globally connected.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                ["Home",            "/"],
                ["Materials & Alloys", "/materials"],
                ["About Us",        "/about"],
                ["Contact",         "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Contact</p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="text-foreground font-medium mb-1">Office</p>
                <p>England</p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">Enquiries</p>
                <a href="mailto:info@bartrading.co.uk" className="hover:text-foreground transition-colors">
                  info@bartrading.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-muted-foreground tracking-wide">
          <span>&copy; 2024 BAR Trading. England.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/supplier-code-of-conduct" className="hover:text-foreground transition-colors">
              Supplier Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
