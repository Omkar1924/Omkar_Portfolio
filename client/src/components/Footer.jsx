import React from 'react';
import { Github, Mail, Linkedin, Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Omkar Santosh Suryawanshi
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Java Full Stack Developer &bull; Pune, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#education" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href="https://github.com/Omkar1924"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="mailto:omkar190205@gmail.com"
              className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/omkar-suryawanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-center text-xs text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1">
          <span>&copy; {new Date().getFullYear()} Omkar Santosh Suryawanshi. Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>React, TailwindCSS & Java passion.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
