import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const rise = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <div className="w-full">

      {/* ─── HERO (dark) ──────────────────────────────────────────── */}
      <section className="relative min-h-[96vh] flex items-end bg-background overflow-hidden">
        {/* full-bleed image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-superalloy.png"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* hard gradient: left very dark, right shows image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0_0%_5%)] via-[hsl(0_0%_5%/0.82)] to-[hsl(0_0%_5%/0.25)]" />
          {/* bottom fade so content area is clean */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-10 relative z-10 pb-20 md:pb-28">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={rise} className="text-[11px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
              United Kingdom — Superalloy Trading House
            </motion.p>
            <motion.h1 variants={rise}
              className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold font-heading leading-[1.0] tracking-tight text-foreground mb-8"
            >
              Precision Metals<br />for Extreme<br />Environments.
            </motion.h1>
            <motion.p variants={rise} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg font-light">
              BAR Trading Ltd sources and supplies high-performance superalloys — the critical materials behind aerospace turbines, subsea drilling equipment, and industrial power generation.
            </motion.p>
            <motion.div variants={rise} className="flex flex-wrap gap-4">
              <Link href="/materials">
                <button
                  className="h-12 px-8 bg-foreground text-background text-[11px] font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity flex items-center gap-2 group"
                  data-testid="home-cta-materials"
                >
                  View Alloys
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="h-12 px-8 border border-foreground/40 text-foreground text-[11px] font-semibold tracking-[0.2em] uppercase hover:border-foreground transition-colors"
                  data-testid="home-cta-contact"
                >
                  Submit Enquiry
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS (light) ────────────────────────────────────────── */}
      <section className="panel-light border-b" style={{ borderColor: "hsl(0 0% 82%)" }}>
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 divide-x"
            style={{ borderColor: "hsl(0 0% 82%)" }}
          >
            {[
              { n: "16+",  label: "Alloy Grades" },
              { n: "4",    label: "Alloy Families" },
              { n: "5",    label: "Industries Served" },
              { n: "UK",   label: "Registered Trading House" },
            ].map((s, i) => (
              <motion.div key={i} variants={rise} className="py-10 px-8 text-center" style={{ borderColor: "hsl(0 0% 82%)" }}>
                <div className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-1.5" style={{ color: "hsl(0 0% 7%)" }}>
                  {s.n}
                </div>
                <div className="text-[10px] font-semibold tracking-[0.22em] uppercase" style={{ color: "hsl(0 0% 44%)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── VALUE PROP (dark) ────────────────────────────────────── */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-6">
                Our Proposition
              </motion.p>
              <motion.h2 variants={rise}
                className="text-4xl md:text-5xl font-extrabold font-heading leading-[1.1] tracking-tight mb-8"
              >
                Specialist Knowledge.<br />Direct Supply.
              </motion.h2>
              <motion.p variants={rise} className="text-muted-foreground text-base leading-relaxed mb-5 font-light">
                We operate at the intersection of metallurgical science and global industrial supply. Our value lies in depth — knowing the materials, their applications, and the engineering demands they must meet.
              </motion.p>
              <motion.p variants={rise} className="text-muted-foreground text-base leading-relaxed font-light">
                Whether you require raw billets, precision bar stock, or specialised tubular products, we provide a reliable supply chain built on traceability, certification, and direct relationships with premier mills worldwide.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
              className="grid grid-cols-2 gap-px bg-border"
            >
              {[
                { num: "01", title: "Assured Quality",   body: "Materials certified to aerospace and international standards." },
                { num: "02", title: "Global Network",    body: "Deep relationships with premier mills and processors worldwide." },
                { num: "03", title: "Extensive Range",   body: "Nickel, Cobalt, Titanium, and Iron-Nickel alloy families." },
                { num: "04", title: "Technical Acumen",  body: "Deep understanding of metallurgical properties and end applications." },
              ].map((f, i) => (
                <motion.div key={i} variants={rise} className="bg-card p-7 hover:bg-background transition-colors">
                  <p className="text-[10px] font-mono text-muted-foreground mb-4">{f.num}</p>
                  <h3 className="text-sm font-bold font-heading mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{f.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES (light) ───────────────────────────────────── */}
      <section className="panel-light py-28 border-y" style={{ borderColor: "hsl(0 0% 82%)" }}>
        <div className="container mx-auto px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: "hsl(0 0% 44%)" }}>
              Where We Operate
            </motion.p>
            <motion.h2 variants={rise}
              className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-16" style={{ color: "hsl(0 0% 7%)" }}
            >
              Industries We Serve
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y"
            style={{ borderColor: "hsl(0 0% 82%)" }}
          >
            {[
              { n: "01", name: "Aerospace",        desc: "Turbine discs, blades, fasteners, and structural components requiring extreme temperature resistance." },
              { n: "02", name: "Oil & Gas",         desc: "Downhole tools, wellhead components, and sour gas service equipment needing unmatched corrosion resistance." },
              { n: "03", name: "Power Generation",  desc: "Industrial gas turbines and nuclear reactor components demanding long-term creep strength." },
              { n: "04", name: "Marine",            desc: "Propulsion shafts, exhaust systems, and subsea structures in seawater corrosive environments." },
              { n: "05", name: "Medical",           desc: "Biocompatible surgical implants and trauma fixation devices demanding ultra-high strength and precision." },
            ].map((ind, i) => (
              <motion.div
                key={ind.name} variants={rise}
                className="px-8 py-10 hover:bg-white transition-colors"
                style={{ borderColor: "hsl(0 0% 82%)" }}
                data-testid={`industry-card-${ind.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <p className="text-[10px] font-mono mb-5" style={{ color: "hsl(0 0% 50%)" }}>{ind.n}</p>
                <h3 className="text-xl font-bold font-heading mb-3" style={{ color: "hsl(0 0% 7%)" }}>{ind.name}</h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: "hsl(0 0% 38%)" }}>{ind.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── MATERIALS TEASER (dark) ──────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* image */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
              className="relative order-2 lg:order-1"
            >
              <img
                src="/images/materials-turbine.png"
                alt="Aerospace turbine components"
                className="w-full h-[500px] object-cover grayscale brightness-75"
              />
            </motion.div>

            {/* text */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-6">
                Material Capability
              </motion.p>
              <motion.h2 variants={rise}
                className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-12 leading-tight"
              >
                Uncompromising<br />Materials.
              </motion.h2>

              <div className="divide-y divide-border mb-12">
                {[
                  { fam: "Nickel-based Superalloys",  gr: "Inconel 625 · 718 · Waspaloy · Hastelloy X · René 41" },
                  { fam: "Cobalt-based Superalloys",  gr: "Stellite 6 · 21 · Haynes 188 · MP35N" },
                  { fam: "Titanium Alloys",           gr: "Ti-6Al-4V · Ti-6Al-2Sn-4Zr-2Mo · Ti-3Al-2.5V" },
                  { fam: "Iron-Nickel Alloys",        gr: "Incoloy 825 · 925 · A286" },
                ].map((m, i) => (
                  <motion.div key={i} variants={rise} className="py-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="font-heading font-bold text-sm mb-1.5">{m.fam}</p>
                      <p className="text-[11px] text-muted-foreground font-mono tracking-wide">{m.gr}</p>
                    </div>
                    <ArrowRight size={14} className="text-muted-foreground mt-1 flex-shrink-0 opacity-50" />
                  </motion.div>
                ))}
              </div>

              <motion.div variants={rise}>
                <Link href="/materials">
                  <button
                    className="h-12 px-8 border border-foreground/40 text-foreground text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors flex items-center gap-2 group"
                  >
                    Full Material Specifications
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA (dark) ───────────────────────────────────────────── */}
      <section className="py-32 bg-card border-t border-border">
        <div className="container mx-auto px-6 md:px-10 text-center max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-8">
              BAR Trading Ltd
            </motion.p>
            <motion.h2 variants={rise}
              className="text-5xl md:text-6xl font-extrabold font-heading tracking-tight mb-8 leading-[1.05]"
            >
              Ready to<br />Specify?
            </motion.h2>
            <motion.p variants={rise} className="text-muted-foreground text-base leading-relaxed mb-12 font-light">
              Contact our team to discuss your exact material requirements, certifications, and delivery schedules.
            </motion.p>
            <motion.div variants={rise}>
              <Link href="/contact">
                <button
                  className="h-13 px-10 bg-foreground text-background text-[11px] font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                  data-testid="home-final-cta"
                >
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
