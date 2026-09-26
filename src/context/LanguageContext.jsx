import { createContext, useContext, useState } from "react"
import { ContentData } from "../data/stories"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en") // Default language set to English

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"))
  }

  const t = ContentData[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
