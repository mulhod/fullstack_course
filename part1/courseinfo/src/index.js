import React from 'react'
import ReactDOM from 'react-dom'

const Head = (props) => (
    <>
      <h1>{props.course}</h1>
    </>
)

const Part1 = (props) => (
  <>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  </>
)

const Part2 = (props) => (
  <>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  </>
)

const Part3 = (props) => (
  <>
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  </>
)

const Content = (props) => (
    <>
      <Part1 part={props.part1}/>
      <Part2 part={props.part2}/>
      <Part3 part={props.part3}/>
    </>
)

const Total = (props) => (
    <>
      <p>Number of exercises {props.total}</p>
    </>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Head course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))