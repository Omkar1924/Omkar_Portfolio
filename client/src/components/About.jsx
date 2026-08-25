import React from 'react';
import { motion } from 'framer-motion';
import { User, Database, Server, Layout, CheckCircle2, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Server, title: 'Backend Mastery', desc: 'Java, Spring Boot, Hibernate, REST APIs & Microservices' },
    { icon: Layout, title: 'Frontend Integration', desc: 'React.js, TailwindCSS & Responsive Dynamic UIs' },
    { icon: Database, title: 'Database Design', desc: 'PostgreSQL, MySQL & MongoDB Schema Architecture' },
    { icon: Zap, title: 'Scalable Data Processing', desc: 'OCR Extraction Pipeline for 45,000+ Dataset Records' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Driven Full-Stack Engineer with a Passion for Performance & Clean Code
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Java Full Stack Developer with hands-on experience building REST APIs and full-stack web applications using <strong className="text-indigo-600 dark:text-cyan-400">Java, Spring Boot, React, and Python</strong>. Delivered production-grade features including an OCR-based data extraction pipeline processing <strong className="text-indigo-600 dark:text-cyan-400">45,000+ records</strong> and responsive UI components for live business websites.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Adept at end-to-end development spanning database design, backend architecture, and frontend integration, with rigorous API testing via Postman and active experience working in collaborative sprint teams.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>RESTful API Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Postman API Testing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Microservices Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Agile & Sprint Workflows</span>
              </div>
            </div>
          </motion.div>

          {/* Core Competency Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="glass-card glass-card-hover p-5 rounded-xl flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-cyan-400 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
