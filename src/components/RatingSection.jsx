import { useState, useEffect } from "react"
import { Star, MessageSquare, Sparkles, CheckCircle2, Award, Heart, Send, MessageSquarePlus, User } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const QUICK_TAGS = [
  "🎯 Great Visuals",
  "📚 Informative",
  "🌐 Loved Hindi/English",
  "🚀 Inspiring",
  "💡 Clean UI",
  "🔮 Loved Future Predictions"
]

const RATING_LABELS = {
  en: ["Needs Improvement", "Fair", "Good", "Very Good", "Phenomenal!"],
  hi: ["सुधार की आवश्यकता", "सामान्य", "अच्छा", "बहुत बढ़िया", "अति उत्कृष्ट!"]
}

function RatingSection() {
  const { lang, t } = useLanguage()

  // Load ONLY real reviews from localStorage (starts empty)
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem("hib_real_community_reviews")
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) return parsed
      }
    } catch (e) {
      console.error(e)
    }
    return []
  })

  // Form State
  const [userRating, setUserRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [userName, setUserName] = useState("")
  const [userFeedback, setUserFeedback] = useState("")
  const [selectedTag, setSelectedTag] = useState("🎯 Great Visuals")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [likedReviews, setLikedReviews] = useState({})

  // Save to localStorage whenever reviews change
  useEffect(() => {
    try {
      localStorage.setItem("hib_real_community_reviews", JSON.stringify(reviews))
    } catch (e) {
      console.error(e)
    }
  }, [reviews])

  // Calculate real statistics dynamically
  const totalReviewsCount = reviews.length
  const averageRating = totalReviewsCount > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviewsCount).toFixed(1)
    : "0.0"

  const positiveCount = reviews.filter((r) => r.rating >= 4).length
  const positivePercentage = totalReviewsCount > 0
    ? Math.round((positiveCount / totalReviewsCount) * 100)
    : 0

  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  reviews.forEach((r) => {
    if (ratingCounts[r.rating] !== undefined) {
      ratingCounts[r.rating]++
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userRating) return

    const newReview = {
      id: "rev-" + Date.now(),
      name: userName.trim() || (lang === "hi" ? "अनाम पाठक" : "Anonymous Reader"),
      rating: userRating,
      tag: selectedTag,
      comment: userFeedback.trim() || (lang === "hi" ? "बहुत बढ़िया अनुभव!" : "Great experience!"),
      time: lang === "hi" ? "अभी-अभी" : "Just now",
      likes: 0,
      verified: true
    }

    setReviews([newReview, ...reviews])
    setIsSubmitted(true)
    setUserFeedback("")
    setUserName("")

    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const handleLike = (id) => {
    if (likedReviews[id]) return
    setLikedReviews((prev) => ({ ...prev, [id]: true }))
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    )
  }

  const filteredReviews = reviews.filter((r) => {
    if (selectedFilter === "all") return true
    return r.rating === Number(selectedFilter)
  })

  const currentDisplayRating = hoverRating || userRating

  return (
    <section id="ratings" className="relative py-16 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-[0.2em] text-blue-700 uppercase bg-blue-100/80 border border-blue-200 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.ratings.tag}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            {t.ratings.title}
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-medium">
            {t.ratings.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Left is Score + Form, Right is Real Reviews Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Overall Score Card + Rating Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Dynamic Overall Rating Score Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <div className="text-5xl font-black text-slate-900 tracking-tight flex items-baseline gap-2">
                    <span>{totalReviewsCount > 0 ? averageRating : "0.0"}</span>
                    <span className="text-lg font-bold text-slate-400">/ 5.0</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-5 h-5 ${
                          totalReviewsCount > 0 && s <= Math.round(Number(averageRating))
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-200 fill-slate-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  {totalReviewsCount > 0 ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-xs font-extrabold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{positivePercentage}% Positive</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-extrabold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === "hi" ? "नई शुरुआत" : "Ready for Ratings"}</span>
                    </div>
                  )}
                  <div className="text-xs text-slate-500 font-semibold mt-1">
                    {totalReviewsCount} {t.ratings.totalReviews}
                  </div>
                </div>
              </div>

              {/* Real Star Breakdown Bars */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = ratingCounts[stars] || 0
                  const percentage = totalReviewsCount > 0 ? Math.round((count / totalReviewsCount) * 100) : 0
                  return (
                    <div key={stars} className="flex items-center gap-3 text-xs">
                      <span className="w-6 font-bold text-slate-600 flex items-center gap-0.5">
                        {stars} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      </span>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="w-9 text-right text-slate-500 font-semibold">{percentage}%</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Submit Rating Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm relative">
              <h3 className="text-lg font-extrabold text-slate-900 font-heading mb-1 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span>{t.ratings.rateExperience}</span>
              </h3>
              <p className="text-xs text-slate-500 mb-5">{t.ratings.ratePrompt}</p>

              {/* Interactive Star Selector */}
              <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 cursor-pointer transition-transform hover:scale-125 active:scale-95 focus:outline-hidden"
                      aria-label={`${star} Stars`}
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= currentDisplayRating
                            ? "fill-amber-400 text-amber-400 drop-shadow-xs"
                            : "text-slate-300 hover:text-amber-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-xs font-extrabold text-blue-700 mt-2 tracking-wide uppercase">
                  {RATING_LABELS[lang][currentDisplayRating - 1]}
                </div>
              </div>

              {/* Form inputs */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.ratings.yourName}
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder={t.ratings.yourNamePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Quick Feedback Tags */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {lang === "hi" ? "त्वरित टैग चुनें" : "Select a Highlight Tag"}
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_TAGS.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSelectedTag(tag)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                          selectedTag === tag
                            ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.ratings.yourFeedback}
                  </label>
                  <textarea
                    rows={3}
                    value={userFeedback}
                    onChange={(e) => setUserFeedback(e.target.value)}
                    placeholder={t.ratings.yourFeedbackPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.ratings.submitBtn}</span>
                </button>
              </form>

              {/* Success Notification */}
              {isSubmitted && (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.ratings.successMsg}</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column (7 Cols): Real Community Feed */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Filter Bar */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>{lang === "hi" ? "समीक्षाएं" : "Community Feed"}</span>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[11px]">
                  {filteredReviews.length}
                </span>
              </div>

              {/* Star Filter Pills */}
              <div className="flex items-center gap-1 text-xs">
                {["all", "5", "4", "3"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFilter(f)}
                    className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors cursor-pointer ${
                      selectedFilter === f
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {f === "all" ? t.ratings.filterAll : `${f} ★`}
                  </button>
                ))}
              </div>
            </div>

            {/* Review Cards List OR Empty State */}
            {filteredReviews.length === 0 ? (
              <div className="bg-white p-10 rounded-3xl border border-dashed border-slate-300 text-center flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-600 shadow-2xs">
                  <MessageSquarePlus className="w-7 h-7" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 font-heading mb-1">
                  {lang === "hi" ? "पहली समीक्षा आप दें!" : "Be the first to leave a review!"}
                </h4>
                <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                  {lang === "hi"
                    ? "अभी तक कोई समीक्षा सबमिट नहीं हुई है। बाईं ओर दिए गए फॉर्म से अपनी रेटिंग और विचार सबमिट करें।"
                    : "No reviews submitted yet. Rate your experience using the form on the left to share your thoughts!"}
                </p>
              </div>
            ) : (
              <div className="space-y-3.5 max-h-[720px] overflow-y-auto pr-1">
                {filteredReviews.map((rev) => {
                  const isLiked = likedReviews[rev.id]
                  return (
                    <div
                      key={rev.id}
                      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-3">
                          {/* Avatar Initials */}
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                            {rev.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-extrabold text-slate-900">{rev.name}</span>
                              {rev.verified && (
                                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                  <CheckCircle2 className="w-2.5 h-2.5 text-blue-600" />
                                  <span>{t.ratings.verifiedReader}</span>
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <div className="flex items-center text-amber-400">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <Star
                                    key={s}
                                    className={`w-3 h-3 ${
                                      s <= rev.rating
                                        ? "fill-amber-400 text-amber-400"
                                        : "text-slate-200 fill-slate-100"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-[10px] font-medium text-slate-400">• {rev.time}</span>
                            </div>
                          </div>
                        </div>

                        {/* Highlight Tag */}
                        {rev.tag && (
                          <span className="text-[10px] font-extrabold text-slate-700 bg-slate-100 px-2 py-1 rounded-md border border-slate-200 shrink-0">
                            {rev.tag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                        "{rev.comment}"
                      </p>

                      {/* Likes / Helpful Reaction */}
                      <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                        <button
                          onClick={() => handleLike(rev.id)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            isLiked
                              ? "bg-rose-50 text-rose-600 border border-rose-200"
                              : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                          }`}
                        >
                          <Heart className={`w-3 h-3 ${isLiked ? "fill-rose-500 text-rose-500" : ""}`} />
                          <span>{rev.likes}</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}

export default RatingSection
