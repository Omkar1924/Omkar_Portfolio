import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Star, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'Nov 2025',
      score: null,
      badgeColor: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
      credentialUrl: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-foundations',
      desc: 'Foundational AWS cloud concepts, security, architecture, pricing models, and cloud infrastructure.'
    },
    {
      title: 'Java Training Certificate',
      issuer: 'EduPyramids, SINE, IIT Bombay',
      date: '2026',
      score: '87.50%',
      badgeColor: 'from-sky-500 to-indigo-500',
      badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      credentialUrl: '', // Static card demo, or editable
      desc: 'Advanced Java programming course covering Object-Oriented Programming, collections, and software logic.'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Certifications & Badges
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Industry-recognized cloud achievements and academic Java certifications with score distinction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => {
            const hasLink = Boolean(cert.credentialUrl && cert.credentialUrl.trim() !== '');

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => {
                  if (hasLink) window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
                }}
                className={`glass-card rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  hasLink
                    ? 'cursor-pointer hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10'
                    : 'cursor-default'
                }`}
              >
                <div>
                  {/* Top Badge & Issuer Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cert.badgeColor} flex items-center justify-center text-white shadow-md shrink-0`}>
                      <Award className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {cert.desc}
                  </p>
                </div>

                <div>
                  {/* Date & Score Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>

                    {cert.score && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 text-xs font-mono font-bold">
                        <Star className="w-3.5 h-3.5" />
                        Scored {cert.score}
                      </span>
                    )}
                  </div>

                  {/* External Link Action */}
                  <div className="flex items-center justify-between text-xs font-semibold">
                    {hasLink ? (
                      <>
                        <span className="flex items-center gap-1 text-sky-500">
                          <ShieldCheck className="w-4 h-4" />
                          Verified Credential
                        </span>
                        <span className="flex items-center gap-1 text-indigo-600 dark:text-cyan-400 group-hover:underline">
                          View Certificate
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </>
                    ) : (
                      <span className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                        <ShieldCheck className="w-4 h-4" />
                        Static Credential Record
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
