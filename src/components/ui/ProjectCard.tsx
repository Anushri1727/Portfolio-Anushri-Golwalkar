"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <div className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[var(--color-surface-dark)] border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-900/10 hover:-translate-y-1">
          {/* Project Image */}
          <div className="h-64 bg-white dark:bg-slate-800 p-6 flex flex-col justify-end relative overflow-hidden">
            {project.image && (
              <Image 
                src={project.image} 
                alt={project.name} 
                fill 
                className="object-contain p-4 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10" />
            <div className="relative z-20">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.slice(0, 2).map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded-md">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 2 && (
                  <span className="px-2 py-1 text-xs font-semibold bg-white/20 text-white backdrop-blur-md rounded-md">
                    +{project.techStack.length - 2}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
            </div>
          </div>
          
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">
              {project.shortDescription}
            </p>
            <div className="mt-6 flex items-center text-sm font-medium text-[var(--color-brand)] dark:text-[var(--color-brand-dark)] group-hover:underline">
              View Project <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
