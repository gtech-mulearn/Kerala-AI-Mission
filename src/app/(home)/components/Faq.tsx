"use client";

import { useState } from "react";
import { questions } from "@/data/Questions";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Faq = () => {
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
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <motion.section 
     custom={1}
           variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
    className="relative overflow-hidden pt-28" id="faq">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <div className="max-w-3xl text-center w-full">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Frequently Asked Questions
              <span className="text-brand-blue">*</span>
            </p>

            <div className="mt-8 space-y-4">
             {questions.map((question) => {
  const isOpen = activeId === question.id;

  return (
    <Card
      key={question.id}
      onClick={() =>
        setActiveId(isOpen ? null : question.id)
      }
      className="w-full max-w-4xl mx-auto p-4 sm:p-5 lg:p-6 cursor-pointer"
    >
      <div className="flex justify-between gap-4">
        <p className="flex-1 text-left text-base sm:text-lg lg:text-xl font-medium">
          {question.title}
        </p>

        <span className="text-xl font-bold text-brand-blue">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <p className="mt-3 text-left text-sm sm:text-base lg:text-lg text-muted-foreground">
          {question.description}
        </p>
      )}
    </Card>
  );
})}

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
