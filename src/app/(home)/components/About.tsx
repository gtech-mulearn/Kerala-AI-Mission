import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion";
import Image from "next/image";
export const About = () => {
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
    
    <motion.section className=" scroll-mt-28  relative overflow-hidden pt-16 sm:pt-20 md:pt-28"
    id="about"
    custom={1}
           variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <h2 className="text-3xl sm:text-4xl text-brand-black md:text-5xl font-semibold">
            About ThinkAI <span className="text-brand-blue">*</span>
          </h2>
          <p className="text-brand-grey max-w-2xl text-sm md:text-xl sm:text-base">
            Transforming government challenges into meaningful learning opportunities
            for students across India.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">

      
          <div className="space-y-3">
            <h3 className="text-brand-blue font-bold text-2xl sm:text-3xl">
              Mission<span className="text-brand-blue">*</span>
            </h3>
            <p className="text-brand-grey  sm:text-base leading-relaxed text-xl">
              To empower students with practical AI skills through real government challenges,
              fostering innovation and creating meaningful solutions that address societal needs
              while building a strong foundation in artificial intelligence and problem-solving.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-brand-blue font-bold text-2xl sm:text-3xl">
              Vision<span className="text-brand-blue">*</span>
            </h3>
            <p className="text-brand-grey text-sm sm:text-base leading-relaxed">
              To create a future-ready generation of students who use AI responsibly to solve
              real-world problems, collaborate with governments, and drive positive societal
              transformation across India.
            </p>
          </div>

          <Card className="p-6  flex flex-col gap-5 hover:shadow-lg transition-all" variant="hoverable">
            <CardTitle className=" text-xl flex flex-col gap-3">
              <p >POWERED BY</p>
              <p>μLearn Initiative<span className="text-brand-blue">*</span></p>
            </CardTitle>
            <CardDescription >
              ThinkAI is a flagship initiative of μLearn, India's largest 
              peer learning network. μLearn enables students to learn together, 
              work on real projects, and build meaningful solutions through
               community-driven education.
            </CardDescription>
          </Card>

          <Card className="p-6  flex justify-center flex-col hover:shadow-lg gap-5 transition-all" variant="hoverable">
            <CardTitle className="text-xl flex flex-col gap-3">
              <p>ALIGNED WITH</p>
              <p>Kerala AI Mission<span className="text-brand-blue">*</span></p>
            </CardTitle>

            <CardDescription className="">Aligned with the Kerala AI Mission's vision to make 
              Kerala a leader in AI adoption, ThinkAI contributes by building AI talent 
              and creating solutions for government challenges using 
              artificial intelligence.</CardDescription>
          </Card>

        </div>
      <div className="max-w-7xl mx-auto px-4 mt-16">
  <div className="bg-brand-blue rounded-2xl p-6 sm:p-10 md:p-16">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-whitish">
      AI Interest Group
    </h1>

    <p className="mt-4 text-brand-whitish/80 max-w-3xl leading-relaxed">
      ThinkAI is supported by the μLearn AI Interest Group,
      a community of students, educators, and professionals passionate about
      artificial intelligence. The group provides mentorship, resources,
      and a collaborative environment for learners to grow their AI
      capabilities while working on challenges that matter.
    </p>

   
  </div>

</div>
</div>
    </motion.section>
  )
}
