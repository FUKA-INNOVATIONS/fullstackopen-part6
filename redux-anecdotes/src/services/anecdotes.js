import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const vote = async (id) => {
  const response = await axios.get(baseUrl)
  const anecdotes = response.data
  const voted = anecdotes.find(a => a.id === id)
  const notVoted = anecdotes.filter(a => a.id !== id)

  const updatedObject = {
    ...voted,
    votes: voted.votes +1
  }
  return notVoted.concat( updatedObject )
}

const createNew = async (content) => {
  const object = {
    content,
    id: getId(),
    votes: 0
  }
  console.log(baseUrl);
  const response = await axios.post(baseUrl, object)
  return response.data
}

export default {
  getAll,
  createNew
}