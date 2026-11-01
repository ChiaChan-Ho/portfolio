"use client";

import { motion } from "motion/react";
import { useState } from "react";

export const AnimatedLogo = ({
  theme,
  className,
  onClick,
}: {
    theme: "dark" | "light";
    className?: string;
    onClick?:() => void;
}) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
        setIsAnimating(true); 
    };
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 375"
            className={className}
        >
            {/* rectangle for clickable area on the logo */}
            <rect
                width="400%"
                height="400%"
                fill="transparent"
                onClick={handleClick}
            />

            {/* Animated Path: a simple blocky "H" monogram, traced as one
                continuous stroke so the dash-offset draw-in animation works. */}
            <motion.path
                d="M80,60 L150,60 L150,165 L225,165 L225,60 L295,60 L295,315 L225,315 L225,210 L150,210 L150,315 L80,315 Z"
                fill="none"
                stroke={theme === "dark" ? "lightgray" : "grey"}
                strokeWidth="18"
                strokeLinejoin="round"
                strokeDasharray="1400"
                strokeDashoffset="2500"
                initial={{
                    strokeDashoffset: isAnimating ? 2800 : 0,
                }}
                animate={{
                    strokeDashoffset: isAnimating ? 0 : 2800,
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                }}
                style={{
                    transition:  "stroke 0.5s ease-in-out",
                }}
                onClick={handleClick}
            />
        </motion.svg>
    );
};