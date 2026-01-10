import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export const About = () => {
  return (
    <section className=" about relative overflow-hidden pt-16 sm:pt-20 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            About ThinkAI <span className="text-brand-blue">*</span>
          </h2>
          <p className="text-brand-grey max-w-2xl text-sm sm:text-base">
            Transforming government challenges into meaningful learning opportunities
            for students across India.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">

      
          <div className="space-y-3">
            <h3 className="text-brand-blue font-bold text-2xl sm:text-3xl">
              Mission<span className="text-brand-blue">*</span>
            </h3>
            <p className="text-brand-grey text-sm sm:text-base leading-relaxed">
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

          <Card className="p-6  flex justify-center  hover:shadow-lg transition-all" variant="hoverable">
            <CardTitle className="text-brand-blue text-lg">
              Powered By
            </CardTitle>
            <CardDescription></CardDescription>
          </Card>

          <Card className="p-6  flex justify-center  hover:shadow-lg transition-all" variant="hoverable">
            <CardTitle className="text-brand-blue text-lg">
              Powered By
            </CardTitle>
          </Card>

        </div>
        <div className="w-full bg-brand-blue h-28 sm:h-32 md:h-52 mt-16 rounded-2xl" />

      </div>
    </section>
  )
}
