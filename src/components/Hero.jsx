import EvolutionCard from "./EvolutionCard"
import { useLanguage } from "../context/LanguageContext"
import { Compass, Sparkles } from "lucide-react"

function Hero({ onSelectStory }) {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      
      {/* Decorative Soft Background Accent */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Bold Headline & CTA */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase bg-blue-100/80 border border-blue-200 px-4 py-1.5 rounded-full mb-6 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.hero.tag}</span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] font-heading">
            How did we get from <span className="text-slate-500 font-semibold underline decoration-blue-500/40">that</span> to <span className="text-blue-600 font-black">this?</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#stories"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-3.5 text-sm font-extrabold text-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>{t.hero.cta}</span>
            </a>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-500 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition-all border border-amber-500/40 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>{t.nav.categories}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean EvolutionCard Component */}
        <div className="relative">
          <EvolutionCard onSelectStory={onSelectStory} />
        </div>

      </div>
    </section>
  )
}

export default Hero