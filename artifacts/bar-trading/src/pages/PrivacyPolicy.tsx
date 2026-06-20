import React from "react";
import { motion, type Transition, type Variants } from "framer-motion";
import { Link } from "wouter";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const TRANSITION: Transition = { duration: 0.6, ease: EASE };
const rise: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: TRANSITION },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function Bullet({ text }: { text: string }) {
  return (
    <li className="text-sm text-muted-foreground font-light flex gap-3">
      <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
      {text}
    </li>
  );
}

const sections = [
  {
    num: "1",
    title: "Who We Are",
    body: "BAR Trading is a UK-based sole trader business operating within the metals and materials trading sector.",
    contact: true,
  },
  {
    num: "2",
    title: "Information We Collect",
    body: "We may collect the following information:",
    bullets: [
      "Name",
      "Company name",
      "Email address",
      "Telephone number",
      "Job title",
      "Enquiry details",
      "Information voluntarily submitted through our contact forms",
    ],
    footer: "We may also automatically collect certain technical information including IP address, browser type, device information, pages visited, and website usage data.",
  },
  {
    num: "3",
    title: "How We Use Your Information",
    body: "We use personal information to:",
    bullets: [
      "Respond to enquiries",
      "Discuss potential trading opportunities",
      "Manage supplier and customer relationships",
      "Improve our website and services",
      "Maintain website security",
      "Comply with legal obligations",
    ],
  },
  {
    num: "4",
    title: "Legal Basis for Processing",
    body: "We process personal information where:",
    bullets: [
      "It is necessary for our legitimate business interests",
      "It is necessary to fulfil a contract or take steps prior to entering a contract",
      "We are required to comply with legal obligations",
      "You have provided consent where required",
    ],
  },
  {
    num: "5",
    title: "Marketing Communications",
    body: "We may contact you regarding our services where there is a legitimate business reason to do so or where you have requested information from us. You can request that we stop contacting you at any time.",
  },
  {
    num: "6",
    title: "Sharing Your Information",
    body: "We do not sell personal information. Information may be shared with trusted service providers who assist with website hosting, analytics, IT support, professional advice or legal compliance.",
  },
  {
    num: "7",
    title: "Data Retention",
    body: "We retain information only for as long as reasonably necessary to fulfil the purposes outlined in this policy or to meet legal obligations.",
  },
  {
    num: "8",
    title: "Data Security",
    body: "Appropriate measures are taken to protect personal information against unauthorised access, disclosure, loss or misuse.",
  },
  {
    num: "9",
    title: "Your Rights",
    body: "Under UK data protection law, you may have the right to:",
    bullets: [
      "Access your personal information",
      "Correct inaccurate information",
      "Request deletion of your information",
      "Restrict processing",
      "Object to processing",
      "Request transfer of your information",
      "Withdraw consent where applicable",
    ],
  },
  {
    num: "10",
    title: "Cookies",
    body: "Our website may use cookies and analytics tools to improve user experience and understand website performance.",
    cookieLink: true,
  },
  {
    num: "11",
    title: "Changes to This Policy",
    body: "This Privacy Policy may be updated from time to time. Any changes will be published on this page.",
  },
];

export default function PrivacyPolicy() {
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
              Privacy<br />Policy
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
            BAR Trading ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use and protect your personal information when you visit our website or contact us.
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

                    {s.footer && (
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.footer}</p>
                    )}

                    {s.contact && (
                      <p className="text-sm text-muted-foreground font-light">
                        For any privacy-related enquiries, please contact:{" "}
                        <a href="mailto:info@bartrading.co.uk" className="underline underline-offset-4 hover:text-foreground transition-colors">
                          info@bartrading.co.uk
                        </a>
                      </p>
                    )}

                    {s.cookieLink && (
                      <p className="text-sm text-muted-foreground font-light mt-2">
                        Please refer to our{" "}
                        <Link href="/cookie-policy" className="underline underline-offset-4 hover:text-foreground transition-colors">
                          Cookie Policy
                        </Link>{" "}
                        for further details.
                      </p>
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
              For any questions regarding this Privacy Policy or your personal information, please contact:
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
