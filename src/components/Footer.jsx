import { useLanguage } from "../context/LanguageContext"

function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="about" className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/HIB.png.png"
            alt="How It Became Logo"
            className="h-10 w-auto object-contain rounded-full"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <span className="hidden h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-xs">
            HIB
          </span>
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 font-heading">How It Became</h4>
            <p className="text-xs text-slate-500 font-medium">{t.footer.tagline}</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-xs font-bold text-slate-600">
          <a href="#explore" className="hover:text-blue-600 transition-colors">{t.nav.explore}</a>
          <a href="#stories" className="hover:text-blue-600 transition-colors">{t.nav.stories}</a>
          <a href="#timeline" className="hover:text-blue-600 transition-colors">{t.nav.timeline}</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">{t.nav.about}</a>
        </nav>

        {/* Copyright & Developer Credit */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-500 font-medium text-center md:text-right">
          <div>© {new Date().getFullYear()} HIB. {t.footer.rights}</div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div>
            Owner & Developed by{" "}
            <a
              href="https://webforge-lab.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
            >
              webforge_lab
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
