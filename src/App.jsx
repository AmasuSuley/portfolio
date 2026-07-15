import { useDarkMode } from './hooks/useDarkMode'
import { PageViewsProvider } from './hooks/usePageViews'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import TechMarquee from './components/ui/TechMarquee'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/motion/ScrollProgress'
import IntroOverlay from './components/motion/IntroOverlay'
import FloatingContactBar from './components/ui/FloatingContactBar'

function App() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <PageViewsProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-bg text-ink transition-colors duration-500">
        <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
        <IntroOverlay />
        <CustomCursor />
        <ScrollProgress />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pb-20 md:pb-0">
          <Hero />
          <TechMarquee />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingContactBar />
      </div>
    </PageViewsProvider>
  )
}

export default App
