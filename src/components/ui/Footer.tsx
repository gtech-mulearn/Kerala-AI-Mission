"use client";

import Link from "next/link";
import { Button } from "./button";
import { motion } from "framer-motion";

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

export const Footer = () => {
  return (
   <motion.footer
  className="relative overflow-hidden bg-brand-blue pt-20 sm:pt-28"
  variants={headingVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Background Watermark */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <motion.h1
      variants={headingVariants}
      className="
        font-bold
        text-[96px] sm:text-[144px] md:text-[200px] lg:text-[288px]
        leading-none
        text-white/10
        select-none
      "
    >
      thinkai
    </motion.h1>
  </div>

  
  <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 text-brand-whitish/80">

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4  ">
        <h4 className="font-bold text-lg text-brand-whitish">THINKAI</h4>
        <p className="text-brand-whitish/80 max-w-xs">
          Your dedicated partner in transforming government challenges into AI opportunities. 
          Empowering students through μLearn.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
        <h5 className="font-bold text-brand-whitish mb-2">Quick Links</h5>
        <Link href="/privacy" className="hover:text-brand-whitish">Privacy</Link>
        <Link href="/terms" className="hover:text-brand-whitish">Terms</Link>
        <Link href="/contact" className="hover:text-brand-whitish">Contact</Link>
      </div>

      
      <div className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
        <h5 className="font-bold text-brand-whitish mb-2">Follow Us</h5>
        <Link href="/twitter" className="hover:text-brand-whitish">Twitter</Link>
        <Link href="/linkedin" className="hover:text-brand-whitish">LinkedIn</Link>
        <Link href="/instagram" className="hover:text-brand-whitish">Instagram</Link>
      </div>

    
      <div className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
        <h5 className="font-bold mb-2 text-brand-whitish ">Contact Us</h5>
        <Link href="mailto:info@thinkai.com" className="hover:text-brand-whitish">Email</Link>
        <Link href="tel:+1234567890" className="hover:text-brand-whitish">Phone</Link>
        <Link href="/support" className="hover:text-brand-whitish">Support</Link>
      </div>

    </div>

 
    <div className="w-full h-px bg-brand-whitish/10 mt-10 " />
    <div className="flex items-center justify-around gap-20 w-full">
    <p className="text-xs text-brand-whitish/50 pb-8 pt-4 text-center">
      © {new Date().getFullYear()} ThinkAI. All rights reserved.
    </p>
    <div className="flex gap-3 text-xs text-brand-whitish/50 pb-8 pt-4 text-center">
    <Link href="tel:+1234567890" className="hover:text-brand-whitish">Phone</Link>
    <Link href="/support" className="hover:text-brand-whitish">Support</Link>
    </div>
  </div>
  </div>
</motion.footer>

  );
};
