import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.props}</h1>
    </div>
  )
}

const Stat = (props) => {
  return (
    <div>
      <p>{props.name} {props.value}</p>
    </div>
  )
}

const AvgStat = (props) => {

  const sum = props.array.reduce((total, num) => total + num, 0)
  const avg = sum/props.array.length


  return (
    <div>
      <p>{props.name} {isNaN(avg) ? 0 : avg}</p>
    </div>
  )

}

const PosStat = (props) => {

  const positives = props.array.filter(num => num > 0)
  const percentage = (positives.length/props.array.length) * 100

  return (
    <div>
      <p>{props.name} {isNaN(percentage) ? 0 : percentage} %</p>
    </div>
  )
}

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
        <button onClick={handleGoodClick}>
          good
        </button>
        <button onClick={handleNeutralClick}> 
          neutral
        </button>
        <button onClick={handleBadClick}>bad
        </button>
      <div>
      <Header props={"Statistics"}></Header>
      </div>
      <Stat name={"good"} value={good}></Stat>
      <Stat name={"neutral"} value={neutral}></Stat>
      <Stat name={"bad"} value={bad}></Stat>
      <Stat name={"all"} value={all.length}></Stat>
      <AvgStat name={"average"} array={all}></AvgStat>
      <PosStat name={"positive"} array={all} ></PosStat>
      </div>
    </div>
  )
}

export default App