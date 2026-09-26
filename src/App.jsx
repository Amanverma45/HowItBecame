import { useState } from "react"
import { LanguageProvider } from "./context/LanguageContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedEvolutions from "./components/FeaturedEvolutions"
import Categories from "./components/Categories"
import Timeline from "./components/Timeline"
import WhyEvolve from "./components/WhyEvolve"
import Footer from "./components/Footer"
import StoryModal from "./components/StoryModal"

function MainApp() {
  const [selectedStory, setSelectedStory] = useState(null)

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white">
      {/* Navbar with brand logo, search modal, random story, and Hindi/English switcher */}
      <Navbar onSelectStory={setSelectedStory} />

      <main>
        {/* Hero Section */}
        <Hero onSelectStory={setSelectedStory} />

        {/* Featured Evolution Stories */}
        <FeaturedEvolutions onSelectStory={setSelectedStory} />

        {/* Explore Categories */}
        <Categories />

        {/* Milestones Timeline */}
        <Timeline />

        {/* Why Things Evolve (Editorial Section) */}
        <WhyEvolve />
      </main>

      {/* Footer */}
      <Footer />

      {/* Story Detail Read More Modal */}
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  )
}

export default App