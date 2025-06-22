import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// fetch all contacts
const getAll = () => {
    return axios.get(baseUrl).then(res => res.data)
}

// add new contact
const create = newPerson => {
    return axios.post(baseUrl, newPerson).then(res => res.data)
}

export default {
    getAll,
    create
}