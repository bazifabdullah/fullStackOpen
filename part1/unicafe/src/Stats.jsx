const StatisticsValue = (props) => (
    <p>
      {props.text} = {props.value}
    </p>
  )
  
const Statistics = ({good, bad, neutral}) => {
    const total = bad + good + neutral;
    const positivePercentage = (good / total) * 100;
    const average = (good - bad) / total;

    if (total === 0) {
        return <p>No feedback given</p>;
    }

    return (
        <>
        <StatisticsValue text='Good' value={good} />
        <StatisticsValue text='Neutral' value={neutral} />
        <StatisticsValue text='Bad' value={bad} />
        <StatisticsValue text='Total' value={total} />
        <StatisticsValue text='Average' value={average} />
        <StatisticsValue text='Positive Percentage' value={positivePercentage} />
        </>
    )
}

export default Statistics