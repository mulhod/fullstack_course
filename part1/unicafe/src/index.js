import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomAnecdote = () => Math.round(Math.random() * (anecdotes.length - 1))

const NextAnecdoteButton = ({setSelected}) => (
  <button onClick={() => setSelected(getRandomAnecdote())}>next anecdote</button>
)

const VoteButton = ({updateVotes}) => (
  <button onClick={updateVotes}>vote</button>
)

const MostVotes = ({votes}) => {
  const maxVotes = Math.max(...votes)
  if (maxVotes === 0) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        No votes have been cast yet!
      </>
    )
  }
  return (
    <>
      <h1>Anecdote with most votes</h1>
      {anecdotes[votes.indexOf(maxVotes)]}
      <br></br>
      has {maxVotes} votes
      </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))

  const updateVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <VoteButton updateVotes={updateVotes}/>
      <NextAnecdoteButton setSelected={setSelected}/>
      <br></br>
      <MostVotes votes={votes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)