import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Mail } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const alloyOptions = [
  "Inconel 625",
  "Inconel 718",
  "Waspaloy",
  "Hastelloy X",
  "René 41",
  "Stellite 6",
  "Stellite 21",
  "Haynes 188",
  "MP35N",
  "Ti-6Al-4V",
  "Ti-6Al-2Sn-4Zr-2Mo",
  "Ti-3Al-2.5V",
  "Incoloy 825",
  "Incoloy 925",
  "A286",
  "Other / Multiple",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    material: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Get in Touch</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              Contact & Enquiries
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your material requirements? Submit your enquiry below and a member of our team will respond promptly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Body */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-1 space-y-10"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold font-heading mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-0.5 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Registered Office</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        United Kingdom<br />
                        England & Wales
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-0.5 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Enquiries</p>
                      <a
                        href="mailto:enquiries@bartrading.co.uk"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        data-testid="contact-email-link"
                      >
                        enquiries@bartrading.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="border-t border-border pt-10">
                <h3 className="font-heading font-bold text-lg mb-4">Buying or Selling?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We work with both buyers requiring specific material grades and sellers seeking to place surplus or excess inventory. All enquiries are handled in confidence.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 border border-border bg-card">
                <div className="h-px w-8 bg-primary mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "Precision in material specification is the foundation of engineering reliability. We hold that standard in everything we do."
                </p>
                <p className="text-xs text-muted-foreground mt-4 font-medium tracking-widest uppercase">BAR Trading Ltd</p>
              </motion.div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="border border-border bg-card p-12 text-center flex flex-col items-center"
                  data-testid="contact-success-state"
                >
                  <CheckCircle2 className="h-16 w-16 text-primary mb-6" strokeWidth={1} />
                  <h2 className="text-3xl font-bold font-heading mb-4">Enquiry Received</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                    Thank you for getting in touch. A member of the BAR Trading team will review your enquiry and respond within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", material: "", message: "" }); }}
                    className="mt-10 text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                    data-testid="contact-submit-another"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none"
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 ..."
                        className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="material" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                      Material / Alloy of Interest
                    </label>
                    <select
                      id="material"
                      name="material"
                      value={form.material}
                      onChange={handleChange}
                      className="w-full bg-card border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none appearance-none"
                      data-testid="select-material"
                    >
                      <option value="">Select an alloy (optional)</option>
                      {alloyOptions.map((alloy) => (
                        <option key={alloy} value={alloy}>{alloy}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                      Message / Requirements <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements — material grade, form (bar, plate, tube, forging), quantity, specification, delivery timescale, or any other relevant details."
                      className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-none h-14 px-10 font-medium tracking-wide w-full sm:w-auto"
                    data-testid="button-submit"
                  >
                    Submit Enquiry
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    All enquiries are treated in strict confidence. We will not share your details with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
