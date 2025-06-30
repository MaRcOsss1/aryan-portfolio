import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-purple-900 via-black to-black opacity-30 z-0 transform translate-y-[-20%] parallax-bg" style={{ backgroundAttachment: 'fixed' }}></div>

      {/* Hero Section */}
      <section className="text-center py-20 relative z-10">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold text-purple-400 mb-4">
          Aryan Shah
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl md:text-2xl">
          B.Tech in ECE | Robotics & Embedded Systems Enthusiast
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-2">
          Frontend + Embedded + Satellite Systems + Robotics
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500">
              Get My Resume
            </Button>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">From Debug to Liftoff</h2>
        <div className="mb-6 max-w-xl mx-auto">
          <p className="text-purple-400 italic text-center text-lg">“My code doesn’t crash, it just enters safe mode.”</p>
          <p className="text-purple-400 italic text-right text-sm mt-1 pr-4">- Aryan, 2025</p>
        </div>
        <p className="text-lg text-gray-300">
          I’m Aryan, a robotics and space systems nerd powered by C++, curiosity, and a little caffeine...
        </p>
      </motion.section>
    </div>
  );
}
