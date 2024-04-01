const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.name} {props.number}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(value => {
        return (
          <Part name={value.name} number={value.exercises}/>
        )
      })}
    </div>
  )
}

const Total = (props) => {
  let amount = 0
  {props.parts.forEach(element => {
    amount += element.exercises
  });}
  return (
    <>
      <p>Number of exercises {amount}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
    <Header course={course}/>
    <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App