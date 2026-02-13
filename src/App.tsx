import { useEffect, useState } from "react"

interface QuoteResponse {
  id: number
  quote: string
  author: string
}

export default function App() {
  const [quote, setQuote] = useState<string>("Loading...")
  const [author, setAuthor] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const API_URL = "https://dummyjson.com/quotes/random"

  const getQuote = async (): Promise<void> => {
    try {
      setLoading(true)

      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error("Failed to fetch quote")
      }

      const data: QuoteResponse = await response.json()

      setQuote(data.quote)
      setAuthor(data.author)
    } catch (error) {
      setQuote("Failed to load quote.")
      setAuthor("")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  const tweet = (): void => {
    if (!quote) return

    const tweetText = `"${quote}"${author ? ` — ${author}` : ""}`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`

    window.open(twitterUrl, "_blank", "width=600,height=300")
  }

  return (
    <div className="min-h-screen bg-[#bbc6fa] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl p-10 rounded-xl text-center shadow-lg">

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-10">
          Quote of the Day
          <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
        </h2>

        {/* Quote */}
        <blockquote className="text-2xl min-h-[110px] text-gray-800">
          “{quote}”
        </blockquote>

        {/* Author (only show if exists) */}
        {author && (
          <span className="block mt-4 text-right text-gray-600">
            — {author}
          </span>
        )}

        {/* Buttons */}
        <div className="w-full mt-12 flex justify-center gap-4">
          <button
            onClick={getQuote}
            disabled={loading}
            className="bg-blue-500 text-white rounded-full border border-blue-500 w-40 h-12 flex items-center justify-center hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "New Quote"}
          </button>

          <button
            onClick={tweet}
            className="bg-transparent text-gray-800 rounded-full border border-gray-400 w-40 h-12 flex items-center justify-center hover:bg-gray-100 transition"
          >
            Tweet
          </button>
        </div>

      </div>
    </div>
  )
}
