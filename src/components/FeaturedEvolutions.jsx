import { useLanguage } from "../context/LanguageContext"
import { storiesData } from "../data/stories"
import { ArrowRight, Sparkles } from "lucide-react"

function FeaturedEvolutions({ onSelectStory }) {
  const { lang, t } = useLanguage()

  return (
    <section id="stories" className="relative py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.featured.tag}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            {t.featured.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-medium">
            {t.featured.subtitle}
          </p>
        </div>

        {/* Grid of 3x3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <div>
                {/* Category Badge */}
                <span className="inline-block px-3.5 py-1 text-xs font-extrabold tracking-wider text-blue-700 bg-blue-50 border border-blue-200 rounded-full uppercase mb-4">
                  {item.category[lang]}
                </span>

                {/* Dual Image Comparison Preview */}
                <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden mb-5 border border-slate-200 bg-slate-100 p-1.5">
                  <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden">
                    <img
                      src={item.thenImage}
                      alt={item.then[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/30" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-extrabold text-white bg-slate-900/85 px-2 py-0.5 rounded uppercase backdrop-blur-xs">
                      {item.then[lang]}
                    </span>
                  </div>
                  
                  <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden border-2 border-amber-400">
                    <img
                      src={item.nowImage}
                      alt={item.now[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/20" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-extrabold text-slate-950 bg-amber-400 px-2 py-0.5 rounded uppercase shadow-xs">
                      {item.now[lang]}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-2">
                  {item.tagline[lang]}
                </p>
              </div>

              {/* View Story Button */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onSelectStory(item)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
                >
                  <span>{t.featured.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedEvolutions
