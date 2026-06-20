import React, { useState } from "react";
import { motion, type Transition, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const TRANSITION: Transition = { duration: 0.6, ease: EASE };
const rise: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: TRANSITION },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

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
  {
    id: "stainless",
    label: "05",
    name: "Stainless Steel",
    summary: "Versatile corrosion-resistant steels covering austenitic, martensitic, and precipitation-hardening grades for industrial and structural applications.",
    alloys: [
      { name: "304 / 304L",   props: "Standard austenitic grade with excellent formability and good corrosion resistance. 304L offers improved weldability with lower carbon content.", apps: "Food processing equipment, architectural components, chemical vessels, heat exchangers." },
      { name: "316 / 316L",   props: "Molybdenum-enhanced austenitic grade with superior resistance to pitting and crevice corrosion, especially in chloride environments.", apps: "Marine hardware, pharmaceutical equipment, surgical instruments, offshore structures." },
      { name: "321",          props: "Titanium-stabilised austenitic grade resistant to sensitisation and intergranular corrosion after welding.", apps: "Exhaust systems, aircraft components, high-temperature chemical processing equipment." },
      { name: "347",          props: "Niobium-stabilised austenitic grade providing excellent resistance to intergranular corrosion and elevated-temperature service.", apps: "Pressure vessels, aircraft exhaust manifolds, chemical process equipment." },
      { name: "17-4 PH",      props: "Precipitation-hardening martensitic grade combining high strength with moderate corrosion resistance. Age-hardenable to a range of strength levels.", apps: "Aerospace structural parts, nuclear waste casks, chemical process equipment, oil and gas valve components." },
    ],
  },
  {
    id: "copper",
    label: "06",
    name: "Copper",
    summary: "High-purity copper grades offering exceptional electrical and thermal conductivity with good corrosion resistance across a wide range of environments.",
    alloys: [
      { name: "C101 — Electrolytic Tough Pitch (ETP)", props: "99.9% minimum copper. Outstanding electrical conductivity (100% IACS). Standard grade for electrical applications.", apps: "Busbars, electrical conductors, transformers, commutators, roofing and cladding." },
      { name: "C110 — Oxygen-Free High Conductivity (OFHC)", props: "99.99% minimum copper, oxygen-free. Excellent electrical conductivity with superior ductility and resistance to hydrogen embrittlement.", apps: "Vacuum tube components, waveguides, high-purity electrical connectors, cryogenic equipment." },
      { name: "C122 — Phosphorus Deoxidised (PDO)", props: "Deoxidised with phosphorus residuals, giving excellent brazeability and weldability without susceptibility to hydrogen embrittlement.", apps: "Plumbing tube and fittings, heat exchangers, refrigeration and air conditioning systems." },
    ],
  },
  {
    id: "brass",
    label: "07",
    name: "Brass",
    summary: "Copper-zinc alloys combining good strength, excellent machinability, and attractive corrosion resistance for engineering and decorative applications.",
    alloys: [
      { name: "CZ108 / C22000 — Commercial Bronze", props: "Low-zinc brass (10% Zn) with excellent cold working characteristics, good corrosion resistance, and attractive golden colour.", apps: "Decorative hardware, costume jewellery, architectural metalwork, coins and medallions." },
      { name: "CZ121 / C36000 — Free-Cutting Brass", props: "60/40 brass with 3% lead addition giving excellent machinability ratings. The industry standard for high-volume screw machined parts.", apps: "Precision turned components, fittings, valves, gears, fasteners, plumbing hardware." },
      { name: "CZ112 / C46400 — Naval Brass", props: "70/30 brass with 1% tin addition providing enhanced resistance to dezincification and sea water corrosion.", apps: "Marine propeller shafts, condenser plates, heat exchanger tubes, turnbuckles, marine hardware." },
      { name: "CW617N / C38500 — Architectural Brass", props: "High-strength brass with good machinability and a uniform surface finish suitable for anodising and plating.", apps: "Door handles, locks, window fittings, sanitary ware, decorative architectural components." },
    ],
  },
  {
    id: "aluminium",
    label: "08",
    name: "Aluminium Alloys",
    summary: "Lightweight, high-strength alloys combining excellent corrosion resistance with outstanding machinability — critical to aerospace, automotive, and marine structures.",
    alloys: [
      { name: "2024-T3 / T4",  props: "High-strength aerospace alloy with excellent fatigue resistance. Copper-alloyed for maximum strength; heat treatable.", apps: "Aircraft fuselage skins, wing tension members, structural bulkheads, military vehicle armour." },
      { name: "6061-T6",       props: "The most versatile general-purpose aluminium alloy. Good strength, excellent corrosion resistance, and outstanding weldability.", apps: "Structural components, marine fittings, automotive parts, bicycle frames, pipelines." },
      { name: "7075-T6 / T651", props: "Ultra-high strength alloy approaching the tensile strength of mild steel. Principal aerospace structural alloy.", apps: "Aircraft wing spars, fuselage frames, missile components, high-stress tooling." },
      { name: "5083-H111",      props: "Non-heat-treatable marine-grade alloy with the highest strength of the 5xxx series. Outstanding seawater corrosion resistance.", apps: "Shipbuilding, offshore platforms, cryogenic vessels, pressure vessels, LNG tanker structures." },
      { name: "2014-T6",        props: "High-strength heat-treatable alloy with good machinability, widely used in aerospace heavy-section forgings.", apps: "Aircraft fittings, wheels, structural parts, military vehicle components." },
    ],
  },
];

export default function Materials() {
  useSeo(
    "Materials We Trade | BAR Trading Ltd",
    "We trade Inconel 625, Inconel 718, Hastelloy X, Waspaloy, Stellite 6, titanium alloys and more. Bar, billet, sheet, plate and forgings. Contact us with your requirements."
  );
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
              Full specifications for the metals and alloys we source and supply — from high-performance superalloys to stainless steel, copper, and brass. Grouped by alloy family, each with key properties and principal applications.
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
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="container mx-auto px-6 md:px-10 py-16 md:py-20"
        >
          {/* Family header */}
          <div className="mb-14 pb-10 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-mono text-muted-foreground mb-3">{family.label} / 08</p>
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
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
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
