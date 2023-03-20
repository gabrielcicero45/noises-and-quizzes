import React from 'react'

const QuizesList = ({quizes}) => {
  return (
    <div>{quizes.map((quiz) => <p>{quiz.title}</p>)}</div>
  )
}

export default QuizesList
