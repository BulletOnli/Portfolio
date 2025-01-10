"use client";
import { useState, useEffect } from "react";

export default function Notification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-xs sm:max-w-fit fixed z-[100] top-12 sm:bottom-8 sm:top-auto left-1/2 transform -translate-x-1/2 animate-fade-in-down">
      <div className="border border-[#1F2937] bg-primary bg-opacity-80 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-4">
        <span className="text-sm font-medium">
          New portfolio version available
        </span>
        <a
          href={process.env.NEXT_PUBLIC_NEW_PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-nowrap text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          View Now
        </a>
      </div>
    </div>
  );
}
