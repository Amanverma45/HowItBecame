import { X, History, AlertTriangle, Zap, Clock, CheckCircle2, Compass, Sparkles } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

function StoryModal({ story, onClose }) {
  const { lang, t } = useLanguage()

  if (!story) return null

  const details = story.details[lang] || story.details.en

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 text-xs font-extrabold text-blue-700 bg-blue-50 border border-blue-200 rounded-full uppercase tracking-wider">
              {story.category[lang]}
            </span>
            <span className="text-xs font-mono font-extrabold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              {story.number}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-7 overflow-y-auto">
          
          {/* Main Title Banner */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 border border-blue-800 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-md">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-extrabold tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t.modal.journeyTitle}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
              <div className="flex items-center gap-2">
                <span className="text-slate-300 text-xs font-bold uppercase">{t.hero.thenLabel}:</span>
                <span className="text-white">{story.then[lang]}</span>
              </div>
              <span className="hidden sm:inline text-amber-300">➔</span>
              <span className="sm:hidden text-amber-300">↓</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-300 text-xs font-bold uppercase">{t.hero.nowLabel}:</span>
                <span className="text-amber-300">{story.now[lang]}</span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {story.tagline[lang]}
            </p>
          </div>

          {/* 1. THE BEGINNING */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-2">
              <History className="w-4 h-4 text-blue-600" />
              <span>{t.modal.beginningTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {details.beginning}
            </p>
          </div>

          {/* 2. THE PROBLEM */}
          <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6">
            <div className="flex items-center gap-2 text-xs font-extrabold text-rose-800 uppercase tracking-widest mb-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>{t.modal.problemTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-rose-950 leading-relaxed font-medium">
              {details.problem}
            </p>
          </div>

          {/* 3. THE CHANGE */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6">
            <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 uppercase tracking-widest mb-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>{t.modal.changeTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
              {details.change}
            </p>
          </div>

          {/* 4. THE JOURNEY (Timeline Steps) */}
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{t.modal.journeyTimelineTitle}</span>
            </div>
            <div className="space-y-3">
              {details.timeline.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                  <span className="px-3 py-1 text-xs font-mono font-extrabold bg-blue-600 text-white rounded-xl h-fit shadow-2xs shrink-0">
                    {step.year}
                  </span>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{step.title || step.name}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. TODAY */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6">
            <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-900 uppercase tracking-widest mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.modal.todayTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
              {details.today}
            </p>
          </div>

          {/* 6. WHAT'S NEXT? (Future Hook) */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-3xl p-6 border border-purple-800 shadow-md">
            <div className="flex items-center gap-2 text-xs font-extrabold text-amber-300 uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4 text-amber-300" />
              <span>{t.modal.whatsNextTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-semibold">
              {details.whatsNext}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-extrabold transition-all cursor-pointer shadow-md"
          >
            {t.modal.close}
          </button>
        </div>

      </div>
    </div>
  )
}

export default StoryModal
