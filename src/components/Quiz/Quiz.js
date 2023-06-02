import React, { useState, useEffect } from 'react'

export const Quiz = () => {
  const [workoutQuiz, setWorkoutQuiz] = useState([])

  useEffect(() => {
    fetch('https://finale-project-backend.onrender.com/quizzes')
      .then((res) => res.json())
      .then((data) => {
        setWorkoutQuiz(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div className="content-container">
      {workoutQuiz.map((data) => (
        // eslint-disable-next-line no-underscore-dangle
        <><h3 key={data._id}>{data.title}</h3><h3>{data.level}</h3></>
      ))}
    </div>
  )
}