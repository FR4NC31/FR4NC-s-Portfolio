'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    duration = 0.8,
    direction = 'up',
    distance = 50,
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Set initial state based on direction
        const initialState: any = {
            opacity: 0,
        };

        switch (direction) {
            case 'up':
                initialState.y = distance;
                break;
            case 'down':
                initialState.y = -distance;
                break;
            case 'left':
                initialState.x = distance;
                break;
            case 'right':
                initialState.x = -distance;
                break;
        }

        gsap.set(element, initialState);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;

                        gsap.to(element, {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            duration: duration,
                            delay: delay,
                            ease: 'power3.out',
                        });
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [delay, duration, direction, distance]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
}
