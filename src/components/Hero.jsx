import React from "react"


const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Amasu Suley</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-600 dark:text-gray-400">
              A Passionate Software Developer
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
              I create beautiful, functional, and user-friendly web applications that make an impact.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute -inset-4">
                  <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-indigo-400 to-purple-600"></div>
                </div>
                <img
                  src="./images/amasu.jpg"
                  alt="Profile"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero