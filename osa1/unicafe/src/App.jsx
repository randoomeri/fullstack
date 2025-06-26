import { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {
  const all = good+bad+neutral
  if (all == 0) {
    return(
      <div>
      <h2 style={{fontSize: 26,
                    fontWeight: '600'}}>
          Statistics
        </h2>
        No feedback given
    </div>
    )
  }
  return(
    <div>
      <h2 style={{fontSize: 26,
                    fontWeight: '600'}}>
          Statistics
        </h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {all}</p>
        <p>Average {(good-bad)/all}</p>
        <p>Positive {good/all*100} %</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1 style={{fontSize: 36,
                  fontWeight: '600'}}>
        Give feedback
      </h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App