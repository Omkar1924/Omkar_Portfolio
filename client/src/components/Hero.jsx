import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Available for Opportunities Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-cyan-400 font-mono text-xs sm:text-sm font-semibold mb-6 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
          </span>
          <MapPin className="w-3.5 h-3.5" />
          <span>Pune, Maharashtra, India</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Open to Software Roles</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">Omkar Suryawanshi</span>
        </motion.h1>

        {/* Title Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-6"
        >
          Java Full Stack Developer
        </motion.h2>

        {/* Short Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
        >
          Building REST APIs and full-stack web applications with <span className="font-semibold text-indigo-600 dark:text-cyan-400">Java, Spring Boot, React & Python</span>. Experienced in processing 45,000+ dataset pipelines and delivering production-ready web features.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="/resume.pdf"
            download="Omkar_Suryawanshi_Resume.pdf"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-card text-slate-800 dark:text-white font-semibold flex items-center justify-center gap-2 hover:border-indigo-500/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            Contact Me
            <ArrowRight className="w-4 h-4 text-indigo-500" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5 text-slate-600 dark:text-slate-400"
        >
          <a
            href="https://github.com/Omkar1924"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-cyan-400 hover:-translate-y-1 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="mailto:omkar190205@gmail.com"
            aria-label="Email Direct"
            className="p-3 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-cyan-400 hover:-translate-y-1 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/omkar-suryawanshi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-cyan-400 hover:-translate-y-1 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
