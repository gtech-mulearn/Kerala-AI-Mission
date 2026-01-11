import { Card } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export const Sucess = () => {
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
        <motion.div 
         custom={1}
           variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        className="text-center flex flex-col items-center gap-6 mb-16">
          <h1 className="text-3xl text-brand-black sm:text-5xl md:text-6xl lg:text-5xl font-semibold leading-tight">
            Sucess Stories
          </h1>

          <p className="text-brand-grey max-w-2xl text-sm sm:text-base md:text-xl">
            Student solutions that have been implemented or are being piloted by 
            government departments, creating measurable impact.
          </p>

         
        </motion.div>

       
        <motion.div 
        custom={1}
           variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >

        
          <Card className="relative overflow-hidden rounded-2xl" variant="hoverable" >
                     <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px] overflow-hidden rounded-xl">
          
            <Image
              src="/home/img1.jpg"
              alt="Challenge preview"
              fill
              className="object-cover backdrop-blur-2xl"
            />
          
            
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 via-black/40 to-transparent blur-out-xl" />
          
          
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
            <div className="relative w-full h-96">
              <Image
                src="/home/img1.jpg"
                alt="Challenge preview"
                fill
                className="object-cover"
              />
            </div>
          </Card>

                    <Card className="relative overflow-hidden rounded-2xl" variant="hoverable" >
            <div className="relative w-full h-96">
              <Image
                src="/home/img1.jpg"
                alt="Challenge preview"
                fill
                className="object-cover"
              />
            </div>
          </Card>

                  
        </motion.div>
      </div>

      
    </section>
  )
}
