import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Landmark } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: 'Master of Computer Science (MCS)',
      institution: 'Modern College, Pune',
      university: 'Savitribai Phule Pune University',
      period: '2024 – 2026',
      score: 'Part II Percentage: 81.27%',
      highlight: true
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Yashwantrao Chavan Institute of Science, Satara',
      university: 'Shivaji University, Kolhapur',
      period: '2021 – 2024',
      score: 'CGPA: 9.03 / 10',
      highlight: true
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Maharashtra State Board',
      university: 'State Board Examination',
      period: '2021',
      score: 'Percentage: 78.00%',
      highlight: false
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Maharashtra State Board',
      university: 'State Board Examination',
      period: '2019',
      score: 'Percentage: 74.60%',
      highlight: false
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Education Timeline
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Academic qualifications from postgraduate Master of Computer Science to foundational secondary education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Highlight Ribbon */}
              {item.highlight && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-bl-full pointer-events-none" />
              )}

              <div>
                <div className="flex justify-between items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-cyan-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {item.degree}
                </h3>

                <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Landmark className="w-4 h-4" />
                  {item.institution}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {item.university}
                </p>
              </div>

              {/* Score Tag */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 font-mono text-xs font-bold">
                  <Award className="w-3.5 h-3.5" />
                  {item.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
