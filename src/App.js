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

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header props={"Give feedback"}></Header>
      <div>
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}> 
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>bad
        </button>
      <div>
      <Header props={"Statistics"}></Header>
      </div>
      <Stat name={"good"} value={good}></Stat>
      <Stat name={"neutral"} value={neutral}></Stat>
      <Stat name={"bad"} value={bad}></Stat>
      </div>
    </div>
  )
}

export default App