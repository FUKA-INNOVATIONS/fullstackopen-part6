import React from 'react'
import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log(anecdote);
    event.target.anecdote.value = ''
    dispatch(addNew(anecdote))
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