"use client";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { About } from "./components/About"
import { Impact } from "./Impact"
import Faq from "./components/Faq"
import { Sucess } from "./components/Sucess"
import Link from "next/link"
import { motion} from "framer-motion";




const Page = () => {
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
    <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center gap-6 mb-16">
          <motion.h1 
           custom={1}
           variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            ThinkAI <span className="text-brand-blue">*</span> Built To Flex
          </motion.h1>

          <motion.p 
           custom={1}
           variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          className="text-brand-grey max-w-2xl text-sm sm:text-base">
            Platform packed with real government challenges, AI resources,
            community support, and hands-on problem-solving courses.
          </motion.p>

          <Link href="/tasks">
          <motion.div
           custom={1}
           variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
       <Button 
       variant="secondary" className="text-brand-whitish hover:bg-brand-blue/90 cursor-pointer">
        Explore Challenges
      </Button>
      </motion.div>
    </Link>
        </div>

       
        <motion.div 
        initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">

        <Card className="relative overflow-hidden rounded-2xl" variant="hoverable" >
           <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px] overflow-hidden rounded-xl">

  <Image
    src="/home/img1.jpg"
    alt="Challenge preview"
    fill
    className="object-cover"
  />

  
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />


  <div className="absolute bottom-4 left-4 right-4">
    <h3 className="text-white text-lg font-semibold">
      Challenge Title
    </h3>
    <p className="text-white/80 text-sm">
      Short description goes here
    </p>
  </div>
</div>
          </Card>


         <Card className="relative overflow-hidden rounded-2xl" variant="hoverable" >
           <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px] overflow-hidden rounded-xl">

  <Image
    src="/home/img1.jpg"
    alt="Challenge preview"
    fill
    className="object-cover"
  />

  
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />


  <div className="absolute bottom-4 left-4 right-4">
    <h3 className="text-white text-lg font-semibold">
      Challenge Title
    </h3>
    <p className="text-white/80 text-sm">
      Short description goes here
    </p>
  </div>
</div>
          </Card>


                    <Card className="relative overflow-hidden rounded-2xl" variant="hoverable" >
           <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px] overflow-hidden rounded-xl">

  <Image
    src="/home/img1.jpg"
    alt="Challenge preview"
    fill
    className="object-cover"
  />

  
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />


  <div className="absolute bottom-4 left-4 right-4">
    <h3 className="text-white text-lg font-semibold">
      Challenge Title
    </h3>
    <p className="text-white/80 text-sm">
      Short description goes here
    </p>
  </div>
</div>
          </Card>

                    <Card className="relative overflow-hidden rounded-2xl" variant="hoverable" >
           <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px] overflow-hidden rounded-xl">

  <Image
    src="/home/img1.jpg"
    alt="Challenge preview"
    fill
    className="object-cover"
  />

  
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />


  <div className="absolute bottom-4 left-4 right-4">
    <h3 className="text-white text-lg font-semibold">
      Challenge Title
    </h3>
    <p className="text-white/80 text-sm">
      Short description goes here
    </p>
  </div>
</div>
          </Card>


        </motion.div>
      </div>

      <About />
      <Impact />
      <Sucess/>
      <Faq />
      
    </section>
  )
}

export default Page
