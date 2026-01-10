import { Card, CardDescription } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'


export const Contact = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  items-center justify-center gap-12">
          <div className="w-full  text-center md:text-center mb-9 flex items-center flex-col gap-4">
          <p className="sm:text-4xl md:text-5xl font-semibold"> Get In Touch<span className="text-brand-blue">*</span></p>
          <p className="text-brand-grey md:w-1/2 md:text-2xl">Connect with us through any of these channels</p>
         
          </div>
          
        </div>
        <motion.div 
        initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">

        <Card
  variant="hoverable"
  className="relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center"
>
  <Image
    src="/home/email.png"
    alt="Email"
    width={100}
    height={100}
    className="object-contain"
  />

  <CardDescription className='flex items-center flex-col '>
    <p className='font-bold text-2xl text-brand-black font-bold'>Email</p>
    <p>Drop us a message</p>
    <a href="contact@mulearn.org" className='text-2xl text-brand-blue pt-5'>contact@mulearn.org</a>
  </CardDescription>
</Card>


         <Card
  variant="hoverable"
  className="relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center"
>
  <Image
    src="/home/discord.png"
    alt="Email"
    width={100}
    height={100}
    className="object-contain"
  />

  <CardDescription className='flex items-center flex-col '>
    <p className='font-bold text-2xl text-brand-black font-bold'>Email</p>
    <p>Join our community</p>
    <a href="" className='text-2xl text-brand-purple pt-5'>Join Discord →</a>
  </CardDescription>
</Card>

<Card
  variant="hoverable"
  className="relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center"
>
  <Image
    src="/home/web.png"
    alt="website"
    width={100}
    height={100}
    className="object-contain"
  />

  <CardDescription className='flex items-center flex-col '>
    <p className='font-bold text-2xl text-brand-black font-bold'>Website</p>
    <p>Visit μLearn platform</p>
    <a  href="https://www.mulearn.org"
  target="_blank"
  rel="noopener noreferrer" className='text-2xl text-brand-green pt-5'>mulearn.org →</a>
  </CardDescription>
</Card>

                   


        </motion.div>
        </div> 
    </section>
  )
}
