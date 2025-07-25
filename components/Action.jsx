"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const slides = [
  {
    image: "/car1.jpg",
    title: "The Future of Driving",
    description:
      "Discover unmatched performance, sleek design, and innovative technology. Our latest models are built for the road ahead. Designed with the modern driver in mind, these vehicles deliver excellence in every mile.",
    subText:
      "Experience the perfect fusion of power and innovation  tailored for those who lead, not follow.",
  },
  {
    image: "/car2.jpg",
    title: "Power Meets Precision",
    description:
      "Engineered for top-tier performance with advanced handling and luxury interiors. Whether cruising highways or city streets, this model sets a new benchmark in precision driving and driver comfort.",
    subText:
      "Crafted for confidence  where every curve meets control and elegance.",
  },
  {
    image: "/car3.jpg",
    title: "Electric Elegance",
    description:
      "Sustainability never looked this refined. Glide silently on electric power with unmatched style, range, and intuitive technology. This is the future designed to inspire and built to last.",
    subText:
      "Charge into tomorrow with a clean conscience and sleek command.",
  },
];

export default function Action() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    if (isImageHovered) return;

    let frame;
    const duration = 3000;
    const intervalTime = 16;
    const totalSteps = duration / intervalTime;
    let step = 0;

    frame = setInterval(() => {
      step++;
      const newProgress = (step / totalSteps) * 100;
      setProgress(newProgress);

      if (newProgress >= 100) {
        setCurrent((prev) => (prev + 1) % slides.length);
        setProgress(0);
        step = 0;
      }
    }, intervalTime);

    return () => clearInterval(frame);
  }, [current, isImageHovered]);

  const { title, description, subText } = slides[current];

  return (
    <div className="relative w-full h-[600px] flex flex-col md:flex-row-reverse justify-center overflow-hidden bg-white">
      {/* Left content */}
      <div className="z-10 w-full md:w-1/2 p-10 flex md:items-center md:justify-center bg-white/90 md:mb-40">
        <div className="md:max-w-md relative right-6">
          <h2 className="text-3xl font-bold mb-4 transition-all duration-500">
            {title}
          </h2>
          <p className="text-gray-700 transition-all duration-500 mb-2">
            {description}
          </p>
          <p className="text-gray-600 italic text-sm transition-all duration-500">
            {subText}
          </p>

          {/* Dot-style progress indicator */}
          <div className="mt-6 flex space-x-2">
            {[0, 33, 66].map((threshold, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  progress > threshold ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right image with smooth reveal transition */}
      <div
        className="relative group w-full md:w-1/2 h-[70%] rounded-4xl overflow-hidden"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <Image
          src={slides[current].image}
          alt="Car fallback"
          fill
          className="object-cover brightness-90 contrast-90"
          priority
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`slide-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <Image
              src={slides[current].image}
              alt="Car"
              fill
              className={`object-cover brightness-90 contrast-90 transition-transform duration-700 ease-in-out ${
                isImageHovered ? "scale-105 rotate-1" : ""
              }`}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Hover overlay with button */}
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center mt-6">
            <Button className="bg-white cursor-pointer text-gray-800 rounded-2xl px-8 py-4 pr-12 border border-gray-300 hover:bg-gray-300/90 transition-opacity duration-300">
              Rent Now
            </Button>
            <img src="/arrow-btn.svg" alt="Arrow" className="w-5 h-5 ml-[-2rem] mt-1" />
          </div>
        </div>

        {/* Decorative overlays */}
        <div className="absolute left-0 top-0 w-full h-full bg-gray-100/30 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>
    </div>
  );
}
