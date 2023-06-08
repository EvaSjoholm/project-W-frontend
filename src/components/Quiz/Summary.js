import React from 'react';

export const Summary = ({ answers }) => {
  console.log(answers)
  return (
    <div className="summary-wrapper">
      {answers.map((answer) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={answer.question}>
          <div className="summary-wrapper">
            <h3 className="summary-h3"> {answer.question}</h3>
            <p className="summary-p"> {answer.option}</p>
          </div>
        </div>
      ))}
    </div>

  );
};