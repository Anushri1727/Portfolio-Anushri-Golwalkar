"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsGrid() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-[var(--color-brand)] dark:text-[var(--color-brand-dark)]">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A selection of work that defines my commitment to engineering excellence and user-centric design.
            </p>
          </motion.div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
