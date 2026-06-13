import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const rise = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const families = [
  {
    id: "nickel",
    label: "01",
    name: "Nickel-based Superalloys",
    summary: "Engineered for extreme high-temperature environments — the principal class of superalloy in aerospace and energy applications.",
    alloys: [
      { name: "Inconel 625",   props: "Excellent corrosion resistance across a wide range of severe environments. High strength and toughness from cryogenic to 1093°C.", apps: "Marine components, aerospace ducting, chemical processing, nuclear reactors." },
      { name: "Inconel 718",   props: "Age-hardenable with exceptionally high yield, tensile, and creep-rupture properties to 704°C.", apps: "Aerospace fasteners, gas turbine discs, cryogenic tanks, wellhead components." },
      { name: "Waspaloy",      props: "Precipitation hardening alloy with excellent high-temperature strength and oxidation resistance to 870°C.", apps: "Gas turbine engine parts, compressor discs, shafts, spacers, and sealing rings." },
      { name: "Hastelloy X",   props: "Outstanding high-temperature strength and oxidation resistance to 1200°C.", apps: "Gas turbine combustion chambers, transition ducts, afterburner components, furnace hardware." },
      { name: "René 41",       props: "Precipitation-hardening alloy for severely stressed high-temperature applications to 870°C.", apps: "Aircraft engine components, missile structures, afterburner parts, turbine casings." },
    ],
  },
  {
    id: "cobalt",
    label: "02",
    name: "Cobalt-based Superalloys",
    summary: "Superior wear resistance, high-temperature strength, and excellent hot corrosion resistance in demanding service conditions.",
    alloys: [
      { name: "Stellite 6",  props: "Industry standard for general-purpose wear resistance. Maintains hardness and wear characteristics at elevated temperatures.", apps: "Valve seats, pump shafts, bearing surfaces, erosion shields, cutting tools." },
      { name: "Stellite 21", props: "Excellent resistance to cavitation, galling, and metal-to-metal wear with outstanding corrosion resistance.", apps: "Medical implants, surgical tools, fluid handling valves, oil and gas severe-service components." },
      { name: "Haynes 188", props: "Solid-solution-strengthened alloy combining high-temperature strength with superb oxidation resistance to 1095°C.", apps: "Gas turbine combustion cans, transition ducts, afterburner liners." },
      { name: "MP35N",       props: "Non-magnetic, ultra-high strength, toughness, and outstanding corrosion resistance.", apps: "Medical devices, aerospace fasteners, deep-water oil well components." },
    ],
  },
  {
    id: "titanium",
    label: "03",
    name: "Titanium Alloys",
    summary: "The highest strength-to-weight ratio of any structural metal, with exceptional corrosion resistance and biocompatibility.",
    alloys: [
      { name: "Ti-6Al-4V (Grade 5)",        props: "The industry workhorse. Optimal combination of strength, formability, and corrosion resistance.", apps: "Aerospace airframes, engine components, medical implants, high-performance motorsport." },
      { name: "Ti-6Al-2Sn-4Zr-2Mo",        props: "Near-alpha alloy with excellent high-temperature stability and creep resistance to 540°C.", apps: "Jet engine compressor blades, discs, impellers, racing engine valves." },
      { name: "Ti-3Al-2.5V (Grade 9)",      props: "20–50% higher tensile strength than commercially pure titanium with excellent cold formability.", apps: "Aircraft hydraulic tubing, high-performance bicycle frames, marine components." },
    ],
  },
  {
    id: "iron-nickel",
    label: "04",
    name: "Iron-Nickel Alloys",
    summary: "Highly stable materials designed for specific thermal expansion characteristics and challenging corrosive environments.",
    alloys: [
      { name: "Incoloy 825",  props: "Austenitic alloy with molybdenum, copper, and titanium additions. Exceptional resistance to heavily corrosive environments.", apps: "Oil and gas downhole equipment, chemical processing, pollution control, acid production." },
      { name: "Incoloy 925",  props: "Age-hardenable alloy offering the corrosion resistance of 825 with significantly higher strength.", apps: "High-strength sour gas service, wellhead components, valves, hangers, tool joints." },
      { name: "A286",         props: "Iron-base superalloy with high strength and good corrosion resistance to 700°C.", apps: "Jet engine components, high-temperature fasteners, offshore oil and gas structural parts." },
    ],
  },
];

export default function Materials() {
  const [active, setActive] = useState("nickel");
  const family = families.find(f => f.id === active)!;

  return (
    <div className="w-full min-h-screen bg-background">

      {/* ─── HEADER (dark) ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-6">
              Material Capability
            </motion.p>
            <motion.h1 variants={rise}
              className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight leading-[1.0] mb-8"
            >
              Materials<br />&amp; Alloys
            </motion.h1>
            <motion.p variants={rise} className="text-base text-muted-foreground leading-relaxed font-light max-w-xl">
              Comprehensive specifications for the high-performance superalloys we source and supply. Grouped by alloy family — each with key properties and principal applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── FAMILY NAV + CONTENT ──────────────────────────────────── */}
      <section className="py-0 bg-background">
        {/* Sticky family tabs */}
        <div className="sticky top-[72px] z-30 bg-background border-b border-border">
          <div className="container mx-auto px-6 md:px-10">
            <div className="flex gap-0 overflow-x-auto">
              {families.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`px-6 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap transition-colors border-b-2 ${
                    active === f.id
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`family-tab-${f.id}`}
                >
                  <span className="font-mono text-muted-foreground mr-2">{f.label}</span>
                  {f.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Family content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-6 md:px-10 py-16 md:py-20"
        >
          {/* Family header */}
          <div className="mb-14 pb-10 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-mono text-muted-foreground mb-3">{family.label} / 04</p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight mb-4">{family.name}</h2>
              <p className="text-muted-foreground font-light max-w-xl leading-relaxed">{family.summary}</p>
            </div>
            <p className="text-[11px] text-muted-foreground tracking-widest uppercase flex-shrink-0">
              {family.alloys.length} Grades
            </p>
          </div>

          {/* Alloy rows */}
          <div className="divide-y divide-border">
            {family.alloys.map((alloy, i) => (
              <motion.div
                key={alloy.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8"
                data-testid={`alloy-card-${alloy.name.toLowerCase().replace(/[\s()/]+/g, '-')}`}
              >
                <div>
                  <h3 className="text-lg font-bold font-heading tracking-tight mb-1">{alloy.name}</h3>
                  <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">{family.name}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Properties</p>
                  <p className="text-sm text-foreground/85 leading-relaxed font-light">{alloy.props}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">Applications</p>
                  <p className="text-sm text-foreground/75 leading-relaxed font-light">{alloy.apps}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── CTA (light) ───────────────────────────────────────────── */}
      <section className="panel-light border-t py-24" style={{ borderColor: "hsl(0 0% 82%)" }}>
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading tracking-tight mb-2" style={{ color: "hsl(0 0% 7%)" }}>
              Require a Specific Grade?
            </h2>
            <p className="text-sm font-light" style={{ color: "hsl(0 0% 42%)" }}>
              Beyond our standard range, we source specialised melts and AMS/ASTM certified materials to order.
            </p>
          </div>
          <Link href="/contact">
            <button
              className="h-12 px-8 text-[11px] font-semibold tracking-[0.2em] uppercase border flex items-center gap-2 group flex-shrink-0 transition-colors hover:opacity-80"
              style={{ borderColor: "hsl(0 0% 18%)", color: "hsl(0 0% 7%)" }}
              data-testid="materials-cta-contact"
            >
              Contact Sales Team
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
