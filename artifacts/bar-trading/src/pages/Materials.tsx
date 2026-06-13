import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const alloyFamilies = [
  {
    family: "Nickel-based Superalloys",
    description: "Engineered for extreme high-temperature environments, offering exceptional strength and resistance to oxidation and corrosion.",
    alloys: [
      {
        name: "Inconel 625",
        properties: "Excellent corrosion resistance in a wide range of severe environments. High strength and toughness from cryogenic temperatures up to 2000°F (1093°C).",
        applications: "Marine components, aerospace ducting systems, chemical processing equipment, nuclear reactors."
      },
      {
        name: "Inconel 718",
        properties: "Age-hardenable alloy offering exceptionally high yield, tensile, and creep-rupture properties at temperatures up to 1300°F (704°C).",
        applications: "Aerospace fasteners, gas turbine engine discs, cryogenic storage tanks, high-strength wellhead components."
      },
      {
        name: "Waspaloy",
        properties: "Precipitation hardening alloy with excellent high-temperature strength and good oxidation resistance up to 1600°F (870°C).",
        applications: "Gas turbine engine parts, compressor discs, shafts, spacers, and sealing rings."
      },
      {
        name: "Hastelloy X",
        properties: "Solid-solution-strengthened alloy providing outstanding high-temperature strength and oxidation resistance up to 2200°F (1200°C).",
        applications: "Gas turbine combustion chambers, transition ducts, afterburner components, industrial furnace hardware."
      },
      {
        name: "René 41",
        properties: "Precipitation-hardening alloy designed for use in severely stressed high-temperature applications up to 1600°F (870°C).",
        applications: "Aircraft engine components, missile structures, afterburner parts, turbine casings."
      }
    ]
  },
  {
    family: "Cobalt-based Superalloys",
    description: "Characterized by superior wear resistance, high-temperature strength, and excellent hot corrosion resistance.",
    alloys: [
      {
        name: "Stellite 6",
        properties: "Industry standard for general-purpose wear resistance. Maintains exceptional hardness and wear characteristics at elevated temperatures.",
        applications: "Valve seats, pump shafts, industrial bearing surfaces, erosion shields, and cutting tools."
      },
      {
        name: "Stellite 21",
        properties: "Offers excellent resistance to cavitation, galling, and metal-to-metal wear, coupled with outstanding corrosion resistance.",
        applications: "Medical implants, surgical tools, fluid handling valves, oil and gas severe service components."
      },
      {
        name: "Haynes 188",
        properties: "Solid-solution-strengthened alloy combining excellent high-temperature strength with superb oxidation resistance up to 2000°F (1095°C).",
        applications: "Military and commercial gas turbine engine combustion cans, transition ducts, and afterburner liners."
      },
      {
        name: "MP35N",
        properties: "Non-magnetic, multiphase alloy possessing a unique combination of ultra-high strength, toughness, and outstanding corrosion resistance.",
        applications: "Medical devices (orthodontic/cardiovascular), aerospace fasteners, deep-water oil well components."
      }
    ]
  },
  {
    family: "Titanium Alloys",
    description: "Offering the highest strength-to-weight ratio of any structural metal, coupled with exceptional corrosion resistance.",
    alloys: [
      {
        name: "Ti-6Al-4V (Grade 5)",
        properties: "The 'workhorse' titanium alloy. Offers a highly desirable combination of strength, formability, and corrosion resistance.",
        applications: "Aerospace airframes, engine components, medical implants, high-performance motorsport parts."
      },
      {
        name: "Ti-6Al-2Sn-4Zr-2Mo",
        properties: "Near-alpha alloy known for its excellent high-temperature stability and creep resistance up to 1000°F (540°C).",
        applications: "Jet engine compressor blades, discs, impellers, and high-performance racing engine valves."
      },
      {
        name: "Ti-3Al-2.5V (Grade 9)",
        properties: "Near-alpha alloy offering 20-50% higher tensile strength than commercially pure titanium, with excellent cold formability.",
        applications: "Aircraft hydraulic tubing systems, high-performance bicycle frames, golf club shafts, marine components."
      }
    ]
  },
  {
    family: "Iron-Nickel Alloys",
    description: "Highly stable materials designed for specific thermal expansion characteristics and challenging corrosive environments.",
    alloys: [
      {
        name: "Incoloy 825",
        properties: "Austenitic alloy with additions of molybdenum, copper, and titanium. Provides exceptional resistance to heavily corrosive environments.",
        applications: "Oil and gas downhole equipment, chemical processing, pollution control, acid production systems."
      },
      {
        name: "Incoloy 925",
        properties: "Age-hardenable alloy offering the corrosion resistance of 825 but with much higher strength capabilities.",
        applications: "High-strength sour gas service, wellhead components, valves, hangers, tool joints, and packers."
      },
      {
        name: "A286",
        properties: "Iron-base superalloy designed for applications requiring high strength and good corrosion resistance up to 1300°F (700°C).",
        applications: "Jet engine components, high-temperature fasteners, offshore oil and gas structural components."
      }
    ]
  }
];

export default function Materials() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="py-20 md:py-32 border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <div className="h-px w-12 bg-primary mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Materials & Alloys</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive specifications for high-performance superalloys. 
              Our inventory and supply chain covers the definitive range of materials required for extreme engineering environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {alloyFamilies.map((family, familyIdx) => (
              <motion.div 
                key={family.family}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="scroll-mt-24"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-bold font-heading text-foreground mb-4">{family.family}</h2>
                  <p className="text-lg text-muted-foreground max-w-4xl">{family.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {family.alloys.map((alloy, i) => (
                    <div 
                      key={alloy.name}
                      className="border border-border bg-card p-6 flex flex-col group hover:border-primary/50 transition-colors"
                      data-testid={`alloy-card-${alloy.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <h3 className="text-xl font-bold font-heading text-primary mb-4">{alloy.name}</h3>
                      
                      <div className="mb-6 flex-1">
                        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Properties</h4>
                        <p className="text-sm text-foreground/90 leading-relaxed">{alloy.properties}</p>
                      </div>
                      
                      <div className="pt-4 border-t border-border/50">
                        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">Applications</h4>
                        <p className="text-sm text-foreground/80">{alloy.applications}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold font-heading mb-6">Require a Specific Specification?</h2>
          <p className="text-muted-foreground mb-8">
            Beyond our standard range, we source specialized melts and specific AMS/ASTM certified materials to order.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none h-14 px-8" data-testid="materials-cta-contact">
              Contact our Sales Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
