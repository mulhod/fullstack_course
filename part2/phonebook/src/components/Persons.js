import React from 'react'

const Persons = ({persons, nameFilter, deletePerson}) => (
  <ul>
    {persons
       .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
       .map(person =>
         <li key={person.name}>
           {person.name} {person.number}
           <button onClick={() => deletePerson(person)}>delete</button>
         </li>)}
  </ul>
)

export default Persons