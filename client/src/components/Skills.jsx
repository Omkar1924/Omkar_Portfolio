import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-amber-500 to-orange-500',
      skills: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-indigo-500 to-violet-500',
      skills: ['Spring Boot', 'Hibernate', 'Django', 'Node.js', 'REST APIs', 'Microservices']
    },
    {
      title: 'Frontend',
      icon: Layout,
      color: 'from-cyan-500 to-blue-500',
      skills: ['React.js', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      title: 'Tools & Concepts',
      icon: Wrench,
      color: 'from-pink-500 to-rose-500',
      skills: ['Maven', 'Git', 'Postman', 'JUnit', 'Docker', 'AWS', 'OOP', 'Data Structures']
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Categorized technical stack spanning backend APIs, frontend framework integration, database design, and dev tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComp = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shadow-md`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
