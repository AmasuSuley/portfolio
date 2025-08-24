import React from "react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
              alt="About Me"
              className="rounded-lg shadow-xl max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-6">Crafting Digital Experiences</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate software developer with expertise in building exceptional digital experiences. 
              My journey in web development started 3 years ago, and since then I've worked on various projects 
              ranging from small business websites to complex web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I believe in writing clean, efficient, and maintainable code. I'm constantly learning new 
              technologies and techniques to stay at the forefront of web development.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Frontend</h4>
                <p className="text-gray-600 dark:text-gray-400">React, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold">Backend</h4>
                <p className="text-gray-600 dark:text-gray-400">Node.js, Laravel, Django </p>
              </div>
              <div>
                <h4 className="font-semibold">Tools</h4>
                <p className="text-gray-600 dark:text-gray-400">Git, Docker, AWS</p>
              </div>
              <div>
                <h4 className="font-semibold">UX/UI</h4>
                <p className="text-gray-600 dark:text-gray-400">Figma,  Prototyping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About