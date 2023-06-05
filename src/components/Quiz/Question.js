import React from 'react'

export const Question = ({ id, title, options, handleAnswerChange }) => {
  return (
    <div className="content-wrapper">
      <h3>{title}</h3>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name={id}
            value={option}
            onChange={handleAnswerChange} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  )
}
