"use client";

import { motion } from 'framer-motion';
import { ExperienceItem } from '@/data/experience';
import { CheckCircle2 } from 'lucide-react';

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex justify-center items-center py-12 md:py-16">
      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-[var(--background)] bg-blue-500 z-10 shadow-md">
        <div className="w-2 h-2 m-auto rounded-full bg-white" />
      </div>

      <div className={`w-full flex md:w-1/2 ${isLeft ? 'md:justify-end md:pr-12' : 'md:ml-auto md:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          className="w-full relative"
        >
          {/* Content Card */}
          <div className="bg-white dark:bg-[var(--color-surface-dark)] rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className={`flex flex-col md:flex-row md:items-center gap-4 mb-6 ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full whitespace-nowrap">
                {item.date}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.role}
                </h3>
                <h4 className="text-blue-600 dark:text-blue-400 font-medium">
                  {item.company}
                </h4>
              </div>
            </div>

            <ul className="space-y-4">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start text-sm md:text-base text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
