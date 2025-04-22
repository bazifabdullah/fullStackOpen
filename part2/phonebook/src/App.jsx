import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
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
      <form onSubmit={addNumber}>
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