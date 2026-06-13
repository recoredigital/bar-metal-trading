import React from "react";
import { Link } from "wouter";
import barLogoPath from "@assets/bar-trading-logo-transparent.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          <div className="md:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={barLogoPath} alt="BAR Trading Ltd" className="h-12 w-auto object-contain opacity-90" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-6">
              Specialist trading house for high-performance superalloy metals. Precision materials for aerospace, energy, and advanced industrial applications.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/materials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Materials & Alloys</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex flex-col">
                <span className="font-medium text-foreground mb-1">Headquarters</span>
                United Kingdom
              </li>
              <li className="flex flex-col mt-4">
                <span className="font-medium text-foreground mb-1">Enquiries</span>
                <a href="mailto:enquiries@bartrading.co.uk" className="hover:text-foreground transition-colors">
                  enquiries@bartrading.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BAR Trading Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
