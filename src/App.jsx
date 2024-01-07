"use client"

import { useState } from "react"
import "./App.css"
import AddQuoteForm from "./Add-quote-form"

const initialQuotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
]

export default function QuoteGenerator() {
  const [quotes, setQuotes] = useState(initialQuotes)
  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [showAddForm, setShowAddForm] = useState(false)

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  return (
    <div className="quote-generator">
      <div className="container">
        <h1 className="title">Quote Generator</h1>

        <div className="quote-card">
          <div className="quote-content">
            <blockquote className="quote-text">"{currentQuote.text}"</blockquote>
            <cite className="quote-author">— {currentQuote.author}</cite>
          </div>
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={getRandomQuote}>
            New Quote
          </button>
          <button className="btn btn-secondary" onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? "Cancel" : "Add Quote"}
          </button>
        </div>

        {showAddForm && (
          <AddQuoteForm
            onAddQuote={(newQuote) => {
              const updatedQuotes = [...quotes, newQuote]
              setQuotes(updatedQuotes)
              setCurrentQuote(newQuote)
              setShowAddForm(false)
            }}
            onCancel={() => setShowAddForm(false)}
          />
        )}

        <div className="quote-stats">
          <p>Total quotes: {quotes.length}</p>
        </div>
      </div>
    </div>
  )
}
