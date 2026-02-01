"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "./ProjectCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Project {
    title: string;
    description: string;
    category: "Website" | "Mobile";
    image: string;
    tags: string[];
    link?: string;
    repo?: string;
}

interface DiscCarouselProps {
    projects: Project[];
}

export default function DiscCarousel({ projects }: DiscCarouselProps) {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    // Track screen width for dynamic spacing
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = screenWidth < 768;
    const isSmallMobile = screenWidth < 480;

    // Auto-rotation logic
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % (projects.length || 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [projects.length, isHovered]);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % (projects.length || 1));
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + projects.length) % (projects.length || 1));
    };

    if (projects.length === 0) return null;

    // Use modulo to ensure index stays within bounds if projects array changes
    const safeIndex = index % projects.length;

    return (
        <div
            className="relative w-full max-w-[1400px] mx-auto min-h-[500px] sm:min-h-[550px] flex items-center justify-center overflow-visible py-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Navigation Buttons - Smaller and closer on mobile */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 z-50">
                <button
                    onClick={handlePrev}
                    className="p-2 sm:p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white backdrop-blur-md transition-all group"
                >
                    <HiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 z-50">
                <button
                    onClick={handleNext}
                    className="p-2 sm:p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white backdrop-blur-md transition-all group"
                >
                    <HiChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* The 3D Disc Layout */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[1500px] sm:perspective-[2000px] preserve-3d">
                <AnimatePresence initial={false} mode="popLayout">
                    {projects.map((project, i) => {
                        // Calculate relative position to the center (active) item
                        let distance = i - safeIndex;
                        const total = projects.length;

                        // Handle wrap-around for the distance
                        if (distance > total / 2) distance -= total;
                        if (distance < -total / 2) distance += total;

                        const isActive = distance === 0;

                        // Responsive visibility logic
                        const isVisible = isSmallMobile ? Math.abs(distance) === 0 : Math.abs(distance) <= 1;

                        if (!isVisible) return null;

                        // Responsive Animation Values
                        const rotateY = isSmallMobile ? 0 : distance * (isMobile ? 15 : 25);
                        const translateZ = Math.abs(distance) * (isMobile ? -100 : -150);
                        const translateX = distance * (isSmallMobile ? 0 : (isMobile ? 280 : 360));
                        const scale = isActive ? 1.05 : (isMobile ? 0.7 : 0.75);
                        const opacity = isSmallMobile && !isActive ? 0 : (1 - Math.abs(distance) * 0.4);
                        const blur = isActive ? 0 : 4;

                        return (
                            <motion.div
                                key={`${project.title}-${i}`}
                                initial={{
                                    opacity: 0,
                                    scale: 0.6,
                                    x: distance * 500,
                                    rotateY: distance * 45
                                }}
                                animate={{
                                    opacity,
                                    x: translateX,
                                    z: translateZ,
                                    rotateY: rotateY,
                                    scale,
                                    filter: `blur(${blur}px)`,
                                    zIndex: 20 - Math.abs(distance),
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.6,
                                    x: -distance * 500,
                                    transition: { duration: 0.4, ease: "easeInOut" }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120, // Lower stiffness for "organic" movement
                                    damping: 20,    // Perfectly balanced damping
                                    mass: 0.8,      // Lighter mass for snappier start
                                    opacity: { duration: 0.5 },
                                    filter: { duration: 0.5 }
                                }}
                                className="absolute cursor-pointer"
                                style={{
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden"
                                }}
                                onClick={() => setIndex(i)}
                            >
                                <div
                                    className={`transition-all duration-500 ${isActive ? "drop-shadow-[0_20px_50px_rgba(79,160,222,0.3)]" : ""}`}
                                >
                                    <ProjectCard {...project} />
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Dots / Indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 mt-8">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === safeIndex ? "bg-white w-8" : "bg-white/20 hover:bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
