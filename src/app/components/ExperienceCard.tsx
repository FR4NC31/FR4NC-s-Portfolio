"use client";

import { useState } from 'react';
import ScrollReveal from './animation/ScrollReveal';

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
    delay?: number;
}

export default function ExperienceCard({ title, company, period, description, skills, delay = 0 }: ExperienceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ScrollReveal delay={delay}>
            <div
                className="group relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Border Glow Effect */}
                <div
                    className={`
            absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100
            transition-all duration-500 blur-sm z-0
          `}
                    style={{
                        background: 'linear-gradient(45deg, #4fa0de, #b1d7fb, #4fa0de)',
                    }}
                />

                {/* Main Card */}
                <div className="relative z-10 bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-zinc-800 h-full flex flex-col gap-6 shadow-sm hover:shadow-xl transition-all duration-500">

                    {/* Header */}
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                                {title}
                            </h3>
                            <span className="text-xs sm:text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full h-fit">
                                {period}
                            </span>
                        </div>
                        <p className="text-md sm:text-lg font-medium text-blue-500">
                            {company}
                        </p>
                    </div>

                    {/* Description */}
                    <ul className="flex flex-col gap-3 flex-1 overflow-hidden">
                        {description.map((item, index) => (
                            <li key={index} className="flex gap-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Skills/Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50 dark:border-zinc-800">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Decorative Corner Accent */}
                    <div
                        className={`
              absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px] -z-10
              transition-all duration-700 ease-in-out
              ${isHovered ? 'scale-110 opacity-40' : 'scale-100 opacity-20'}
            `}
                    />
                </div>
            </div>
        </ScrollReveal>
    );
}
