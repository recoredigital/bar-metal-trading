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
              Specialist trading house for high-performance superalloy metals. UK-based. Globally connected.
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
                <p className="text-foreground font-medium mb-1">Registered Office</p>
                <p>United Kingdom</p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">Enquiries</p>
                <a href="mailto:enquiries@bartrading.co.uk" className="hover:text-foreground transition-colors">
                  enquiries@bartrading.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-muted-foreground tracking-wide">
          <span>&copy; {new Date().getFullYear()} BAR Trading Ltd. Registered in England & Wales.</span>
          <div className="flex gap-6">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
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
