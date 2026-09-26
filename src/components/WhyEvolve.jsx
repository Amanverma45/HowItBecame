import { useLanguage } from "../context/LanguageContext"
import { HelpCircle, Zap, Award } from "lucide-react"

function WhyEvolve() {
  const { lang, t } = useLanguage()

  const pillars = [
    {
      step: "01",
      icon: HelpCircle,
      title: { en: "Need", hi: "आवश्यकता (Need)" },
      subtitle: { en: "What problem existed?", hi: "कौन सी समस्या थी?" },
      desc: {
        en: "Every invention starts with friction — physical limits, high costs, slow speeds, or unreliability in existing solutions.",
        hi: "हर नए आविष्कार की शुरुआत असुविधा या सीमा से होती है — चाहे वह धीमी गति हो, अधिक लागत हो या पुराना तरीका।"
      },
    },
    {
      step: "02",
      icon: Zap,
      title: { en: "Change", hi: "बदलाव (Change)" },
      subtitle: { en: "What changed?", hi: "क्या बदलाव हुआ?" },
      desc: {
        en: "Scientific breakthroughs, new manufacturing processes, digital networks, and innovative designs fundamentally shift how things work.",
        hi: "वैज्ञानिक खोजें, नए मटेरियल, डिजिटल नेटवर्क और नवाचार मिलकर तकनीक की कार्यप्रणाली को पूरी तरह बदल देते हैं।"
      },
    },
    {
      step: "03",
      icon: Award,
      title: { en: "Impact", hi: "प्रभाव (Impact)" },
      subtitle: { en: "What became possible?", hi: "क्या संभव हो पाया?" },
      desc: {
        en: "The resulting innovation redefines human capability, creating seamless convenience, global accessibility, and entirely new lifestyle habits.",
        hi: "नया आविष्कार मानव क्षमता को बढ़ाता है, जिससे जीवन आसान होता है और दैनिक आदतें व उद्योग पूरी तरह बदल जाते हैं।"
      },
    },
  ]

  return (
    <section id="whyEvolve" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
          {t.whyEvolve.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
          {t.whyEvolve.title}
        </h2>
        <p className="mt-3 text-base text-slate-600 leading-relaxed font-medium">
          {t.whyEvolve.subtitle}
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.step} className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-8 hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-extrabold text-slate-950 bg-amber-400 px-3 py-1 rounded-full shadow-2xs">
                  {item.step}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                {item.title[lang]}
              </h3>
              <p className="text-xs font-bold text-slate-500 mt-1">
                {item.subtitle[lang]}
              </p>
              <p className="mt-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-4 font-medium">
                {item.desc[lang]}
              </p>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default WhyEvolve
