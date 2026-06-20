import React from "react";
import { motion, type Transition, type Variants } from "framer-motion";

const TRANSITION: Transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
const rise: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: TRANSITION },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const sections = [
  {
    num: "1",
    title: "About BAR Trading",
    body: 'BAR Trading is a UK-based business operating within the metals and materials trading sector. Throughout these Terms of Use, "BAR Trading", "we", "us" and "our" refer to the owner and operator of this website.',
  },
  {
    num: "2",
    title: "Website Content",
    body: "The information provided on this website is for general information purposes only. While we endeavour to keep all information accurate and up to date, we make no warranties, representations or guarantees regarding:",
    bullets: [
      "The completeness of information",
      "The accuracy of information",
      "The suitability of information for any purpose",
      "The availability of products, materials or services referenced on the website",
    ],
    footer: "Any reliance you place on information contained on this website is strictly at your own risk.",
  },
  {
    num: "3",
    title: "No Offer or Contract",
    body: "Nothing contained on this website constitutes:",
    bullets: [
      "A binding offer to buy or sell materials",
      "A contractual commitment",
      "Professional, legal, financial or technical advice",
    ],
    footer: "Any transactions entered into with BAR Trading will be governed by separate commercial agreements and terms.",
  },
  {
    num: "4",
    title: "Material Specifications and Availability",
    body: "Descriptions of metals, alloys, scrap, revert, surplus stock or other materials are provided for general information only. Actual material specifications, quantities, certifications, availability and pricing may vary and should always be confirmed directly with BAR Trading before any transaction takes place.",
  },
  {
    num: "5",
    title: "Intellectual Property",
    body: "Unless otherwise stated, all content on this website — including text, graphics, logos, images, layouts, and design elements — is owned by or licensed to BAR Trading and is protected by applicable intellectual property laws.",
    bullets_label_yes: "You may:",
    bullets_yes: [
      "View website content",
      "Print content for personal or business reference",
    ],
    bullets_label_no: "You may not:",
    bullets_no: [
      "Reproduce website content for commercial purposes",
      "Modify website content",
      "Distribute website content without written permission",
    ],
  },
  {
    num: "6",
    title: "Acceptable Use",
    body: "You agree not to:",
    bullets: [
      "Use the website unlawfully",
      "Attempt to gain unauthorised access to the website or its systems",
      "Introduce malicious software or code",
      "Interfere with website operation or security",
      "Use website content in a misleading or fraudulent manner",
    ],
  },
  {
    num: "7",
    title: "Third-Party Links",
    body: "This website may contain links to third-party websites. These links are provided for convenience only. BAR Trading has no control over and accepts no responsibility for the content, policies or practices of third-party websites. Accessing third-party websites is at your own risk.",
  },
  {
    num: "8",
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, BAR Trading shall not be liable for any loss or damage arising from:",
    bullets: [
      "Use of this website",
      "Inability to access this website",
      "Reliance on website content",
      "Errors or omissions in website content",
      "Temporary interruption or unavailability of the website",
    ],
    footer: "Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.",
  },
  {
    num: "9",
    title: "Website Availability",
    body: "We aim to ensure the website is available at all times but do not guarantee uninterrupted access. We reserve the right to suspend, withdraw or modify the website at any time without notice.",
  },
  {
    num: "10",
    title: "Privacy and Cookies",
    body: "Your use of this website is also governed by our Privacy Policy and Cookie Policy. Please review these documents to understand how your information is collected and processed.",
  },
  {
    num: "11",
    title: "Changes to These Terms",
    body: "BAR Trading reserves the right to amend these Terms of Use at any time. Updated versions will be published on this page and will take effect immediately upon publication.",
  },
  {
    num: "12",
    title: "Governing Law",
    body: "These Terms of Use shall be governed by and construed in accordance with the laws of Scotland. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the Scottish courts.",
  },
];

function Bullet({ text }: { text: string }) {
  return (
    <li className="text-sm text-muted-foreground font-light flex gap-3">
      <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
      {text}
    </li>
  );
}

export default function Terms() {
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
              Website Terms<br />of Use
            </motion.h1>
            <motion.p variants={rise} className="text-sm text-muted-foreground font-light">
              Last Updated: June 2024
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
            Welcome to the BAR Trading website. By accessing and using this website, you agree to be bound by these Terms of Use. If you do not agree with these terms, please do not use this website.
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
                  <span className="text-[10px] font-mono text-muted-foreground mt-1 min-w-[2rem]">
                    {s.num.padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold font-heading mb-4">{s.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4">{s.body}</p>

                    {s.bullets && (
                      <ul className="space-y-2 mb-4">
                        {s.bullets.map((b, i) => <Bullet key={i} text={b} />)}
                      </ul>
                    )}

                    {s.bullets_yes && (
                      <>
                        <p className="text-sm text-muted-foreground font-light mb-2">{s.bullets_label_yes}</p>
                        <ul className="space-y-2 mb-4">
                          {s.bullets_yes.map((b, i) => <Bullet key={i} text={b} />)}
                        </ul>
                        <p className="text-sm text-muted-foreground font-light mb-2">{s.bullets_label_no}</p>
                        <ul className="space-y-2 mb-4">
                          {s.bullets_no!.map((b, i) => <Bullet key={i} text={b} />)}
                        </ul>
                      </>
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
              If you have any questions regarding these Terms of Use, please contact:
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
