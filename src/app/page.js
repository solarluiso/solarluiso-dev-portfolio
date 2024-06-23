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
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl text-light-grey font-bold">
            Crafting Web Applications with Soul and Innovation
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital realm, where imagination meets creation. With
            a sharp sense for design and a dedicated command of coding, my
            portfolio features a variety of projects, all demonstrating my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button class="flex justify-between p-4 rounded-lg ring-1 ring-pretty-purple tracking-wider shadow-xl hover:bg-semi-dark-green hover:text-white hover:scale-105 duration-500 hover:ring-1 w-[135px]">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 animate-bounce"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </button>

            <button className="p-4 rounded-lg ring-1 ring-pretty-purple shadow-xl hover:bg-semi-dark-green hover:text-white hover:scale-105 duration-500 hover:ring-1">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
