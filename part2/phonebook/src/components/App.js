import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personsService from '../services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')

  const hook = () => {
    personsService.getAll().then(persons => setPersons(persons))
  }
  useEffect(hook, [])

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
      number: newNumber,
      id: persons.length
    }
  
    setPersons(persons.concat(personObject))
    personsService.add(personObject)
    setNewName('')
    setNewNumber('')
  }

  const setFilterName = (event) => {
    setNameFilter(event.target.value)
  }

  const deletePerson = (persontoDelete) => {
    const result = window.confirm(`Delete ${persontoDelete.name} ?`)
    if (result) {
      const newPersons = persons.filter(person => person.id !== persontoDelete.id)
      personsService.deletePerson(persontoDelete)
      setPersons(newPersons)
    } else {
      console.log(`${persontoDelete.name} not removed`)
    }
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
      <Persons persons={persons} nameFilter={nameFilter} deletePerson={deletePerson} />
    </div>
  )
}

export default App