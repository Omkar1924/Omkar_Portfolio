import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Clock, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Full-Stack E-Commerce Web Application',
      status: 'Ongoing',
      category: 'Full-Stack Web App',
      description: 'Designed and implemented backend architecture including entities, repositories, services, and REST controllers. Validated all API endpoints through Postman testing, covering core CRUD operations for an order-management workflow. Currently extending with payment integration, a returns/refund workflow, and React-based frontend integration.',
      techStack: ['Java', 'Spring Boot', 'Hibernate', 'React', 'PostgreSQL', 'Maven'],
      githubUrl: 'https://github.com/Omkar1924/ecommerce-app',
      liveDemoUrl: '' // Grayed out with Coming soon tooltip
    },
    {
      title: 'Shetkari Juice and Snacks Center — Business Web Application',
      status: 'Completed',
      category: 'Business Frontend',
      description: 'Built a responsive website to showcase menu items and services for a local food business. Implemented dynamic UI components and a clean, mobile-friendly interface. Improved the business\'s digital presence and customer accessibility.',
      techStack: ['React (Vite)', 'TailwindCSS', 'PostgreSQL'],
      githubUrl: 'https://github.com/Omkar1924/shetkari-juice-center',
      liveDemoUrl: '' // Grayed out with Coming soon tooltip
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Production-grade full-stack web applications, Java backend APIs, and dynamic business web platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim() !== '');

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500" />

                <div>
                  {/* Category & Status */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-xs font-bold ${
                        project.status === 'Ongoing'
                          ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800'
                          : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800'
                      }`}
                    >
                      {project.status === 'Ongoing' ? (
                        <Clock className="w-3 h-3" />
                      ) : (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  {hasLiveDemo ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex-1 relative group">
                      <button
                        disabled
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-semibold text-sm flex items-center justify-center gap-2 cursor-not-allowed"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                      
                      {/* Hover Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold shadow-lg border border-amber-500/40 z-20">
                        Coming soon
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
