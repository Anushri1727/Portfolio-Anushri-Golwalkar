"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { projectsData, Project } from "@/data/projects";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const found = projectsData.find((p) => p.slug === slug);
    if (found) setProject(found);
  }, [slug]);

  if (!project) return (
    <div className="flex-1 flex items-center justify-center min-h-[50vh]">
      <p className="text-gray-500">Project not found</p>
    </div>
  );

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand-dark)] transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[var(--color-brand)] dark:text-[var(--color-brand-dark)] text-sm font-semibold rounded-full border border-blue-100 dark:border-blue-800">
                {tech}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {project.name}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            {project.shortDescription}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button className="px-6 py-3 bg-[var(--color-brand)] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors opacity-50 cursor-not-allowed" title="Link coming soon">
              <ExternalLink size={18} /> Live Demo
            </button>
          </div>

          <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 mb-16 flex flex-col items-center justify-center relative overflow-hidden shadow-lg">
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.name} 
                width={1024}
                height={1024}
                className="w-full h-auto object-contain"
                priority
              />
            ) : (
              <>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-gray-500 font-medium">Project Image Placeholder</p>
              </>
            )}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">Project Details</h2>
            <div className="space-y-4">
              {project.fullDescription.map((desc, i) => (
                <div key={i} className="flex items-start">
                   <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 mt-1 shrink-0" />
                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed m-0">{desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">My Role</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-0">{project.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
