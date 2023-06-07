import React from 'react';

export const Summary = ({ question, chosenOptions }) => {
  return (
    <div className="content-wrapper" key={chosenOptions}>
      {chosenOptions.map((option) => (
        // eslint-disable-next-line no-underscore-dangle
        <>
          <p>Question: {question}</p>
          <p>Answer: {option}</p>
        </>
      ))}
    </div>

  );
};