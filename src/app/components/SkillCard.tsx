"use client";

import { useState } from 'react';
import Image from 'next/image';

interface SkillCardProps {
    name: string;
    iconPath: string;
    color: string;
    category: string;
    hideNameText?: boolean;
}

export default function SkillCard({ name, iconPath, color, category, hideNameText = false }: SkillCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card Container */}
            <div
                className={`
          relative overflow-hidden
          bg-white rounded-2xl
          border-2 border-gray-100
          p-6 sm:p-8
          transition-all duration-500 ease-out
          cursor-pointer
          flex flex-col items-center justify-between
          h-[220px] sm:h-[260px]
          ${isHovered ? 'scale-105 shadow-2xl' : 'shadow-md hover:shadow-xl'}
        `}
                style={{
                    borderColor: isHovered ? color : undefined,
                }}
            >
                {/* Animated Background Gradient */}
                <div
                    className={`
            absolute inset-0 opacity-0 group-hover:opacity-10
            transition-opacity duration-500
          `}
                    style={{
                        background: `linear-gradient(135deg, ${color}22 0%, ${color}44 100%)`,
                    }}
                />

                {/* Icon Container */}
                <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full gap-4">
                    {/* Logo Image with Rotation Animation */}
                    <div
                        className={`
              relative transition-all duration-500
              ${hideNameText ? 'w-24 h-24 sm:w-32 sm:h-32' : 'w-16 h-16 sm:w-20 sm:h-20'}
              ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
            `}
                        style={{
                            filter: isHovered ? `drop-shadow(0 0 20px ${color}66)` : 'none',
                        }}
                    >
                        <Image
                            src={iconPath}
                            alt={`${name} logo`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Skill Name */}
                    {!hideNameText && (
                        <h3
                            className={`
              text-lg sm:text-xl font-bold text-center
              transition-all duration-300
            `}
                            style={{
                                color: isHovered ? color : '#1f2937',
                            }}
                        >
                            {name}
                        </h3>
                    )}
                </div>

                {/* Category Badge Container - Pull to bottom */}
                <div className="relative z-10 h-6 sm:h-8 flex items-center justify-center">
                    <span
                        className={`
              text-xs sm:text-sm px-3 py-1 rounded-full whitespace-nowrap
              transition-all duration-300
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
            `}
                        style={{
                            backgroundColor: `${color}22`,
                            color: color,
                        }}
                    >
                        {category}
                    </span>
                </div>

                {/* Animated Corner Accent */}
                <div
                    className={`
            absolute -top-10 -right-10 w-20 h-20 rounded-full
            transition-all duration-700
            ${isHovered ? 'scale-150 opacity-20' : 'scale-0 opacity-0'}
          `}
                    style={{
                        backgroundColor: color,
                    }}
                />
            </div>
        </div>
    );
}
