import React from "react";
import { motion } from "framer-motion";

const rise = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const sections = [
  {
    num: "1",
    title: "Compliance with Laws",
    body: "Suppliers must comply with all applicable laws, regulations and industry requirements in the countries in which they operate. This includes, but is not limited to:",
    bullets: [
      "Employment legislation",
      "Health and safety regulations",
      "Environmental regulations",
      "Trade and export controls",
      "Anti-bribery and anti-corruption legislation",
    ],
  },
  {
    num: "2",
    title: "Ethical Business Conduct",
    body: "Suppliers must conduct business honestly and ethically at all times. Suppliers shall not:",
    bullets: [
      "Offer or accept bribes, kickbacks or improper payments",
      "Engage in fraud, deception or misrepresentation",
      "Falsify records, certifications or documentation",
      "Participate in any unlawful or unethical business practices",
    ],
  },
  {
    num: "3",
    title: "Human Rights and Labour Standards",
    body: "BAR Trading expects suppliers to respect internationally recognised human rights. Suppliers must:",
    bullets: [
      "Prohibit forced, bonded or involuntary labour",
      "Prohibit child labour",
      "Provide fair wages and working conditions",
      "Respect freedom of association where permitted by law",
      "Maintain a workplace free from discrimination and harassment",
    ],
  },
  {
    num: "4",
    title: "Health and Safety",
    body: "Suppliers are expected to provide a safe and healthy working environment for employees, contractors and visitors. Appropriate measures should be implemented to:",
    bullets: [
      "Identify workplace hazards",
      "Reduce health and safety risks",
      "Provide suitable training",
      "Comply with relevant health and safety legislation",
    ],
  },
  {
    num: "5",
    title: "Environmental Responsibility",
    body: "BAR Trading supports responsible environmental practices throughout the supply chain. Suppliers are encouraged to:",
    bullets: [
      "Minimise waste generation",
      "Reduce energy consumption where practical",
      "Manage materials responsibly",
      "Comply with environmental legislation and permits",
      "Promote recycling and resource efficiency",
    ],
  },
  {
    num: "6",
    title: "Material Integrity and Traceability",
    body: "Where applicable, suppliers should maintain accurate records regarding:",
    bullets: [
      "Material origin",
      "Material specifications",
      "Certifications",
      "Testing data",
      "Chain of custody information",
    ],
    footer: "All documentation supplied to BAR Trading should be accurate and complete.",
  },
  {
    num: "7",
    title: "Responsible Sourcing",
    body: "Suppliers should take reasonable steps to ensure that materials supplied have been sourced responsibly and legally. BAR Trading reserves the right to request supporting documentation where appropriate.",
  },
  {
    num: "8",
    title: "Confidentiality",
    body: "Suppliers must protect confidential business information obtained through their relationship with BAR Trading and must not disclose such information without appropriate authorisation.",
  },
  {
    num: "9",
    title: "Reporting Concerns",
    body: "Suppliers are encouraged to raise concerns regarding suspected unethical, illegal or unsafe practices relating to business activities involving BAR Trading.",
  },
  {
    num: "10",
    title: "Compliance with this Code",
    body: "BAR Trading expects suppliers to operate in accordance with the principles set out in this Code. Failure to comply may affect future business relationships.",
  },
];

export default function SupplierCode() {
  return (
    <div className="w-full">

      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-6">
              Legal &amp; Compliance
            </motion.p>
            <motion.h1 variants={rise}
              className="text-5xl md:text-6xl font-extrabold font-heading tracking-tight leading-[1.0] mb-6"
            >
              Supplier Code<br />of Conduct
            </motion.h1>
            <motion.p variants={rise} className="text-sm text-muted-foreground font-light">
              Last Updated: June 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ───────────────────────────────────────────────── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-base text-muted-foreground leading-relaxed font-light"
          >
            BAR Trading is committed to conducting business ethically, responsibly and in accordance with applicable laws and regulations. We expect all suppliers, subcontractors, service providers and business partners to uphold the principles outlined in this Supplier Code of Conduct.
          </motion.p>
        </div>
      </section>

      {/* ─── SECTIONS ────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="divide-y divide-border"
          >
            {sections.map((s) => (
              <motion.div key={s.num} variants={rise} className="py-10">
                <div className="flex gap-6 items-start">
                  <span className="text-[10px] font-mono text-muted-foreground mt-1 min-w-[2rem]">{s.num.padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold font-heading mb-4">{s.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4">{s.body}</p>
                    {s.bullets && (
                      <ul className="space-y-2 mb-4">
                        {s.bullets.map((b, i) => (
                          <li key={i} className="text-sm text-muted-foreground font-light flex gap-3">
                            <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.footer && (
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.footer}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────────── */}
      <section className="panel-light border-t py-20" style={{ borderColor: "hsl(0 0% 82%)" }}>
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-neutral-500 mb-5">Contact</p>
            <h2 className="text-2xl font-extrabold font-heading tracking-tight text-neutral-900 mb-4">Questions?</h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-2">
              Questions regarding this Supplier Code of Conduct may be directed to:
            </p>
            <p className="text-sm font-medium text-neutral-900 mb-1">BAR Trading</p>
            <a
              href="mailto:info@bartrading.co.uk"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors underline underline-offset-4"
            >
              info@bartrading.co.uk
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
