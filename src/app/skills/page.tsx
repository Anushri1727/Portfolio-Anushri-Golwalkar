"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import SkillPill from "@/components/ui/SkillPill";

export default function Skills() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="text-[var(--color-brand)] dark:text-[var(--color-brand-dark)]">Stack</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            I specialize in building performant, accessible, and high-fidelity web experiences. My toolset is curated to bridge the gap between complex logic and seamless user interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-24">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-[var(--color-brand)] dark:text-[var(--color-brand-dark)]">
                  {/* Just a simple icon representation based on index or category name */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-10 rounded-2xl bg-gray-50 dark:bg-[var(--color-surface-dark)] border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm text-blue-600">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Performance First</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Every line of code is optimized for Core Web Vitals and lightning-fast time-to-interactive.
            </p>
          </div>
          
          <div className="p-10 rounded-2xl bg-[var(--color-brand)] dark:bg-[var(--color-brand-dark)] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 text-white">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Scalable Systems</h3>
            <p className="text-blue-100">
              Architecting modular components that grow with the product while maintaining strict type safety.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
