import React from 'react'
import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addNew(content))
  }

  return (
      <>
        <h2>create new</h2>
        <form onSubmit={add}>
          <div><input name={'anecdote'} /></div>
          <button>create</button>
        </form>
      </>
  )
}

export default AnecdoteForm