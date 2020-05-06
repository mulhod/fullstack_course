import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))