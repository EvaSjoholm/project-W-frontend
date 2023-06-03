import React from 'react'

export const Button = ({ color, text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn">{text}
    </button>
  )
}
