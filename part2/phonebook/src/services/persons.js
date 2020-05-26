import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => {
  const response = axios.get(url)
  return response.then(response => response.data)
}

const add = (newPerson) => {
  const request = axios.put(`${url}/${newPerson.id}`, newPerson)
  return request.then(console.log(`added ${newPerson.name}`))
}

const deletePerson = (persontoDelete) => {
  const request = axios.delete(`${url}/${persontoDelete.id}`)
  return request.then(console.log(`removed ${persontoDelete.name}`))
}

export default {getAll, add, deletePerson}