import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function Services() {
  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION WITH VIDEO */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/v4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-20 mt-15 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl
                       flex flex-col md:flex-row items-center gap-8"
          >
            <div className="md:w-1/2 overflow-hidden rounded-2xl">
              <motion.img
                src="/servic.jpg"
                alt="Services banner"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="w-full h-56 md:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="text-white md:w-1/2">
              <p className="text-sm font-semibold opacity-90">What we provide</p>

              <h1 className="text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
                Our Services — Tailored for Growth
              </h1>

              <p className="mt-4 opacity-90">
                Leadoptima delivers specialised IT, Engineering and Staffing services built to scale.
                Our approach blends innovation, experience, and people-centric strategies.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg"
              >
                Talk to us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Services</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {/* IT SERVICES */}
            <motion.article
              variants={cardVariants}
              className="bg-white/60 dark:bg-white-500/60 backdrop-blur-sm
                         rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden h-56">
                <motion.img
                  src="/service/i.jpg"
                  alt="IT Services"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">IT Services</h3>
                <p className="mt-3 text-gray-500 dark:text-gray-700">
                  Web development, optimization, hosting, and robust digital solutions tailored
                  for performance and growth.
                </p>

                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    Web Hosting
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    Web Development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    Website Optimization
                  </li>
                </ul>

                <div className="mt-6 flex gap-4">
                  <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:scale-105 transition">
                    Contact
                  </button>
                </div>
              </div>
            </motion.article>

            {/* STAFFING SERVICES */}
            <motion.article
              variants={cardVariants}
              className="bg-white/60 dark:bg-white-500/60 backdrop-blur-sm 
                         rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden h-56">
                <motion.img
                  src="/service/s.jpg"
                  alt="Staffing Services"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">Staffing Services</h3>
                <p className="mt-3 text-gray-500 dark:text-gray-700">
                  Precise recruitment, placement, training, and HR support to build reliable,
                  high-performing teams.
                </p>

                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-sky-500"></span>
                    Staffing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-sky-500"></span>
                    Placement Consultancy
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-sky-500"></span>
                    HR Training
                  </li>
                </ul>

                <div className="mt-6 flex gap-4">
                  <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:scale-105 transition">
                    Contact
                  </button>
                </div>
              </div>
            </motion.article>

            {/* ENGINEERING / NON-IT */}
            <motion.article
              variants={cardVariants}
              className="bg-white/60 dark:bg-white-500/60 backdrop-blur-sm 
                         rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300"
            >
              <div className="overflow-hidden h-56">
                <motion.img
                  src="/service/cm.jpg"
                  alt="Engineering Services"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">Non-IT / Engineering</h3>
                <p className="mt-3 text-gray-500 dark:text-gray-700">
                  Engineering design across electrical, mechanical, structural & civil domains with
                  safety and precision.
                </p>

                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    Electrical Designs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    Mechanical Designs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    Structural / Civil
                  </li>
                </ul>

                <div className="mt-6 flex gap-4">
                  <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:scale-105 transition">
                    Contact
                  </button>
                </div>
              </div>
            </motion.article>

          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700">
              Need a custom solution?
              <a href="#contact" className="ml-1 font-semibold text-indigo-600 underline">
                Contact us
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
