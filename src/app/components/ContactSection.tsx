"use client";

import React from "react";
import { motion } from "motion/react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

export default function ContactSection() {
    const [stars, setStars] = React.useState<{ id: number, top: string, left: string, size: string }[]>([]);

    React.useEffect(() => {
        const generatedStars = [...Array(15)].map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <section id="contact" className="relative bg-[var(--base)] py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
            {/* Background elements consistent with the project */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute rounded-full bg-white blur-[1px]"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1200px] mx-auto text-center relative z-10">
                {/* Header Section from Image 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4 relative inline-block">
                        Get in Touch
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#4fa0de] rounded-full" />
                    </h2>
                    <p className="text-[var(--text)] mt-6 text-base sm:text-lg max-w-md mx-auto italic">
                        Let&apos;s connect and build something meaningful together
                    </p>
                </motion.div>

                {/* The Contact Info Card from Image 2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[var(--primary)] rounded-[40px] p-10 sm:p-14 shadow-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 text-left"
                >
                    {/* Left: Contact Info */}
                    <div className="flex flex-col gap-8 w-full md:w-auto">
                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/20 transition-all duration-300">
                                <HiMail className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Email</span>
                                <span className="text-white text-base sm:text-lg font-medium">francisedgard16@gmail.com</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-400/20 transition-all duration-300">
                                <HiPhone className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Phone</span>
                                <span className="text-white text-base sm:text-lg font-medium">+63 992 978 4038</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-green-400 group-hover:bg-green-400/20 transition-all duration-300">
                                <HiLocationMarker className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Location</span>
                                <span className="text-white text-base sm:text-lg font-medium">Metro Manila, Philippines</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Social Media */}
                    <div className="flex flex-col gap-6 w-full md:w-auto items-center md:items-start">
                        <h4 className="text-white font-black text-xl tracking-tight">Social Media</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebookF />, href: "#" },
                                { icon: <FaGithub />, href: "#" },
                                { icon: <FaLinkedinIn />, href: "#" },
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaTiktok />, href: "#" }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    whileHover={{ y: -5, scale: 1.1, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all border border-white/5"
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
