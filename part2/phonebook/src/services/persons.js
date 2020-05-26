import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => {
  const response =
    axios
      .get(url)
  return response
           .then(response => response.data)
}

const add = (newPerson) => {
  const request =
    axios
      .post(url, newPerson)
  return request.then(console.log(`added ${newPerson.name}`))
}

export default {getAll, add}