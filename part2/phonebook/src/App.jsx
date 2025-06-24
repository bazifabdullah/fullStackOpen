import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import ContactList from './components/ContactList'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredContact, setFilteredContact] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personExists = persons.some(person => person.name === newName)

    if (personExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
  
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchFilter = (event) => {
    setFilteredContact(event.target.value)
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(filteredContact.toLowerCase())
  )

  const deleteEntry = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this contact?')

    if (confirmDelete) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter value={filteredContact} onChange={handleSearchFilter} />

      <h2>Add a person</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
      />

      <h2>Numbers</h2>
      <ContactList persons={filteredPersons} handleDelete={deleteEntry} />
    </div>
  )
}

export default App