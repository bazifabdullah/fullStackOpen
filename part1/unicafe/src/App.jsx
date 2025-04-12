import { useState } from 'react'
import Button from './button'
import Statistics from './stats'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="Give Feedback" />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      
      <Header text='Statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App