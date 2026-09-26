import { Sparkles, ArrowRight } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import { storiesData } from "../data/stories"

function EvolutionCard({ onSelectStory }) {
  const { lang, t } = useLanguage()
  const heroStory = storiesData.find(s => s.heroCard) || storiesData[0]

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue-300">
      
      {/* Top Header Badge */}
      <div className="flex items-center justify-between mb-6">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-[0.15em] text-blue-700 uppercase bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{t.hero.storyBadge}</span>
        </span>
        <span className="text-xs font-mono font-extrabold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          {heroStory.number}
        </span>
      </div>

      {/* Visual Image Comparison Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        
        {/* THEN Image Card */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group/item shadow-2xs">
          <img
            src={heroStory.thenImage}
            alt={heroStory.then[lang]}
            className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover/item:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-slate-300 uppercase block">
                {t.hero.thenLabel}
              </span>
              <span className="text-base font-bold text-white block">
                {heroStory.then[lang]}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-900 bg-white/90 px-2 py-0.5 rounded shadow-2xs">
              ~1950
            </span>
          </div>
        </div>

        {/* NOW Image Card */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400 bg-amber-50 group/item shadow-sm">
          <img
            src={heroStory.nowImage}
            alt={heroStory.now[lang]}
            className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover/item:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-amber-300 uppercase block">
                {t.hero.nowLabel}
              </span>
              <span className="text-base font-extrabold text-white block">
                {heroStory.now[lang]}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-950 bg-amber-400 px-2 py-0.5 rounded shadow-2xs">
              Today
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Footer Action */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-600 font-medium max-w-[200px] sm:max-w-xs line-clamp-1">
          {heroStory.tagline[lang]}
        </span>
        <button
          onClick={() => onSelectStory(heroStory)}
          className="text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-1.5"
        >
          <span>{t.hero.readMore}</span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

    </div>
  )
}

export default EvolutionCard