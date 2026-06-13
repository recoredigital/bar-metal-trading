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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="w-full">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] w-full flex items-center bg-background overflow-hidden">
        {/* grid backdrop */}
        <div className="absolute inset-0 grid-bg opacity-40 z-0" />
        {/* radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,transparent_30%,hsl(var(--background))_100%)] z-0" />

        {/* hero image panel — right half only */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <img
            src="/images/hero-forging.png"
            alt="Superalloy forging"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[hsl(var(--gold))]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "hsl(var(--gold))" }}>
                UK Based · Superalloy Specialists
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-heading text-foreground leading-[1.0] mb-8 tracking-tight">
              Precision Metals<br />
              <span className="text-muted-foreground/60">for Extreme</span><br />
              Environments.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              BAR Trading Ltd sources and supplies high-performance superalloys — the critical materials that underpin aerospace turbines, subsea drilling, and power generation worldwide.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/materials">
                <Button size="lg" className="rounded-none h-14 px-8 text-sm font-semibold tracking-widest uppercase w-full sm:w-auto group bg-[hsl(38_72%_55%)] hover:bg-[hsl(38_72%_48%)] text-black border-0" data-testid="home-cta-materials">
                  View Alloys <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-none h-14 px-8 text-sm font-semibold tracking-widest uppercase w-full sm:w-auto" data-testid="home-cta-contact">
                  Submit Enquiry
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-foreground animate-pulse" />
        </div>
      </section>

      {/* ── Stats Strip ────────────────────────────────────────────── */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border"
          >
            {[
              { number: "16+", label: "Alloy Grades" },
              { number: "4",   label: "Alloy Families" },
              { number: "5",   label: "Industries Served" },
              { number: "UK",  label: "Registered Trading House" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="py-8 px-6 md:py-10 md:px-10 text-center">
                <div className="text-3xl md:text-4xl font-extrabold font-heading mb-1" style={{ color: "hsl(var(--gold))" }}>
                  {stat.number}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Value Proposition ──────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[hsl(var(--gold))]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">Our Proposition</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
                Cold Steel.<br />Warm Ambition.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-5 leading-relaxed">
                We operate at the intersection of metallurgical science and global trade. Our expertise lies in sourcing, specifying, and delivering complex alloy compositions to exact engineering standards.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed">
                Whether you require raw billets, precision bar stock, or specialised tubular products, we provide a secure and reliable supply chain for the most demanding industries on earth.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: ShieldCheck, title: "Assured Quality",    desc: "Materials certified to aerospace and international standards." },
                { icon: Globe,       title: "Global Network",     desc: "Deep relationships with premier mills and processors worldwide." },
                { icon: Layers,      title: "Extensive Range",    desc: "Nickel, Cobalt, Titanium, and complex Iron-Nickel base alloys." },
                { icon: Cpu,         title: "Technical Acumen",   desc: "Deep understanding of metallurgical properties and applications." }
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeInUp}
                  className="p-6 border border-border bg-card hover:border-[hsl(var(--gold))/50] transition-colors group"
                >
                  <feature.icon className="h-8 w-8 mb-4 transition-colors" strokeWidth={1.5}
                    style={{ color: "hsl(var(--gold))" }}
                  />
                  <h3 className="text-base font-bold font-heading mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industries ─────────────────────────────────────────────── */}
      <section className="py-28 bg-card border-y border-border relative overflow-hidden">
        {/* decorative large text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-extrabold font-heading leading-none text-border/20 select-none pointer-events-none pr-4 whitespace-nowrap">
          ALLOYS
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[hsl(var(--gold))]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">Where We Operate</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading">Industries We Serve</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { num: "01", name: "Aerospace",        desc: "Turbine discs, blades, fasteners, and structural components requiring extreme temperature resistance." },
              { num: "02", name: "Oil & Gas",         desc: "Downhole tools, wellhead components, and sour gas service equipment needing unmatched corrosion resistance." },
              { num: "03", name: "Power Generation",  desc: "Industrial gas turbines and nuclear reactor components demanding long-term creep strength." },
              { num: "04", name: "Marine",            desc: "Propulsion shafts, exhaust systems, and subsea structures requiring resistance to seawater corrosion." },
              { num: "05", name: "Medical",           desc: "Biocompatible surgical implants and trauma fixation devices demanding ultra-high strength." },
            ].map((industry, i) => (
              <motion.div
                key={industry.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 bg-card group hover:bg-background transition-colors"
                data-testid={`industry-card-${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-xs font-mono tracking-widest mb-4" style={{ color: "hsl(var(--gold))" }}>
                  {industry.num}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{industry.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials Teaser ───────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[hsl(var(--gold))]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">Material Capability</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold font-heading mb-10 leading-tight">
                Uncompromising<br />Materials.
              </motion.h2>

              <div className="space-y-0 divide-y divide-border mb-10">
                {[
                  { family: "Nickel-based Superalloys",  grades: "Inconel 625 · 718 · Waspaloy · Hastelloy X · René 41" },
                  { family: "Cobalt-based Superalloys",  grades: "Stellite 6 · 21 · Haynes 188 · MP35N" },
                  { family: "Titanium Alloys",           grades: "Ti-6Al-4V · Ti-6Al-2Sn-4Zr-2Mo · Ti-3Al-2.5V" },
                  { family: "Iron-Nickel Alloys",        grades: "Incoloy 825 · 925 · A286" },
                ].map((mat, i) => (
                  <motion.div key={i} variants={fadeInUp} className="py-5 flex items-start justify-between gap-4 group">
                    <div>
                      <div className="font-heading font-bold text-base mb-1">{mat.family}</div>
                      <div className="text-xs text-muted-foreground font-mono">{mat.grades}</div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[hsl(var(--gold))]" />
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp}>
                <Link href="/materials">
                  <Button variant="outline" size="lg" className="rounded-none h-14 px-8 group font-semibold tracking-widest uppercase text-xs">
                    Full Material Specs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-4 grid-bg opacity-30 z-0" />
              <img
                src="/images/materials-turbine.png"
                alt="Aerospace turbine blades"
                className="w-full h-[520px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-1.5 border text-xs tracking-widest uppercase font-semibold text-muted-foreground"
              style={{ borderColor: "hsl(var(--gold) / 0.4)" }}>
              Start the Conversation
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 leading-tight">Ready to Specify?</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Contact our team to discuss your exact material requirements, certifications, and delivery schedules.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none h-14 px-10 text-sm font-semibold tracking-widest uppercase bg-[hsl(38_72%_55%)] hover:bg-[hsl(38_72%_48%)] text-black border-0" data-testid="home-final-cta">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
