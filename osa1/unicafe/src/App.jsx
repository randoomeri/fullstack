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

  let positive = good/all*100

  return(
    <div>
      <h2 style={{fontSize: 26,
                    fontWeight: '600'}}>
          Statistics
        </h2>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="All" value={all}/>
        <StatisticLine text="Average" value={(good-bad)/all}/>
        <StatisticLine text="Positive" value={positive + " %"}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <p>{text} {value}</p>
  )
}

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

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
      <Button text="Good" onClick={handleGood} />
      <Button text="Neutral" onClick={handleNeutral} />
      <Button text="Bad" onClick={handleBad} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App