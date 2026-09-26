import { useState, useEffect } from "react"
import { Search, Menu, X, Sparkles, Compass, BookOpen, Clock, Layers, Info, Languages, ArrowRight } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import { storiesData } from "../data/stories"

function Navbar({ onSelectStory }) {
  const { lang, toggleLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeLink, setActiveLink] = useState("Explore")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen((prev) => !prev)
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false)
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const navLinks = [
    { name: t.nav.explore, href: "#explore", icon: Compass },
    { name: t.nav.stories, href: "#stories", icon: BookOpen },
    { name: t.nav.categories, href: "#categories", icon: Layers },
    { name: t.nav.timeline, href: "#timeline", icon: Clock },
    { name: t.nav.about, href: "#about", icon: Info },
  ]

  const filteredStories = storiesData.filter(story => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return (
      story.then[lang].toLowerCase().includes(q) ||
      story.now[lang].toLowerCase().includes(q) ||
      story.category[lang].toLowerCase().includes(q)
    )
  })

  const handleRandomStory = () => {
    const randomIdx = Math.floor(Math.random() * storiesData.length)
    onSelectStory(storiesData[randomIdx])
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-2"
          : "bg-white py-2.5 border-b border-slate-200"
      }`}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-amber-400 to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        
        {/* Compact Two-Line Brand Logo Name */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none shrink-0">
          <img
            src="/HIB.png.png"
            alt="How It Became Logo"
            className="h-9 sm:h-10 w-auto object-contain rounded-full transition-transform duration-200 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <span className="hidden h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-xs shadow-xs">
            HIB
          </span>
          <div className="text-left leading-none flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors font-heading leading-tight uppercase">
              How It
            </span>
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-blue-600 font-heading leading-tight uppercase">
              Became
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 p-1.5 rounded-full border border-slate-200">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = activeLink === link.name
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs font-bold"
                    : "text-slate-700 hover:text-blue-600 hover:bg-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-300" : "text-slate-500"}`} />
                <span>{link.name}</span>
              </a>
            )
          })}
        </nav>

        {/* Search Bar & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Compact Language Switcher Badge */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold rounded-full border border-amber-300 bg-amber-50 text-slate-900 hover:bg-amber-100 transition-all cursor-pointer shadow-2xs whitespace-nowrap"
            title={lang === "hi" ? "Switch to English" : "हिंदी में बदलें"}
          >
            <Languages className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{lang === "hi" ? "EN" : "HI"}</span>
          </button>

          {/* Quick Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 transition-all cursor-pointer group shadow-2xs"
          >
            <Search className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 transition-colors" />
            <span className="text-xs font-medium text-slate-500 group-hover:text-slate-900 whitespace-nowrap">
              {t.nav.searchPlaceholder}
            </span>
            <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-white border border-slate-200 rounded shadow-2xs">
              ⌘K
            </kbd>
          </button>

          {/* Random Story CTA Button */}
          <button
            onClick={handleRandomStory}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-amber-400 hover:bg-amber-500 px-4 py-1.5 text-xs font-extrabold text-slate-950 transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer shadow-2xs border border-amber-500/50 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>{t.nav.randomEvolution}</span>
          </button>

          {/* Mobile Navigation Triggers */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-xl transition-all duration-300 z-40">
          <div className="px-6 py-5 space-y-4 max-w-md mx-auto">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-blue-600 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-blue-600" />
                      <span>{link.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                )
              })}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  handleRandomStory()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-xs font-extrabold text-slate-950 shadow-2xs"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>{t.nav.randomEvolution}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="fixed inset-0" onClick={() => setIsSearchOpen(false)} />

          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10">
            <div className="flex items-center px-4 py-4 border-b border-slate-200 gap-3">
              <Search className="w-5 h-5 text-blue-600" />
              <input
                type="text"
                placeholder={t.nav.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2 bg-slate-50">
              {filteredStories.map(story => (
                <div
                  key={story.id}
                  onClick={() => {
                    onSelectStory(story)
                    setIsSearchOpen(false)
                  }}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-600 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
                      {story.category[lang]}
                    </span>
                    <span className="text-sm font-bold text-slate-900 mt-0.5 block group-hover:text-blue-600">
                      {story.then[lang]} ➔ {story.now[lang]}
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-slate-950 bg-amber-400 px-3 py-1.5 rounded-full shadow-2xs">
                    {t.featured.readMore}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar