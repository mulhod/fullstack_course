import axios from 'axios'

const url = 'http://localhost:3001/api/persons'

const getAll = () => {
  const response = axios.get(url)
  console.log(response.data)
  return response.then(response => response.data)
}

const add = (person, newPerson) => {
  let message = null
  let request = null
  if (newPerson) {
    request = axios.post(url, person)
    message = `added ${person.name} ${person.id}`
  } else {
    request = axios.put(`${url}/${person.id}`, person)
    message = `updated ${person.name} ${person.id}`
  }
  return request.then(console.log(message))
}

const deletePerson = (persontoDelete) => {
  const request = axios.delete(`${url}/${persontoDelete.id}`)
  return request.then(console.log(`removed ${persontoDelete.name}`))
}

export default {getAll, add, deletePerson}