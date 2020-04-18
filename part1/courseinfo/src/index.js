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
      <Part1 part={props.parts[0]}/>
      <Part2 part={props.parts[1]}/>
      <Part3 part={props.parts[2]}/>
    </>
)

const Total = (props) => (
    <>
      <p>Number of exercises {props.parts.map(p => p.exercises)
                                         .reduce((acc, p) => acc + p)}</p>
    </>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Head course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))