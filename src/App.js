import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.props}</h1>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <p></p>
      <td>{props.value}</td>
    </tr>
  )
}

const AvgStat = (props) => {

  const sum = props.reduce((total, num) => total + num, 0)
  const avg = sum/props.length


  return (
    avg
  )

}

const PosStat = (props) => {

  const positives = props.filter(num => num > 0)
  const percentage = (positives.length/props.length) * 100

  return (
    percentage + " %"
  )
}

const Statistics = (props) => {
  if (props.all.length === 0) {
    return <p>No feedback given</p>
  } else {
  return (
    <div>
      <StatisticLine name={"good"} value={props.good} />
      <StatisticLine name={"neutral"} value={props.neutral} />
      <StatisticLine name={"bad"} value={props.bad} />
      <StatisticLine name={"all"} value={props.all.length} />
      <StatisticLine name={"average"} value={AvgStat(props.all)} />
      <StatisticLine name={"positive"} value={PosStat(props.all)} />
    </div>
  )
 }
}

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(all.concat(1))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(all.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(all.concat(-1))
    setBad(bad + 1)
  }

  return (
    <div>
      <Header props={"Give feedback"}></Header>
      <div>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
      <div>
      <Header props={"Statistics"}></Header>
      </div>
      <Statistics
       good={good}
       neutral={neutral}
       bad={bad}
       all={all}
       ></Statistics>
      </div>
    </div>
  )
}

export default App