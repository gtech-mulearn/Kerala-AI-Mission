"use client";
import { motion } from "framer-motion";


const Hero = () => {
  const headingVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};
  return (
<motion.section
 custom={1}
           variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
 className="relative overflow-hidden pt-20 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  items-center justify-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-center">
          <p className="text-5xl font-semibold"> AI Challenges <span className="text-brand-blue">*</span> Theory</p>
          <p className="text-brand-grey">Explore real-world government problem statements transformed into AI challenges. Pick a challenge, develop your solution, and make an impact.</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero




