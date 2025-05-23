const StatisticLine = ({ text, value }) => (
  <tr>
    <td style={{paddingRight: '16px'}}>{text}</td>
    <td>{value}</td>
  </tr>
);
  
const Statistics = ({good, bad, neutral}) => {
    const total = bad + good + neutral;
    const positivePercentage = (good / total) * 100;
    const average = (good - bad) / total;

    if (total === 0) {
        return <p>No feedback given</p>;
    }

    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)} %`} />
        </tbody>
      </table>
    );
}

export default Statistics