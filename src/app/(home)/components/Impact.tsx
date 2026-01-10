
import Image from "next/image"

export const Impact = () => {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-28" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

     
        <div className="text-center mb-14 flex flex-col items-center gap-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-black">
            Our Impact <span className="text-brand-blue">*</span>
          </h2>
          <p className="text-brand-grey max-w-2xl text-sm md:text-xl sm:text-base">
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

          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-11 text-5xl font-bold sm:ml-10 ">
      <div className="flex flex-col  ">  <span className="text-brand-blue ">12+</span> 
        <p className="ml-2  text-lg">Challenges Published</p>
      </div>
            <div className="flex flex-col "> <span className="text-brand-blue ">500+</span> 
        <p className="ml-2 text-lg">Students Participated</p>
      </div>
            <div className="flex flex-col"> <span className="text-brand-blue ">150+</span> 
        <p className="ml-2 text-lg">Solutions Submitted</p>
      </div>
            <div className="flex flex-col "> <span className="text-brand-blue ">8</span> 
        <p className="ml-2 text-lg">solutions deployed</p>
      </div>
    
     </div>
     </div>

          </div>
        
       
       
    </section>
    )
}




