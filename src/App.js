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
      <p>Number of exercises {props.props[0].exercises+props.props[1].exercises+props.props[2].exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part props={props.props[0]}></Part>
      <Part props={props.props[1]}></Part>
      <Part props={props.props[2]}></Part>
    </div>
  )
}


const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.props.name} {props.props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content
       props={parts}
       >
      </Content>
      <Total props={parts}></Total>
    </div>
  )
}



export default App
