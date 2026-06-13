import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Who We Are</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              About BAR Trading Ltd
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A specialist metals trading house focused on the high-performance superalloy sector. UK-based, globally connected, and deeply knowledgeable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold font-heading mb-8">
                Specialist Knowledge in a Demanding Sector
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  BAR Trading Ltd is a UK-based trading house dedicated exclusively to high-performance superalloy metals. We operate at the intersection of materials science and global industrial supply — sourcing and distributing the critical alloys that underpin some of the world's most demanding engineering applications.
                </p>
                <p>
                  Our focus is the superalloy sector: nickel-based, cobalt-based, titanium, and iron-nickel alloys that are specified in aerospace gas turbines, subsea oil and gas equipment, land-based power generation, marine propulsion, and medical device manufacture.
                </p>
                <p>
                  We understand that buyers in these industries are not purchasing commodities. Every enquiry involves specific metallurgical requirements, tight dimensional tolerances, precise certification standards, and supply chain accountability. Our approach reflects that reality.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6 pt-2"
            >
              {[
                {
                  title: "Technical Understanding",
                  desc: "We speak the language of materials engineers and procurement professionals alike — alloy designations, mechanical properties, heat treatment conditions, and applicable standards."
                },
                {
                  title: "Relationship-Driven",
                  desc: "We build long-term working relationships with both buyers and sellers, prioritising reliability and transparency over transactional volume."
                },
                {
                  title: "Global Supply Network",
                  desc: "Access to premier mills, processors, and stockholders across Europe, North America, and Asia — giving clients confidence in traceability and provenance."
                },
                {
                  title: "Focused Scope",
                  desc: "We operate within a defined sector and we know it well. Our value lies in depth of specialisation, not breadth of catalogue."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-5 p-6 border border-border bg-card"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What We Trade</h2>
            <p className="text-muted-foreground text-lg">
              Our inventory and sourcing capability spans the principal superalloy families used across high-value industrial sectors.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                family: "Nickel-based",
                alloys: "Inconel 625, Inconel 718, Waspaloy, Hastelloy X, René 41",
                note: "The most widely specified class of superalloy in aerospace and energy applications."
              },
              {
                family: "Cobalt-based",
                alloys: "Stellite 6, Stellite 21, Haynes 188, MP35N",
                note: "Superior wear and hot corrosion resistance in valve, turbine, and medical applications."
              },
              {
                family: "Titanium Alloys",
                alloys: "Ti-6Al-4V, Ti-6Al-2Sn-4Zr-2Mo, Ti-3Al-2.5V",
                note: "Exceptional strength-to-weight ratio for airframe, engine, and medical structures."
              },
              {
                family: "Iron-Nickel",
                alloys: "Incoloy 825, Incoloy 925, A286",
                note: "Cost-effective performance in corrosive environments and elevated-temperature service."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 border border-border bg-background">
                <div className="h-px w-10 bg-primary mb-6" />
                <h3 className="font-heading font-bold text-xl mb-3">{item.family}</h3>
                <p className="text-primary text-sm font-mono mb-4 leading-relaxed">{item.alloys}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Approach</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold font-heading mb-8">
              Nimble by Design. Expert by Commitment.
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                As an independent trading house, we are able to move quickly and engage directly with both buyers and sellers without the bureaucratic overhead of larger organisations. Our clients benefit from direct access to decision-makers and a level of responsiveness that sets us apart.
              </p>
              <p>
                We are selective in the relationships we build. We work with clients and suppliers whose standards match our own — technically rigorous, commercially straightforward, and committed to quality at every stage of the supply chain.
              </p>
              <p>
                BAR Trading Ltd is registered in the United Kingdom. We are committed to full compliance with applicable export controls, materials certification requirements, and traceability standards across all jurisdictions in which we operate.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Discuss Your Requirements</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Whether you are sourcing a specific alloy grade or looking to place surplus inventory, we would welcome the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-none h-14 px-10 font-medium tracking-wide group" data-testid="about-cta-contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/materials">
                <Button size="lg" variant="outline" className="rounded-none h-14 px-10 font-medium tracking-wide" data-testid="about-cta-materials">
                  View Materials
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
