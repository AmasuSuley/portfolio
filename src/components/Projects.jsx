import { useState } from 'react'
import  YouTubeEmbed from './YouTubeEmbed'
import { extractYouTubeId } from '../utils/youtube';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
   {
  id: 1,
  title: 'PoultryGuard: AI Chicken Disease Detection',
  description: 'Mobile application using computer vision to identify common poultry diseases from images.',
  fullDescription: `PoultryGuard is an AI-powered mobile application designed to help farmers quickly identify common chicken diseases through image recognition. Using a trained convolutional neural network (CNN), the app can analyze images of chickens and provide instant preliminary diagnoses for diseases such as Newcastle disease, Avian influenza, Coccidiosis, and Infectious bronchitis.

The application features a user-friendly interface that allows farmers to capture or upload images of their poultry. The AI model then processes these images and provides a confidence score for each potential disease match. For each identified condition, the app offers detailed information about symptoms, recommended treatments, and prevention methods.

Key technical aspects include:
- Custom-trained CNN model using TensorFlow with over 10,000 annotated poultry images
- Optimized for mobile devices with TensorFlow Lite for offline functionality
- Confidence scoring system to indicate detection accuracy

The app also includes educational resources about poultry health management and allows farmers to maintain a history of diagnoses for their flock. By enabling early detection of diseases, PoultryGuard helps reduce mortality rates and improve overall flock health.`,
  image:'./images/kuku.png',
  tags: ['Flutter', 'TensorFlow Lite', 'Django', 'AI/ML', 'Image Processing'],
  category: 'mobile',
  features: [
    'AI-powered disease detection from chicken images',
    'Treatment recommendations and prevention tips',
    'Diagnosis history tracking',
    'Educational resources on poultry health'
  ],
  github: 'https://github.com/AmasuSuley/kukuApp.git',
   youtubeId: '',
  youtubeUrl: 'https://youtu.be/x3y6MVXODqs',
},
  {
  id: 2,
  title: 'FarmLink: Farm Management & Service Platform',
  description: 'Web-based platform connecting farmers with agricultural services through a streamlined request and approval system.',
  fullDescription: `FarmLink is a comprehensive farm management platform designed to simplify how farmers access agricultural services. The system enables farmers to create accounts, register their farms, request various services, and track the approval process.

The platform features a multi-step workflow:
1. User Registration: Farmers create accounts with detailed profiles
2. Farm Creation: Users can register multiple farms with specific details
3. Service Catalog: Browse and select from various agricultural services
4. Request Submission: Submit service requests with specific requirements
5. Approval Workflow: Track request status through pending, approved, or rejected states
6. Service Provider Matching: Automated matching with suitable service providers


FarmLink is built with security in mind, ensuring that sensitive farm data and transaction details are protected. The responsive design ensures accessibility across devices, particularly important for farmers in remote areas who may primarily use mobile devices.`,
  image: './images/farm.png',
  tags: ['React',  'JWT Auth', 'Laravel', 'Tailwind CSS'],
  category: 'web',
  features: [
    'User registration and authentication system',
    'Farm profile creation and management',
    'Service catalog with multiple categories',
    'Service request submission workflow',
    'Approval system with status tracking',
    'Notification system for status updates',
    'Responsive design for mobile access'
  ],
  github: 'https://github.com/AmasuSuley/farm-management-fronted.git',
  youtubeId: '',
   youtubeUrl: 'https://youtu.be/5i-p7ewM7QQ',
},
    // {
    //   id: 3,
    //   title: 'Social media platform',
    //   description: 'Soical media platform for personal post and discussion room .',
    //   fullDescription: 'This platform allow user to post something then people comment,like and reply ,also user can create room for discussion .',
    //   image: './images/social.png',
    //   tags: ['Django', 'Tailwindcss', 'SQlite'],
    //   category: 'web',
    //   link: '#',
    //   features: ['Post section', 'Room creation', 'update infromation and profile picture'],
    //   github: 'https://github.com/AmasuSuley/kukuApp.git',
    //   liveDemo: 'https://your-weather-demo.com'
    // },
    {
      id: 4,
      title: 'Nuur-din website',
      description: 'A responsive Nuur-din website built with React and Tailwind CSS.',
      fullDescription: 'This website show the course offerd by nuur-din, responsive galllery picture, News section for madrasa and testimonials. Also include admin page post news  and receive contact information .',
      image: './images/nuur.png',
      tags: ['React ', 'Tailwindcss', 'LaravelL', ],
      category: 'web',
      link: '#',
      features: ['Map section', 'News section', 'Gallery for madrasa',  'Contact '],
      github: 'https://github.com/AmasuSuley/Almadrasat-nuur-din.git',
       youtubeUrl: 'https://youtu.be/qMZjgaWwRiU'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS.',
      fullDescription: 'This portfolio website showcases projects and skills with a modern, responsive design. It features dark mode, smooth animations, and optimized performance for all devices.',
      image: './images/porto.png',
      tags: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
      category: 'web',
      link: '#',
      features: ['Responsive design', 'Dark mode', 'Smooth animations', 'Project filtering', 'Contact form'],
      github: 'https://github.com/yourusername/portfolio',
      liveDemo: 'https://your-portfolio-demo.com'
    },
   
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    // Re-enable body scrolling
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {filters.map(filter => (
              <button
                key={filter.id}
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeFilter === filter.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openProjectModal(project)}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
     {isModalOpen && selectedProject && (
  <div className="fixed inset-0 z-50 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
        onClick={closeProjectModal}
      ></div>

      {/* Modal panel */}
      <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
        <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl leading-6 font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  onClick={closeProjectModal}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* YouTube Video Section */}
              {(selectedProject.youtubeId || selectedProject.youtubeUrl) && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Video Demonstration</h4>
                  <div className="border rounded-lg overflow-hidden">
                    <YouTubeEmbed 
                      videoId={selectedProject.youtubeId || extractYouTubeId(selectedProject.youtubeUrl)}
                      title={selectedProject.title}
                    />
                  </div>
                  <div className="mt-2 flex justify-center">
                    <a
                      href={`https://www.youtube.com/watch?v=${selectedProject.youtubeId || extractYouTubeId(selectedProject.youtubeUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              )}
              
              {/* Project Image (show if no video) */}
              {!(selectedProject.youtubeId || selectedProject.youtubeUrl) && (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.fullDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                )}
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </section>
  )
}

export default Projects