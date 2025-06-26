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
          <Part key={value.id} name={value.name} number={value.exercises}/>
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
      <p style={{fontSize: 16,
                    fontWeight: '600'}}>
        Number of exercises {amount}
      </p>
    </>
  )
}

const Course = ({course}) => {
  return(
    <div>
    <Header name={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}


export default App