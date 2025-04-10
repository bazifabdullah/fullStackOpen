import { useState } from 'react'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticsValue = (props) => (
  <p>
    {props.text} = {props.value}
  </p>
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
      <StatisticsValue text='Good' value={good} />
      <StatisticsValue text='Neutral' value={neutral} />
      <StatisticsValue text='Bad' value={bad} />
    </div>
  )
}

export default App