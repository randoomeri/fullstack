const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
    <Header name={course.name}/>
    <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App