import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPos] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1
    const updatedPositive = updatedGood/updatedAll*100
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage((updatedGood - bad)/updatedAll)
    setPos(updatedPositive)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedAll = all + 1
    setAll(updatedAll)
    setAverage((good - updatedBad)/updatedAll)
    setPos(good/updatedAll*100)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setPos(good/updatedAll*100)
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
      <h2 style={{fontSize: 26,
                  fontWeight: '600'}}>
        Statistics
      </h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </div>
  )
}

export default App