import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Layers, ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20 z-10" />
          <img 
            src="/images/hero-forging.png" 
            alt="Superalloy forging process" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">UK Based Trading House</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-[1.1] mb-6">
              Precision Metals for Extreme Environments.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              BAR Trading Ltd specialises in high-performance superalloys — the critical materials behind aerospace turbines, deep-sea drilling, and next-generation power generation.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/materials">
                <Button size="lg" className="rounded-none h-14 px-8 text-base font-medium tracking-wide w-full sm:w-auto group" data-testid="home-cta-materials">
                  View Alloys <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-none h-14 px-8 text-base font-medium tracking-wide w-full sm:w-auto" data-testid="home-cta-contact">
                  Submit Enquiry
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Cold Steel. Warm Ambition.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We operate at the intersection of metallurgical science and global trade. Our expertise lies in sourcing, specifying, and delivering complex alloy compositions to exact engineering standards.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed">
                Whether you require raw billets for forging, precision-machined bar stock, or specialized tubular products, we provide a secure, reliable supply chain for the most demanding industries on earth.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: ShieldCheck, title: "Assured Quality", desc: "Materials certified to aerospace and international standards." },
                { icon: Globe, title: "Global Network", desc: "Deep relationships with premier mills and processors worldwide." },
                { icon: Layers, title: "Extensive Range", desc: "Nickel, Cobalt, Titanium, and complex Iron-Nickel base alloys." },
                { icon: Cpu, title: "Technical Acumen", desc: "Deep understanding of metallurgical properties and applications." }
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 border border-border bg-background">
                  <feature.icon className="h-10 w-10 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold font-heading mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Showcase */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Industries We Serve</h2>
            <p className="text-muted-foreground text-lg">
              Our materials operate in environments where failure is not an option. From the vacuum of space to the pressures of the ocean floor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Aerospace", desc: "Turbine discs, blades, fasteners, and structural components requiring extreme temperature resistance." },
              { name: "Oil & Gas", desc: "Downhole tools, wellhead components, and sour gas service equipment needing unmatched corrosion resistance." },
              { name: "Power Generation", desc: "Industrial gas turbines and nuclear reactor components demanding long-term creep strength." },
              { name: "Marine", desc: "Propulsion shafts, exhaust systems, and subsea structures requiring resistance to seawater corrosion." },
              { name: "Medical", desc: "Biocompatible surgical implants and trauma fixation devices demanding ultra-high strength." }
            ].map((industry, i) => (
              <motion.div 
                key={industry.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className={`p-8 border border-border bg-card group hover:border-primary/50 transition-colors ${i > 2 ? 'md:col-span-1.5' : ''}`}
              >
                <div className="h-px w-12 bg-primary mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>
                <h3 className="text-2xl font-bold font-heading mb-4">{industry.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Teaser */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:w-1/2 w-full"
            >
              <img 
                src="/images/materials-turbine.png" 
                alt="Aerospace Turbine Blades" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-1/2 w-full"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold font-heading mb-8">
                Uncompromising Materials.
              </motion.h2>
              
              <div className="space-y-6 mb-10">
                <motion.div variants={fadeInUp} className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-bold mb-1">Nickel-based Superalloys</h4>
                  <p className="text-muted-foreground text-sm">Inconel 625, Inconel 718, Waspaloy, Hastelloy X, René 41</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-bold mb-1">Cobalt-based Superalloys</h4>
                  <p className="text-muted-foreground text-sm">Stellite 6, Stellite 21, Haynes 188, MP35N</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-bold mb-1">Titanium Alloys</h4>
                  <p className="text-muted-foreground text-sm">Ti-6Al-4V, Ti-6Al-2Sn-4Zr-2Mo, Ti-3Al-2.5V</p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <Link href="/materials">
                  <Button variant="outline" size="lg" className="rounded-none h-14 px-8 group">
                    View Full Material Specs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to Specify?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Contact our engineering and procurement team to discuss your exact material requirements, specifications, and delivery schedules.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none h-14 px-10 text-base font-medium tracking-wide">
                Start the Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
