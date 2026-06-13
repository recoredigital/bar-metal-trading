import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Mail } from "lucide-react";

const rise = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const alloyOptions = [
  "Inconel 625", "Inconel 718", "Waspaloy", "Hastelloy X", "René 41",
  "Stellite 6", "Stellite 21", "Haynes 188", "MP35N",
  "Ti-6Al-4V", "Ti-6Al-2Sn-4Zr-2Mo", "Ti-3Al-2.5V",
  "Incoloy 825", "Incoloy 925", "A286",
  "Other / Multiple",
];

const inputCls = "w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/50 py-3 text-sm focus:outline-none focus:border-foreground transition-colors font-light";
const labelCls = "block text-[10px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-2";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", material: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div className="w-full">

      {/* ─── HEADER (dark) ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-card border-b border-border">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={rise} className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground mb-6">
              Get in Touch
            </motion.p>
            <motion.h1 variants={rise}
              className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight leading-[1.0] mb-8"
            >
              Enquiries
            </motion.h1>
            <motion.p variants={rise} className="text-base text-muted-foreground font-light leading-relaxed max-w-lg">
              Submit your requirements below and a member of our team will respond promptly. All enquiries are treated in confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── BODY ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-20">

            {/* Info column */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-12">
              <motion.div variants={rise}>
                <h2 className="text-xl font-bold font-heading tracking-tight mb-8">Contact Details</h2>
                <div className="space-y-7">
                  <div className="flex gap-4">
                    <MapPin className="text-muted-foreground mt-0.5 flex-shrink-0" size={15} strokeWidth={1.5} />
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Registered Office</p>
                      <p className="text-sm font-light text-foreground/80">United Kingdom<br />England &amp; Wales</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-muted-foreground mt-0.5 flex-shrink-0" size={15} strokeWidth={1.5} />
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Enquiries</p>
                      <a href="mailto:enquiries@bartrading.co.uk" className="text-sm font-light text-foreground/80 hover:text-foreground transition-colors" data-testid="contact-email-link">
                        enquiries@bartrading.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={rise} className="border-t border-border pt-10">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Buying or Selling?</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  We work with buyers requiring specific material grades and sellers looking to place surplus inventory. All enquiries handled in strict confidence.
                </p>
              </motion.div>
            </motion.div>

            {/* Form column */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-24 flex flex-col items-center text-center border border-border"
                  data-testid="contact-success-state"
                >
                  <CheckCircle2 className="text-foreground mb-6" size={44} strokeWidth={1} />
                  <h2 className="text-3xl font-extrabold font-heading tracking-tight mb-4">Enquiry Received</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-sm font-light text-sm">
                    Thank you. A member of the BAR Trading team will review your enquiry and respond within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", material: "", message: "" }); }}
                    className="mt-10 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="contact-submit-another"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial="hidden" animate="visible" variants={stagger}
                  onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-8"
                  data-testid="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <motion.div variants={rise}>
                      <label className={labelCls}>Full Name <span className="text-foreground">*</span></label>
                      <input name="name" required value={form.name} onChange={onChange} placeholder="Your name" className={inputCls} data-testid="input-name" />
                    </motion.div>
                    <motion.div variants={rise}>
                      <label className={labelCls}>Company</label>
                      <input name="company" value={form.company} onChange={onChange} placeholder="Your company" className={inputCls} data-testid="input-company" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <motion.div variants={rise}>
                      <label className={labelCls}>Email Address <span className="text-foreground">*</span></label>
                      <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@company.com" className={inputCls} data-testid="input-email" />
                    </motion.div>
                    <motion.div variants={rise}>
                      <label className={labelCls}>Phone</label>
                      <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+44 ..." className={inputCls} data-testid="input-phone" />
                    </motion.div>
                  </div>

                  <motion.div variants={rise}>
                    <label className={labelCls}>Material / Alloy of Interest</label>
                    <select name="material" value={form.material} onChange={onChange}
                      className="w-full bg-transparent border-b border-border text-foreground py-3 text-sm focus:outline-none focus:border-foreground transition-colors font-light appearance-none"
                      data-testid="select-material"
                    >
                      <option value="">Select an alloy (optional)</option>
                      {alloyOptions.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </motion.div>

                  <motion.div variants={rise}>
                    <label className={labelCls}>Requirements <span className="text-foreground">*</span></label>
                    <textarea
                      name="message" required rows={5} value={form.message} onChange={onChange}
                      placeholder="Please describe your requirements — material grade, form, quantity, specification, delivery timescale, or other relevant details."
                      className={`${inputCls} resize-none`}
                      data-testid="input-message"
                    />
                  </motion.div>

                  <motion.div variants={rise} className="pt-2">
                    <button
                      type="submit"
                      className="h-12 px-10 bg-foreground text-background text-[11px] font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                      data-testid="button-submit"
                    >
                      Submit Enquiry
                    </button>
                    <p className="text-[11px] text-muted-foreground mt-4 font-light">
                      All enquiries are treated in strict confidence.
                    </p>
                  </motion.div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
