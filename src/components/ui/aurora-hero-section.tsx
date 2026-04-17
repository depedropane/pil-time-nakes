"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Mail } from "lucide-react";

export function AuroraHeroSection() {
  return (
    <AuroraBackground showRadialGradient={true} className="min-h-[80vh] sm:min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 w-full max-w-5xl mx-auto"
      >
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-white mb-4 leading-tight">
            Welcome to My Portfolio
          </h1>
          <p className="font-extralight text-base sm:text-lg md:text-2xl dark:text-neutral-200 text-neutral-100 mb-8">
            Crafting beautiful digital experiences with modern web technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="#projects">
            <Button className="bg-white dark:bg-white text-black hover:bg-gray-100 px-6 py-2">
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="border border-white text-white hover:bg-white/10 px-6 py-2">
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-12">
          <a href="#" className="text-white hover:text-gray-300 transition font-semibold text-sm">
            GitHub
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition font-semibold text-sm">
            LinkedIn
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition font-semibold text-sm flex items-center gap-2">
            <Mail size={18} /> Contact
          </a>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
