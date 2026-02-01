"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HiExternalLink, HiCode } from "react-icons/hi";

interface ProjectCardProps {
    title: string;
    description: string;
    category: "Website" | "Mobile";
    image: string;
    tags: string[];
    link?: string;
    repo?: string;
}

export default function ProjectCard({
    title,
    description,
    category,
    image,
    tags,
    link,
    repo,
}: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col w-[280px] min-[400px]:w-[320px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[450px] bg-[var(--primary)] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl shrink-0"
        >
            {/* Category Tag */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white border border-white/20 rounded-full">
                <span className="text-black text-xs font-semibold uppercase tracking-wider">
                    {category}
                </span>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <p className="text-[var(--text)] text-sm line-clamp-3 mb-4">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-medium text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 border-t border-white/10 pt-4 mt-auto">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
                        >
                            <HiExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                    {repo && (
                        <a
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
                        >
                            <HiCode className="w-4 h-4" />
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
