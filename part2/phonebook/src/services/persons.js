import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => {
  const response = axios.get(url)
  return response.then(response => response.data)
}

const add = (person, newPerson) => {
  if (newPerson) {
    const request = axios.post(url, person)
    return request.then(console.log(`added ${person.name} ${person.id}`))
  } else {
    const request = axios.put(`${url}/${person.id}`, person)
    return request.then(console.log(`updated ${person.name} ${person.id}`))
  }
}

const deletePerson = (persontoDelete) => {
  const request = axios.delete(`${url}/${persontoDelete.id}`)
  return request.then(console.log(`removed ${persontoDelete.name}`))
}

export default {getAll, add, deletePerson}