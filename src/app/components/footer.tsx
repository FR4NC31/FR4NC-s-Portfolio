"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--base)] py-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FR4NC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
