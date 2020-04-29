import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistic = ({text, value}) => (
  <div>{text} {value}</div>
)

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  if (sum === 0) {
    return (
      <>
      <h1>statistics</h1>
      <div>No feedback given</div>
      </>
    )
  }
  const average = (good*1 + neutral*0 + bad*-1)/sum
  const positive = good/sum*100
  return (
    <>
      <h1>statistics</h1>
      <Statistic text={"good"} value={good} />
      <Statistic text={"neutral"} value={neutral} />
      <Statistic text={"bad"} value={bad} />
      <Statistic text={"all"} value={sum} />
      <Statistic text={"average"} value={average} />
      <Statistic text={"positive"} value={positive + " %"} />
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)