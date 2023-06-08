import React from 'react';

export const Summary = ({ answers }) => {
  return (
    <div className="content-container">
      {answers.map((answer) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={answer.question}>
          <div className="summary-wrapper">
            <p className="summary-p">Question: {answer.question}</p>
            <p className="summary-p">Answer: {answer.option}</p>
          </div>
        </div>
      ))}
    </div>

  );
};