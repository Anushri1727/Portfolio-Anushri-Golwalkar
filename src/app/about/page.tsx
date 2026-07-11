"use client";

import { motion } from "framer-motion";
import { Download, Rocket, Briefcase, Code2, Users } from "lucide-react";
import Image from "next/image"; // Assuming you have an Image component for the profile picture

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-xs rounded-full mb-4">
            ABOUT ME
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Frontend Software Engineer <br className="hidden md:block" />
            specializing in <span className="text-[var(--color-brand)] dark:text-[var(--color-brand-dark)]">React</span> and <span className="text-[var(--color-brand)] dark:text-[var(--color-brand-dark)]">JavaScript</span>.
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-10">
            <div className="flex-1 space-y-6 text-lg text-gray-600 dark:text-gray-400">
              <p>
                I am dedicated to building high-performance web applications that merge architectural integrity with delightful user experiences. My approach balances technical rigor with a deep empathy for the end-user.
              </p>
              <p>
                With ~3 years of experience crafting scalable web applications, I specialize in building complex dashboards, multi-tenant UI architectures, authentication systems, and responsive component libraries. I am comfortable working across fintech, enterprise, and B2B SaaS products with strong design-to-code execution.
              </p>
              <p>
                Since starting my journey into software development, I&apos;ve developed a profound passion for clean, maintainable code and scalable design systems. I believe that every line of code should serve a purpose, and every interface should feel intuitive and effortless.
              </p>
            </div>
            
            <div className="w-full lg:w-1/3 flex flex-col items-center">
              <div className="w-64 h-64 rounded-full bg-slate-200 dark:bg-slate-800 mb-6 border-4 border-white dark:border-slate-700 shadow-xl overflow-hidden flex items-center justify-center">
                <span className="text-gray-400 text-sm">                 
                  <Image src="/profile2.jpeg" alt="Anushri Golwalkar" width={500} height={500} />
                </span>
              </div>
              <a href="/resume.pdf" target="_blank" className="w-full max-w-xs px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[var(--color-brand)] dark:hover:border-[var(--color-brand-dark)] text-gray-700 dark:text-gray-300 font-semibold flex items-center justify-center gap-2 transition-all">
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-white dark:bg-[var(--color-surface-dark)] border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <Briefcase className="w-8 h-8 text-[var(--color-brand)] dark:text-[var(--color-brand-dark)] mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">3+</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Years Experience</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Continuous growth across enterprise-scale applications and agile startups.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white dark:bg-[var(--color-surface-dark)] border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <Users className="w-8 h-8 text-[var(--color-brand)] dark:text-[var(--color-brand-dark)] mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">B2B & SaaS</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Domains Mastered</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Collaborating with cross-functional teams to solve complex digital challenges.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-white dark:bg-[var(--color-surface-dark)] border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <Rocket className="w-8 h-8 text-[var(--color-brand)] dark:text-[var(--color-brand-dark)] mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10+</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Projects Delivered</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Successful deployments ranging from internal tools to public-facing platforms.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-10 rounded-3xl bg-gray-50 dark:bg-[var(--color-surface-dark)] border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Philosophy</h2>
            <p className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed mb-8">
              &quot;I don&apos;t just write code; I craft digital experiences. My core belief is that software should be invisible—so intuitive and responsive that the user focuses only on their goal, not the tool.&quot;
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">User-Centric</span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">Scalable</span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">Accessible</span>
            </div>
          </div>
          
          <div className="p-10 rounded-3xl bg-blue-600 flex flex-col items-center justify-center text-center">
            <Code2 className="w-12 h-12 text-white mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready for impact</h2>
            <p className="text-blue-100 mb-8 max-w-sm">
              Let&apos;s build something exceptional together.
            </p>
            <a href="/contact" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get in touch
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
