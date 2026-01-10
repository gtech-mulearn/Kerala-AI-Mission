
import Image from "next/image"

export const Impact = () => {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

     
        <div className="text-center mb-14 flex flex-col items-center gap-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Our Impact <span className="text-brand-blue">*</span>
          </h2>
          <p className="text-brand-grey max-w-2xl text-sm sm:text-base">
            Showcasing the real-world outcomes of student-developed AI solutions and
            their contribution to solving government challenges.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">

          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/home/img2.jpg"
              alt="Impact showcase"
              fill
              className="object-cover"
              priority
            />
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-11 text-5xl font-bold text-brand-blue">
      <div className="flex flex-col ">  50+
        <p className="ml-2">xyz</p>
      </div>
            <div className="flex flex-col "> 50+
        <p className="ml-2">xyz</p>
      </div>
            <div className="flex flex-col "> 50+
        <p className="ml-2">xyz</p>
      </div>
            <div className="flex flex-col "> 50+
        <p className="ml-2">xyz</p>
      </div>
    
     </div>
     </div>

          </div>
        
       
       
    </section>
    )
}




