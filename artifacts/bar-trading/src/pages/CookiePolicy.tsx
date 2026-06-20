import React from "react";
import { motion, type Transition, type Variants } from "framer-motion";

const TRANSITION: Transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
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

export default function CookiePolicy() {
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
              Cookie<br />Policy
            </motion.h1>
            <motion.p variants={rise} className="text-sm text-muted-foreground font-light">
              Last Updated: June 2024
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ───────────────────────────────────────────────── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-base text-muted-foreground leading-relaxed font-light"
          >
            This Cookie Policy explains how BAR Trading ("we", "us", "our") uses cookies and similar technologies when you visit our website.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}
            className="text-base text-muted-foreground leading-relaxed font-light"
          >
            By continuing to use our website, you consent to the use of cookies in accordance with this policy, subject to your cookie preferences.
          </motion.p>
        </div>
      </section>

      {/* ─── BODY ────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="divide-y divide-border"
          >

            {/* What Are Cookies */}
            <motion.div variants={rise} className="py-10">
              <div className="flex gap-6 items-start">
                <span className="text-[10px] font-mono text-muted-foreground mt-1 min-w-[2rem]">01</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold font-heading mb-4">What Are Cookies?</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-3">
                    Cookies are small text files that are stored on your device when you visit a website. They help websites function properly, improve user experience and provide information about how visitors use the site.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    Cookies cannot be used to identify you personally, although some information collected may be linked to other personal data you provide.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* How We Use Cookies */}
            <motion.div variants={rise} className="py-10">
              <div className="flex gap-6 items-start">
                <span className="text-[10px] font-mono text-muted-foreground mt-1 min-w-[2rem]">02</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold font-heading mb-4">How We Use Cookies</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4">We use cookies to:</p>
                  <ul className="space-y-2">
                    {[
                      "Ensure the website functions correctly",
                      "Improve website performance and user experience",
                      "Understand how visitors use our website",
                      "Monitor website traffic and engagement",
                      "Maintain website security",
                    ].map((b, i) => <Bullet key={i} text={b} />)}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Types of Cookies */}
            <motion.div variants={rise} className="py-10">
              <div className="flex gap-6 items-start">
                <span className="text-[10px] font-mono text-muted-foreground mt-1 min-w-[2rem]">03</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold font-heading mb-6">Types of Cookies We Use</h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold font-heading mb-2">Strictly Necessary Cookies</h3>
                      <p className="text-sm text-muted-foreground font-light mb-3">These cookies are essential for the operation of our website and cannot be switched off. Examples include:</p>
                      <ul className="space-y-2">
                        {["Security cookies", "Session management cookies", "Form submission functionality"].map((b, i) => <Bullet key={i} text={b} />)}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold font-heading mb-2">Analytics Cookies</h3>
                      <p className="text-sm text-muted-foreground font-light mb-3">These cookies help us understand how visitors interact with our website by collecting anonymous information. Examples may include Google Analytics and Microsoft Clarity. Information collected may include:</p>
                      <ul className="space-y-2">
                        {["Pages visited", "Time spent on pages", "Device and browser information", "General geographic location"].map((b, i) => <Bullet key={i} text={b} />)}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold font-heading mb-2">Functional Cookies</h3>
                      <p className="text-sm text-muted-foreground font-light">These cookies enable enhanced functionality and personalisation, such as remembering user preferences.</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold font-heading mb-2">Marketing Cookies</h3>
                      <p className="text-sm text-muted-foreground font-light">Where used, marketing cookies help us understand the effectiveness of our marketing activities and may be set by third-party services such as LinkedIn or Google. These cookies will only be activated where you have provided consent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Third-Party Cookies */}
            <motion.div variants={rise} className="py-10">
              <div className="flex gap-6 items-start">
                <span className="text-[10px] font-mono text-muted-foreground mt-1 min-w-[2rem]">04</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold font-heading mb-4">Third-Party Cookies</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4">Some cookies may be placed by trusted third-party service providers that support our website and business operations. Examples may include:</p>
                  <ul className="space-y-2 mb-4">
                    {["Google Analytics", "Google Tag Manager", "Microsoft Clarity", "LinkedIn Insight Tag"].map((b, i) => <Bullet key={i} text={b} />)}
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">These providers may collect information in accordance with their own privacy policies.</p>
                </div>
              </div>
            </motion.div>

            {/* Managing Cookies */}
            <motion.div variants={rise} className="py-10">
              <div className="flex gap-6 items-start">
                <span className="text-[10px] font-mono text-muted-foreground mt-1 min-w-[2rem]">05</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold font-heading mb-4">Managing Cookies</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4">When you first visit our website, you will be presented with a cookie banner allowing you to:</p>
                  <ul className="space-y-2 mb-4">
                    {["Accept all cookies", "Reject non-essential cookies", "Manage your cookie preferences"].map((b, i) => <Bullet key={i} text={b} />)}
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">You can also control and delete cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.</p>
                </div>
              </div>
            </motion.div>

            {/* Changes */}
            <motion.div variants={rise} className="py-10">
              <div className="flex gap-6 items-start">
                <span className="text-[10px] font-mono text-muted-foreground mt-1 min-w-[2rem]">06</span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold font-heading mb-4">Changes to This Cookie Policy</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">We may update this Cookie Policy from time to time to reflect changes in legal requirements or website functionality. Any updates will be published on this page.</p>
                </div>
              </div>
            </motion.div>

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
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-neutral-500 mb-5">Contact Us</p>
            <h2 className="text-2xl font-extrabold font-heading tracking-tight text-neutral-900 mb-4">Questions?</h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-2">
              If you have any questions regarding this Cookie Policy, please contact:
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
