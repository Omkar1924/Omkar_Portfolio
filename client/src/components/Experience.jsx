import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'AI Research & Development Intern',
      company: 'Marva AI LLP',
      location: 'Pune, India',
      period: 'Jan 2025 – Jul 2025',
      bullets: [
        'Developed backend services in Python (Django) to process OCR-based MCQ extraction, handling a dataset of 45,000+ NEET Biology questions.',
        'Implemented Tesseract OCR to convert scanned question papers into structured JSON records stored in MongoDB.',
        'Built a responsive React and TailwindCSS frontend enabling real-time upload, review, and editing of extracted questions.',
        'Integrated frontend and backend workflows to support end-to-end MCQ extraction and correction at scale.'
      ],
      skills: ['Python', 'Django', 'Tesseract OCR', 'MongoDB', 'React', 'TailwindCSS']
    },
    {
      role: 'Software Development Intern',
      company: 'QHills Technology Pvt. Ltd.',
      location: 'Pune, India',
      period: 'Nov 2023 – Jun 2024',
      bullets: [
        'Built 5 reusable UI components for the Vedainary business website using React.js and JavaScript, as part of a 4-person team (3 interns, 1 developer).',
        'Developed a booking form module for Pooja and Havan services, improving the site\'s user booking flow and usability.',
        'Collaborated under task-based sprint assignments, contributing to on-time delivery of assigned modules.',
        'Gained hands-on experience with responsive UI development, code reviews, and team-based software workflows.'
      ],
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Agile Sprints', 'Code Reviews']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Software development internships focused on production feature delivery, OCR pipelines, and React integration.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-8"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 ring-4 ring-white dark:ring-slate-900 shadow-md" />

              {/* Date Badge on Desktop Left Side */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
                <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-cyan-400 block">
                  {exp.period}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-500 block mt-0.5">
                  {exp.location}
                </span>
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-slate-200 dark:border-slate-800 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-semibold text-indigo-600 dark:text-cyan-400">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="sm:hidden flex flex-wrap gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6 text-sm text-slate-600 dark:text-slate-300">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-mono text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
