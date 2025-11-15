"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

// ⭐ MAIN COMPONENT (DEFAULT EXPORT)
const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setLeft(rect.left);
      setLocalWidth(rect.width);
    }
    const onResize = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setLeft(rect.left);
        setLocalWidth(rect.width);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMove = (clientX: number) => {
    const relativeX = clientX - left;
    setWidthPercentage((relativeX / localWidth) * 100);
  };

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => {
        setIsMouseOver(false);
        setWidthPercentage(0);
      }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={() => setIsMouseOver(true)}
      onTouchEnd={() => {
        setIsMouseOver(false);
        setWidthPercentage(0);
      }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      className={cn(
        "bg-[#1d1c20] border border-white/10 w-full rounded-lg p-8 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-40 relative flex items-center overflow-hidden">
        {/* REVEAL TEXT */}
        <motion.div
          animate={{
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          }}
          transition={{ duration: isMouseOver ? 0 : 0.4 }}
          className="absolute w-full bg-[#1d1c20] z-20"
        >
          <p className="text-[2.5rem] font-bold text-white">
            {revealText}
          </p>
        </motion.div>

        {/* MOVING LINE */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50"
        />

        {/* BASE TEXT */}
        <div className="overflow-hidden">
          <p className="text-[2.5rem] font-bold text-neutral-700">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export default TextRevealCard;

// ⭐ STAR ANIMATION
const Stars = () => {
  const rand = () => Math.random();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{
            top: `${rand() * 100}%`,
            left: `${rand() * 100}%`,
            opacity: rand(),
          }}
          animate={{
            scale: [1, 1.2, 0],
            opacity: rand(),
            top: `${rand() * 100}%`,
            left: `${rand() * 100}%`,
          }}
          transition={{
            duration: rand() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
        />
      ))}
    </div>
  );
};

const MemoizedStars = memo(Stars);
