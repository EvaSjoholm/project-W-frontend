import React from 'react';

export const Summary = ({ answers }) => {
  return (
    <div className="content-wrapper">
      {answers.map((answer) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={answer.question}>
          <p>Question: {answer.question}</p>
          <p>Answer: {answer.option}</p>
        </div>

      ))}
    </div>

  );
};