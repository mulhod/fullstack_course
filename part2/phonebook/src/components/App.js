import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const setFilterName = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} setFilterName={setFilterName}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange}
                  newNumber={newNumber} handleNumberChange={handleNumberChange}
                  addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  )
}

export default App