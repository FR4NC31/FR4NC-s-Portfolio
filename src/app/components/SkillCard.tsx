"use client";

import { motion } from 'motion/react';
import Image from 'next/image';

interface SkillCardProps {
    name: string;
    iconPath: string;
    color: string;
    category: string;
    index?: number;
}

export default function SkillCard({ name, iconPath, color, index = 0 }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative"
        >
            {/* Glow Effect */}
            <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: color }}
            />

            <div className="relative flex items-center gap-4 p-4 bg-[#1a1c1e] border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-300">
                {/* Icon Container */}
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#25282a] group-hover:scale-110 transition-transform duration-500"
                    style={{ border: `1px solid ${color}33` }}
                >
                    <div className="relative w-7 h-7">
                        <Image
                            src={iconPath}
                            alt={name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-col">
                    <span className="text-white font-bold text-sm sm:text-base">{name}</span>
                    <div className="flex items-center gap-1.5">
                        <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: color }}
                        />
                        <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Skill</span>
                    </div>
                </div>

                {/* Background Accent */}
                <div
                    className="absolute right-0 top-0 w-24 h-full opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none overflow-hidden rounded-r-2xl"
                >
                    <div
                        className="absolute -right-4 -top-4 w-16 h-16 rounded-full blur-2xl"
                        style={{ backgroundColor: color }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
