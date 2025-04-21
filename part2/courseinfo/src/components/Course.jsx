const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Part = ({ name, exercises }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => {
      return sum + part.exercises
    }, 0)
  
    return (
      <div>
        <p>
          Total Number of exercises is <b>{totalExercises}</b>.
        </p>
      </div>
    )
  }
  
  const Course = ({ course }) => {
    console.log(course);
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}
  
export default Course