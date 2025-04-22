import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personExists = persons.some(person => person.name === newName)

    if (personExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
  
    const newPerson = {
      name: newName,
      id: String(persons.length + 1),
    }
    setPersons([...persons, newPerson])
    setNewName('')
  }

  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleInput}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, key) => 
          <Contact key={person.id} name={person.name} />
        )}
      </div>
    </div>
  )
}

export default App