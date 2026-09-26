import { useLanguage } from "../context/LanguageContext"
import { Clock } from "lucide-react"

function Timeline() {
  const { lang, t } = useLanguage()

  const milestones = [
    {
      year: "1900",
      title: { en: "Radio & Telegraph", hi: "रेडियो और टेलीग्राफ" },
      desc: { en: "Wireless audio broadcast opens real-time mass communication.", hi: "वायरलेस ऑडियो ब्रॉडकास्ट ने रीयल-टाइम सूचना प्रसार की शुरुआत की।" }
    },
    {
      year: "1950",
      title: { en: "Mainframe Computers", hi: "मेनफ्रेम कंप्यूटर" },
      desc: { en: "Vacuum tubes and early electronic computing power emerge.", hi: "वैक्यूम ट्यूब और शुरुआती इलेक्ट्रॉनिक गणना मशीनें सामने आईं।" }
    },
    {
      year: "1980",
      title: { en: "Personal Computer", hi: "पर्सनल कंप्यूटर (PC)" },
      desc: { en: "Desktop computing enters homes and offices worldwide.", hi: "डेस्कटॉप कंप्यूटर आम घरों और दफ्तरों का हिस्सा बने।" }
    },
    {
      year: "2000",
      title: { en: "The Internet Era", hi: "इंटरनेट और मोबाइल वेब" },
      desc: { en: "The web connects billions, enabling mobile search and social networks.", hi: "वर्ल्ड वाइड वेब ने अरबों लोगों को जोड़ा, सर्च और सोशल मीडिया शुरू हुआ।" }
    },
    {
      year: "Today",
      title: { en: "AI & Hyper-Connectivity", hi: "AI और हाइपर-कनेक्टिविटी" },
      desc: { en: "Generative models, ubiquitous sensors, and instant global access.", hi: "जनरेटिव AI, 5G नेटवर्क और स्मार्ट डिवाइस इकोसिस्टम।" }
    },
  ]

  return (
    <section id="timeline" className="relative bg-slate-100 py-16 lg:py-24 border-y border-slate-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.timeline.tag}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            {t.timeline.title}
          </h2>
        </div>

        {/* Timeline Horizontal Line / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative border-l-4 md:border-l-0 md:border-t-4 border-blue-600 pl-6 md:pl-0 md:pt-10">
          {milestones.map((m) => (
            <div key={m.year} className="relative group">
              {/* Node Circle */}
              <div className="absolute -left-[35px] md:-top-[51px] md:left-0 h-6 w-6 rounded-full bg-amber-400 border-4 border-blue-600 shadow-md group-hover:scale-125 transition-transform duration-200" />
              
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200">
                <span className="text-xs font-mono font-extrabold text-white bg-blue-600 px-2.5 py-1 rounded-md uppercase inline-block mb-3 shadow-2xs">
                  {m.year}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {m.title[lang]}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                  {m.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Timeline
