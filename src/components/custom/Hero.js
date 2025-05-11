import TypingEffect from "@/components/custom/TypingEffect";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const Hero = () => {
  return (
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 z-0">
          <img
            alt="Coding Background"
            className="object-cover opacity-60 bg-image w-full h-full dark:opacity-20"
           
            src="./1.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 dark:from-blue-900/60 dark:to-gray-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 dark:to-background/90" />
        </div>
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-6 md:px-0">
            <div className="z-10 flex flex-col items-center gap-8 text-center">
            
              <header>
                <h1 className="mb-4 md:mt-4 text-4xl font-bold lg:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-400">
                  Welcome to{" "}
                  <span className="relative text-foreground">ComputoAkash</span>
                </h1>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 md:text-3xl dark:text-white flex items-center justify-center">
                  Learn <TypingEffect/>
                
                </h2>
              </header>
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
                Confused about which course to take? We've got you covered! Browse
                courses and discover the best option for you. It's free!{" "}
                <strong className="text-primary dark:text-white">
                  ComputoAkash
                </strong>{" "}
                is my effort to teach the basics and those coding techniques in a
                short time that took me years to master.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/courses">
                 <Button>Explore Courses</Button>
                </Link>
                <Link href="/contact">
                  <Button variant={"outline"}>Contact Us</Button>
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 px-4 py-6 bg-white/50 dark:bg-zinc-900/50 rounded-2xl backdrop-blur-sm shadow-lg">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary dark:text-white">
                    100+
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-200">
                    Courses
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary dark:text-white">
                    500K+
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-200">
                    Students
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary dark:text-white">
                    5.0
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-200">
                    Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero