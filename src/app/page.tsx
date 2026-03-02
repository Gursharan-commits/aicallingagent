"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PhoneCall, TrendingUp, Workflow, AreaChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Helper animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-background overflow-hidden relative">

      {/* Abstract Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60rem] h-[60rem] bg-primary/20 rounded-full blur-[120px] opacity-60 mix-blend-multiply pointer-events-none animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[50rem] h-[50rem] bg-secondary/30 rounded-full blur-[140px] opacity-60 mix-blend-multiply pointer-events-none animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[70rem] h-[70rem] bg-indigo-300/20 rounded-full blur-[150px] opacity-50 mix-blend-multiply pointer-events-none animate-blob animation-delay-4000" />

      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-32 flex flex-col items-center justify-center min-h-[90vh]">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-white/40 bg-white/60 px-5 py-2 text-sm font-semibold text-primary mb-8 shadow-sm backdrop-blur-xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse"></span>
            India's Intelligent Calling Workforce
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-bold text-foreground tracking-tighter max-w-6xl mx-auto leading-[0.85] mb-8"
          >
            Stop Paying Salaries For <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-secondary relative">
              Repetitive Calls.
              <motion.span
                className="absolute bottom-1 left-0 w-full h-3 bg-secondary/30 rounded-full -z-10"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-14 leading-relaxed font-sans font-light"
          >
            Deploy AI agents that call, qualify, follow up, and escalate—never missing a lead. Custom-built for your workflows and optimized for Indian markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <Button size="lg" className="rounded-2xl px-10 h-16 text-lg w-full sm:w-auto font-medium shadow-[0_20px_40px_-15px_rgba(0,85,255,0.4)] transition-all hover:scale-105 hover:shadow-[0_25px_50px_-15px_rgba(0,85,255,0.5)]" asChild>
              <Link href="#contact">
                Book a Custom Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl px-10 h-16 text-lg w-full sm:w-auto font-medium bg-white/40 backdrop-blur-xl border-white/50 hover:bg-white/80 hover:text-primary transition-all hover:scale-105" asChild>
              <Link href="#how-it-works">Discover Platform</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE VALUE PROPOSITION */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground tracking-tight leading-tight">
                Designed to radically <br />
                <span className="text-primary">increase performance.</span>
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed max-w-lg">
                This isn't just a chatbot. It's a scalable digital workforce engineered to replace bloated legacy operations and scale your revenue.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-2xl -z-10" />
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  <h3 className="text-xl font-bold text-foreground flex items-center mb-4">
                    <span className="h-10 w-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mr-4 shadow-inner">×</span>
                    The Old Way (Struggle)
                  </h3>
                  <p className="text-foreground/60 leading-relaxed ml-14">
                    High attrition, inconsistent performance, expensive training, and missed weekend leads. Scaling means doubling your overhead instantly.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-primary text-primary-foreground rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,85,255,0.4)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                  <h3 className="text-xl font-bold flex items-center mb-4 relative z-10">
                    <span className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center mr-4 backdrop-blur-sm shadow-inner">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    The New Way (Solution)
                  </h3>
                  <p className="text-primary-foreground/90 leading-relaxed ml-14 relative z-10">
                    Instant scaling, 24/7 availability, zero training time, consistent tone, and infinite concurrency at a fraction of the cost.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground tracking-tight">Our Deployment Strategy</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">From concept to live calls in a matter of days. We handle the complexity so you can focus on results.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "1. Workflow Mapping", desc: "We map your current call scripts, objections, and escalation paths.", icon: Workflow },
              { title: "2. Voice Cloning", desc: "High-fidelity, regional Indian accents tailored for immense trust.", icon: PhoneCall },
              { title: "3. CRM Hookup", desc: "Native integration pushing notes and call summaries into your CRM instantly.", icon: AreaChart },
              { title: "4. Go Live & Scale", desc: "Dial zero to 10,000 calls instantly. Infinite concurrency when you need it.", icon: TrendingUp },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/50 backdrop-blur-lg border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DASHBOARD SHOWCASE */}
      <section id="dashboard" className="py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground tracking-tight">
                Complete Call Intelligence.
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed">
                Monitor live agents, track conversion rates, and listen to recordings all from a beautifully simple dashboard.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="rounded-2xl px-8 shadow-md hover:scale-105 transition-transform" asChild>
                <Link href="#contact">Request Dashboard Access</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 relative p-2 bg-white/40 backdrop-blur-sm"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-inner">
              <Image
                src="/dashboard_nocallflow.png"
                alt="Beautiful Dashboard showcasing AI call stats"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CRM WORKSPACE */}
      <section id="crm" className="py-32 relative z-10 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-auto md:h-[700px] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 p-2 bg-white/40 backdrop-blur-sm"
            >
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-inner bg-slate-100 flex items-center justify-center">
                <Image
                  src="/crm-mockup.png"
                  alt="CRM Workspace with live transcription"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                Live Transcripts <br />& Actionable Context.
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed">
                Watch calls happen in real time. Our specialized CRM is split into dynamic views, ensuring your human team can easily jump in if a lead escalates.
              </p>

              <ul className="space-y-6">
                {[
                  "Watch bubbles of conversation form in real-time.",
                  "Filter through 10,000 active calls instantly.",
                  "Review detailed user context and triggers."
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground/80 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT SECTION */}
      <section id="about" className="py-40 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10"
          >
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 mb-4 backdrop-blur-md">
              About Us
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-white leading-[1.1]">
              A product of <span className="text-primary italic">Rama Techworks</span>.
            </h2>
            <p className="text-2xl text-white/70 leading-relaxed font-light">
              We started out fixing broken processes. Now, we are rewriting them completely with vertical AI.
            </p>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Based in India, we understand the specific challenges, languages, and dialects required to succeed in diverse markets. We don't just give you APIs, we give you execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. CONTACT / CTA */}
      <section id="contact" className="py-32 relative isolate overflow-hidden">
        <div className="absolute top-[20%] right[-10%] w-[60rem] h-[60rem] bg-secondary/30 rounded-full blur-[150px] opacity-60 mix-blend-multiply pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-2xl border border-white/80 p-8 md:p-16 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 -mr-20 -mt-20" />

              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground tracking-tight">Ready to Deploy?</h2>
                <p className="text-xl text-foreground/60">Let's build your specific workflow and launch your AI agents.</p>
              </div>

              <form className="space-y-6 max-w-xl mx-auto">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-foreground px-2">First name</label>
                    <input type="text" id="first-name" className="w-full flex h-14 rounded-2xl border-white/80 bg-white/50 px-4 py-2 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-white" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-foreground px-2">Last name</label>
                    <input type="text" id="last-name" className="w-full flex h-14 rounded-2xl border-white/80 bg-white/50 px-4 py-2 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-white" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground px-2">Work Email</label>
                  <input type="email" id="email" className="w-full flex h-14 rounded-2xl border-white/80 bg-white/50 px-4 py-2 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-white" placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground px-2">Company Size</label>
                  <select id="company" className="w-full flex h-14 rounded-2xl border-white/80 bg-white/50 px-4 py-2 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-white border text-foreground/80">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201+ employees</option>
                  </select>
                </div>
                <Button className="w-full h-16 text-lg font-bold rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,85,255,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(0,85,255,0.5)] transition-all hover:-translate-y-1">
                  Book a Demo Today
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
