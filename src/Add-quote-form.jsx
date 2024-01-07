"use client"

import { useState } from "react"
import "./App.css"

export default function AddQuoteForm({ onAddQuote, onCancel }) {
  const [newQuoteText, setNewQuoteText] = useState("")
  const [newQuoteAuthor, setNewQuoteAuthor] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate inputs
    if (!newQuoteText.trim()) {
      setError("Quote text is required")
      return
    }

    if (!newQuoteAuthor.trim()) {
      setError("Author name is required")
      return
    }

    // Create new quote object
    const newQuote = {
      text: newQuoteText.trim(),
      author: newQuoteAuthor.trim(),
      id: Date.now(), // Add a unique ID based on timestamp
    }

    // Pass the new quote to parent component
    onAddQuote(newQuote)

    // Reset form
    setNewQuoteText("")
    setNewQuoteAuthor("")
    setError("")
  }

  return (
    <div className="add-quote-form">
      <h3>Add Your Own Quote</h3>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quote-text">Quote:</label>
          <textarea
            id="quote-text"
            value={newQuoteText}
            onChange={(e) => setNewQuoteText(e.target.value)}
            placeholder="Enter the quote text..."
            rows={3}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quote-author">Author:</label>
          <input
            id="quote-author"
            type="text"
            value={newQuoteAuthor}
            onChange={(e) => setNewQuoteAuthor(e.target.value)}
            placeholder="Enter the author's name..."
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn btn-success">
            Add Quote
          </button>
          <button type="button" className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
