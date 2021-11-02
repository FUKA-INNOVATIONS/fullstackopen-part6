import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteReducer = (state = [], action) => {
  switch ( action.type ) {
    case 'INIT_NOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE':
      const notVoted = state.filter(anecdote => anecdote.id !== action.data.id)
      const voted = state.find(a => a.id === action.data.id)
      return [...notVoted, { ...voted, votes: voted.votes + 1 }]
    case 'ADD':
      return [...state, action.data]
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecdotes,
    })
  }
}

export const voteNow = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const addNew = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export default anecdoteReducer