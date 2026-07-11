"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "next/image"; // Assuming you have an Image component for the profile picture

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6">
OPEN TO OPPORTUNITIES            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              Anushri <span className="text-[var(--color-brand)] dark:text-[var(--color-brand-dark)]">Golwalkar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-brand)] dark:text-[var(--color-brand-dark)] mb-6">
              Frontend Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Building high-performance, scalable, and beautiful web experiences with precision. Specializing in React, modern JavaScript, and the art of polished interactions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed" >
              I&rsquo;ve spent the last 3+ years architecting frontend systems for 
fintech and B2B SaaS products — from multi-tenant KYC dashboards 
to real-time analytics platforms — turning complex requirements 
into clean, accessible interfaces.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <Link href="/projects" className="px-8 py-4 rounded-lg bg-[var(--color-brand)] hover:bg-blue-700 text-white font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/30 w-full sm:w-auto justify-center">
                View Projects <ArrowRight size={20} />
              </Link>
              <a href="/resume.pdf" download="Anushri_Golwalkar_Resume.pdf" target="_blank" className="px-8 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold flex items-center gap-2 transition-all w-full sm:w-auto justify-center bg-white dark:bg-slate-900">
                Download Resume <Download size={20} />
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-gray-500 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/anushri-golwalkar/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand-dark)] transition-colors flex items-center gap-2 font-medium">
                <LinkedInIcon fontSize="small" /> LinkedIn
              </a>
              <a href="mailto:anushrigolwalkar27@gmail.com" className="hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand-dark)] transition-colors flex items-center gap-2 font-medium">
                <Mail size={20} /> Email
              </a>
              <a href="tel:+91 9424600374" className="hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand-dark)] transition-colors flex items-center gap-2 font-medium">
                <Phone size={20} /> 9424600374
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-none relative"
          >
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-3xl transform rotate-3 scale-105 z-0" />
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative z-10 border border-white/20 shadow-2xl flex items-center justify-center">
               <div className="text-center p-8">
                 <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 opacity-80 blur-xl animate-pulse" />
                 <Image src="/profile2.jpeg" alt="Anushri Golwalkar" width={500} height={500} />
               </div>       
            </div>
            <p className="text-md italic text-gray-500 dark:text-gray-400 mt-4 max-w-[600px] mx-auto leading-relaxed">
                   &quot;The only way to do great work is to love what you do.&quot; <span className="font-medium text-[var(--color-brand)] dark:text-[var(--color-brand-dark)">— Steve Jobs</span>
                 </p>   
          </motion.div>

        </div>
      </div>
    </div>
  );
}
