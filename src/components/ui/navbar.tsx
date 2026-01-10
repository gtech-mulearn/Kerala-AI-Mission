
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
     <motion.div
          className="flex justify-between items-center h-20 w-full px-12 box-border xl:px-12 lg:px-8 md:px-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
    <nav className="relative z-50 w-full bg-brand-whitish border-b-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">

        
          <a href="/" className="text-brand-black font-bold text-3xl">
            ThinkAI
          </a>

         
          <button
            className="md:hidden text-3xl z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? "✕" : "☰"}
            
          </button>

         
          {open && (
            <div className="absolute top-full left-0 w-full bg-brand-whitish p-6 z-40 md:hidden">
              <div className="flex flex-col gap-6 text-brand-grey">
                <a href="/" onClick={() => setOpen(true)}>Home</a>
                <a href="/" onClick={() => setOpen(true)}>Taks</a>
                <a href="/" onClick={() => setOpen(true)}>About Us</a>
                <a href="/" onClick={() => setOpen(true)}>Impact</a>
                 <a href="/" onClick={() => setOpen(true)}>FAQ</a>
                <a href="/" onClick={() => setOpen(true)}>Contact</a>
              </div>
            </div>
          )}

         
          <div className="hidden md:flex gap-6 text-brand-grey">
            <a href="/" className="hover:text-brand-blue">Home</a>
            <a href="/tasks" className="hover:text-brand-blue">Tasks</a>
            <a href="/about" className="hover:text-brand-blue">About Us</a>
            <a href="/impact" className="hover:text-brand-blue">Impact</a>
            <a href="/faq" className="hover:text-brand-blue">FAQ</a>
            <a href="/" className="hover:text-brand-blue">Contact</a>
            
          </div>

        </div>
      </div>
    </nav>
    </motion.div>
  );
};

export default Navbar;
