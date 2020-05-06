import React from 'react';

const Header = ({name}) => (
  <>
    <h1>{name}</h1>
  </>
)

const Part = ({part}) => (
  <>
    {part.name} {part.exercises}
    <br/><br/>
  </>
)

const Content = ({parts}) => (
  <>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>
)

const Total = ({parts}) => (
  <>
    <b>total of {parts.map(part => part.exercises).reduce((prev, acc) => prev + acc)} exercises</b>
  </>
)

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course