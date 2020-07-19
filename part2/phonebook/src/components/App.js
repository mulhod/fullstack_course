import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Notification from './Notification'
import personsService from '../services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ success, setSuccess ] = useState(false)

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
    const existingPersons = persons.filter(person => person.name === newName)
    const existingPerson = existingPersons.length === 1 ? existingPersons[0] : null
    if (existingPerson !== null) {
      if (existingPerson.number === newNumber) {
        window.alert(`${newName} is already added to phonebook`)
        return
      } else {
        const addNewNumber =
          window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)
        if (!addNewNumber) {
          return
        }
      }
    }
    const personObject = {
      name: existingPerson === null ? newName : existingPerson.name,
      number: newNumber,
      id: existingPerson === null ? persons.length + 1 : existingPerson.id
    }

    if (existingPerson !== null) {
      setPersons(persons.filter(person => person.id !== existingPerson.id).concat(personObject))
    } else {
      setPersons(persons.concat(personObject))
    }
    personsService
      .add(personObject, existingPerson === null)
      .then(() => {
        setNotification(`Added/updated ${personObject.name}`)
        setSuccess(true)
        setTimeout(() => {
          setNotification(null)
          setSuccess(false)
        }, 3000)
      })
      .catch(error => {
        setNotification(
          `Information from ${personObject.name} has already been removed from the server`
        )
        setTimeout(() => {
          setNotification(null)
        }, 3000)
        setPersons(persons.filter(person => person.id !== personObject.id))
      })
    setNewName('')
    setNewNumber('')
  }

  const setFilterName = (event) => {
    setNameFilter(event.target.value)
  }

  const deletePerson = (personToDelete) => {
    const result = window.confirm(`Delete ${personToDelete.name} ?`)
    if (result) {
      const newPersons = persons.filter(person => person.id !== personToDelete.id)
      personsService.deletePerson(personToDelete)
      .then(() => {
        setNotification(`Deleted ${personToDelete.name}`)
        setSuccess(true)
        setTimeout(() => {
          setNotification(null)
          setSuccess(false)
        }, 3000)
      })
      .catch(error => {
        setNotification(
          `Information from ${personToDelete.name} has already been removed from the server`
        )
        setTimeout(() => {
          setNotification(null)
        }, 3000)
        setPersons(persons.filter(person => person.id !== personToDelete.id))
      })
      setPersons(newPersons)
    } else {
      console.log(`${personToDelete.name} not removed`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} success={success} />
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