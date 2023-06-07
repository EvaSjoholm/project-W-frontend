import React from 'react';

export const Summary = ({ chosenOptions }) => {
  return (
    <div className="content-wrapper" key={chosenOptions}>
      {chosenOptions.map((option, index) => (
        <p>{index}{option}</p>
      ))}
    </div>
  );
};