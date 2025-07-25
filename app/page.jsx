"use client";

import { motion } from "framer-motion";
import Action from "@/components/Action";
import Brand from "@/components/Brand";
import Exprole from "@/components/Exprole";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Act from "@/components/Act";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function Home() {
  const [rentLoading, setRentLoading] = useState(false);

  const handleRentNow = (e) => {
    e.preventDefault();
    setRentLoading(true);
    setTimeout(() => {
      
      window.location.href = "/Explore"; 
    }, 1000);
  };

  return (
    <motion.div
      className="h-auto mt-3 md:mt-0 md:p-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Hero Card Section */}
      <Card className="p-6 bg-gray-200 w-full h-auto flex flex-col md:flex-row items-center">
        {/* Description Section */}
        <div id="hero-description" className="md:max-w-[60%] mr-10 mb-20 md:mb-0">
          <h1 className="text-3xl lg:text-5xl font-semibold leading-tight md:text-3xl">
            DriveEase Car Rentals <br /> Freedom on Four Wheels
          </h1>
          <p className="text-gray-700 mt-4 lg:text-lg md:text-base">
            Easy, affordable rentals for every trip. Whether it's a quick drive or a weekend getaway,
            we've got the perfect car for you.
          </p>

          <div className="flex items-center mt-6">
            <Button
              className="bg-white text-gray-800 rounded-2xl px-8 py-4 pr-12 border border-gray-300 hover:bg-accent flex items-center gap-2"
              onClick={handleRentNow}
              disabled={rentLoading}
            >
              {rentLoading ? (
                <>
                  <LoaderCircle className="animate-spin w-5 h-5" />
                  Now ..
                </>
              ) : (
                "Rent Now"
              )}
            </Button>
            {!rentLoading && (
              <img src="/arrow-btn.svg" alt="Arrow" className="w-5 h-5 ml-[-2rem] mt-1" />
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[60%] md:w-full relative">
          <img src="/car-hero.png" alt="Car Image" className="w-full object-contain" />
        </div>
      </Card>

      {/* Brand Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <Brand />
      </div>

      {/* Action Section */}
      <div className="mt-16">
        <Action />
      </div>

      {/* Exprole Section */}
      <div className="">
        <Exprole />
      </div>

      {/* Act Section */}
      <div>
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "linear" }}
        >
          <Act />
        </motion.div>
      </div>
    </motion.div>
  );
}
