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

const Statistics = ({good, bad, neutral}) => {
  const total = bad + good + neutral;
  const positivePercentage = (good / total) * 100;
  const average = (good - bad) / total;

  return (
    <>
      <Header text='Statistics' />
      <StatisticsValue text='Good' value={good} />
      <StatisticsValue text='Neutral' value={neutral} />
      <StatisticsValue text='Bad' value={bad} />
      <StatisticsValue text='Total' value={total} />
      <StatisticsValue text='Average' value={average} />
      <StatisticsValue text='Positive Percentage' value={positivePercentage} />
    </>
  )
}

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
      
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App