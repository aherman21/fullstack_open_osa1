const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part1.name} exercises={props.part1.excercises}></Part>
      <Part part={props.part3.name} exercises={props.part2.excercises}></Part>
      <Part part={props.part2.name} exercises={props.part3.excercises}></Part>
    </div>
  )
}


const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    excercises: 10
  },
  {
    name: 'Using props to pass data',
    excercises: 7
  },
  {
    name: 'State of a component',
    excercises: 14
  }
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content
       part1={parts[0]}
       part2 = {parts[1]}
       part3 = {parts[2]}
       >
      </Content>
      <Total total={parts[0].excercises+parts[1].excercises+parts[2].excercises}></Total>
    </div>
  )
}



export default App
