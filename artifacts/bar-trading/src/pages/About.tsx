import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

const rise: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function About() {
  useSeo(
    "About BAR Trading Ltd | UK Superalloy Metals Trader",
    "BAR Trading Ltd is a UK-based superalloy metals trading house. Asset-light and relationship-driven, we operate across aerospace and industrial supply chains worldwide."
  );
  return (
    <div className="w-full">

      {/* ─── HEADER (dark) ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-6">
              Who We Are
            </motion.p>
            <motion.h1 variants={rise}
              className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight leading-[1.0] mb-8"
            >
              About<br />BAR Trading
            </motion.h1>
            <motion.p variants={rise} className="text-base text-muted-foreground font-light leading-relaxed max-w-xl">
              A specialist metals trading house focused on the high-performance superalloy sector. UK-based, globally connected, technically credible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE ARE (dark) ─────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.h2 variants={rise} className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight mb-8 leading-tight">
                Specialist Knowledge<br />in a Demanding Sector.
              </motion.h2>
              <div className="space-y-5 text-muted-foreground text-base leading-relaxed font-light">
                <motion.p variants={rise}>
                  BAR Trading Ltd is a UK-based specialist trading house dedicated to high-performance superalloy metals. We buy surplus, excess, and off-specification stock from aerospace and industrial clients, and supply certified material to manufacturers, processors, and end users across the globe.
                </motion.p>
                <motion.p variants={rise}>
                  We operate without a physical yard — an asset-light model that keeps us fast, flexible, and cost-competitive. Where material processing is required — cutting to length, re-testing, chemical analysis, or third-party re-certification — we coordinate it through our established network of approved specialist processors.
                </motion.p>
                <motion.p variants={rise}>
                  Our focus is the superalloy sector: nickel-based, cobalt-based, titanium, and iron-nickel alloys specified in aerospace gas turbines, subsea oil and gas equipment, land-based power generation, marine propulsion, and medical device manufacture. We understand that buyers in these sectors are not purchasing commodities — and we respond accordingly.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
              className="divide-y divide-border pt-2"
            >
              {[
                { n: "01", title: "We Buy & Sell",            body: "Active buyers of surplus, excess, and off-spec superalloy stock from aerospace OEMs, MROs, and industrial clients. Trusted suppliers to manufacturers and end users worldwide." },
                { n: "02", title: "Processing Facilitation", body: "No physical yard — but we coordinate cutting, testing, chemical analysis, and third-party re-certification through our network of approved processors when required." },
                { n: "03", title: "Global Supply Network",   body: "Established relationships with premier mills, stockholders, and processors across Europe, North America, and Asia — ensuring full traceability and provenance." },
                { n: "04", title: "Technical Credibility",   body: "We speak the language of materials engineers: alloy designations, heat treatment conditions, AMS/ASTM standards, and certification requirements." },
              ].map((item, i) => (
                <motion.div key={i} variants={rise} className="py-7">
                  <p className="text-[10px] font-mono text-muted-foreground mb-3">{item.n}</p>
                  <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE TRADE (light) ─────────────────────────────────── */}
      <section className="panel-light border-y py-28" style={{ borderColor: "hsl(0 0% 82%)" }}>
        <div className="container mx-auto px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: "hsl(0 0% 44%)" }}>
              Our Trading Scope
            </motion.p>
            <motion.h2 variants={rise} className="text-4xl font-extrabold font-heading tracking-tight mb-16" style={{ color: "hsl(0 0% 7%)" }}>
              What We Trade
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x"
            style={{ borderColor: "hsl(0 0% 82%)" }}
          >
            {[
              { label: "Nickel-based",  grades: "Inconel 625 · 718\nWaspaloy · Hastelloy X\nRené 41",           note: "The most widely specified class of superalloy in aerospace and energy." },
              { label: "Cobalt-based",  grades: "Stellite 6 · 21\nHaynes 188 · MP35N",                         note: "Superior wear and hot corrosion resistance in valve, turbine, and medical applications." },
              { label: "Titanium",      grades: "Ti-6Al-4V\nTi-6Al-2Sn-4Zr-2Mo\nTi-3Al-2.5V",                 note: "Exceptional strength-to-weight for airframe, engine, and medical structures." },
              { label: "Iron-Nickel",   grades: "Incoloy 825 · 925\nA286",                                      note: "Performance in corrosive environments and elevated-temperature service." },
            ].map((item, i) => (
              <motion.div key={i} variants={rise} className="px-8 py-8 first:pl-0 last:pr-0" style={{ borderColor: "hsl(0 0% 82%)" }}>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: "hsl(0 0% 44%)" }}>{item.label}</p>
                <p className="text-sm font-mono whitespace-pre-line leading-relaxed mb-5" style={{ color: "hsl(0 0% 14%)" }}>{item.grades}</p>
                <p className="text-xs leading-relaxed font-light" style={{ color: "hsl(0 0% 42%)" }}>{item.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── APPROACH (dark) ───────────────────────────────────────── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-6">
              Our Approach
            </motion.p>
            <motion.h2 variants={rise} className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight mb-10 leading-tight">
              Nimble by Design.<br />Expert by Commitment.
            </motion.h2>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed font-light">
              <motion.p variants={rise}>
                As an independent trading house, we are able to move quickly and engage directly with both buyers and sellers without the bureaucratic overhead of larger organisations. Our clients benefit from direct access to decision-makers and a level of responsiveness that sets us apart.
              </motion.p>
              <motion.p variants={rise}>
                We are selective in the relationships we build. We work with clients and suppliers whose standards match our own — technically rigorous, commercially straightforward, and committed to quality at every stage of the supply chain.
              </motion.p>
              <motion.p variants={rise}>
                BAR Trading Ltd is registered in the United Kingdom. We operate in full compliance with applicable export controls, materials certification requirements, and traceability standards.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA (dark) ────────────────────────────────────────────── */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading tracking-tight mb-2">Discuss Your Requirements</h2>
            <p className="text-muted-foreground text-sm font-light">
              Whether sourcing or placing surplus inventory, we welcome the conversation.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/contact">
              <button className="h-12 px-8 bg-foreground text-background text-[11px] font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity flex items-center gap-2 group" data-testid="about-cta-contact">
                Get in Touch
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link href="/materials">
              <button className="h-12 px-8 border border-border text-foreground text-[11px] font-semibold tracking-[0.2em] uppercase hover:border-foreground transition-colors" data-testid="about-cta-materials">
                View Materials
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
