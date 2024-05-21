"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center">
          {/* NAME */}
          <h1 className="text-4xl md:text-6xl font-bold">Luis Solar</h1>
          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl">Frontend Developer</h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Passionate about transforming ideas into practical solutions, I
            thrive in collaborative environments, bringing creative concepts to
            life through meticulous UI design and sophisticated web development
            strategies. Enthusiastic about connecting and growing
            professionally.
          </p>
          {/* BUTTON */}
          <button className="p-4 rounded-lg bg-black text-white">
            Download CV
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
