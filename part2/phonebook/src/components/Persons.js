import React from 'react'

const Persons = ({persons, nameFilter}) => (
  <ul>
    {persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
            .map(person => <li key={person.name}>{person.name} {person.number}</li>)}
  </ul>
)

export default Persons