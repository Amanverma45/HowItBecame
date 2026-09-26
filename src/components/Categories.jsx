import { useLanguage } from "../context/LanguageContext"
import { Cpu, MessageSquare, Car, Tv, Home, Briefcase, ArrowUpRight } from "lucide-react"

function Categories() {
  const { lang, t } = useLanguage()

  const categoriesList = [
    {
      name: { en: "Technology", hi: "तकनीक (Technology)" },
      count: { en: "14 Stories", hi: "14 कहानियां" },
      desc: { en: "Computers, cameras, microchips & AI.", hi: "कंप्यूटर, कैमरा, माइक्रोचिप और AI।" },
      icon: Cpu,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      name: { en: "Communication", hi: "संचार (Communication)" },
      count: { en: "12 Stories", hi: "12 कहानियां" },
      desc: { en: "Letters, telephones, emails & instant chat.", hi: "चिट्ठी, टेलीफोन, ईमेल और इंस्टेंट चैट।" },
      icon: MessageSquare,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      name: { en: "Transportation", hi: "परिवहन (Transportation)" },
      count: { en: "10 Stories", hi: "10 कहानियां" },
      desc: { en: "Horse carts, steam locomotives, EVs & rockets.", hi: "बैलगाड़ी, भाप इंजन, इलेक्ट्रिक वाहन और रॉकेट।" },
      icon: Car,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      name: { en: "Entertainment", hi: "मनोरंजन (Entertainment)" },
      count: { en: "09 Stories", hi: "09 कहानियां" },
      desc: { en: "Gramophones, vinyl, radio, television & streaming.", hi: "ग्रामोफोन, रेडियो, टीवी और ऑनलाइन स्ट्रीमिंग।" },
      icon: Tv,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      name: { en: "Everyday Life", hi: "दैनिक जीवन (Everyday Life)" },
      count: { en: "15 Stories", hi: "15 कहानियां" },
      desc: { en: "Cooking hearths, refrigerators, lighting & watches.", hi: "चूल्हा, रेफ्रिजरेटर, बिजली की रोशनी और घड़ियाँ।" },
      icon: Home,
      color: "bg-rose-50 text-rose-600 border-rose-200"
    },
    {
      name: { en: "Work", hi: "कार्य क्षेत्र (Work)" },
      count: { en: "11 Stories", hi: "11 कहानियां" },
      desc: { en: "Typewriters, paper archives, spreadsheets & remote tools.", hi: "टाइपराइटर, कागजी फाइलें, स्प्रेडशीट और AI टूल।" },
      icon: Briefcase,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
  ]

  return (
    <section id="categories" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 border-b border-slate-200 pb-6">
        <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
          {t.categories.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
          {t.categories.title}
        </h2>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesList.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <div
              key={idx}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-7 hover:border-blue-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden shadow-2xs"
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${cat.color} font-bold shadow-2xs group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-extrabold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                  {cat.count[lang]}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cat.name[lang]}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="mt-2 text-xs text-slate-500 font-medium leading-relaxed">
                {cat.desc[lang]}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Categories
