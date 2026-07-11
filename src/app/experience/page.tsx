"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Professional <span className="text-[var(--color-brand)] dark:text-[var(--color-brand-dark)]">Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A chronological overview of my technical contributions and professional growth in the frontend ecosystem.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
          
          <div className="space-y-4 md:space-y-0">
            {experienceData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-6 py-2 bg-[var(--color-brand)] dark:bg-[var(--color-brand-dark)] text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 inline-flex items-center gap-2 relative z-10"
            >
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Ongoing Growth
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
