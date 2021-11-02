import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteNow } from '../reducers/anecdoteReducer'
import { createMessage } from '../reducers/notoficationReducer'
import Notification from './Notification'

const AnecdoteList = () => {
  let anecdotes = useSelector(state => state.anecdotes)
  const searchTerm = useSelector(state => state.filter)
  console.log('TERMTERM: ', searchTerm);

  if (searchTerm !== null) {
    anecdotes =  anecdotes.filter(a => a.content.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  anecdotes.sort((a, b) => {
    return b.votes - a.votes
  })

  const dispatch = useDispatch()

  const vote = (id, anecdote) => {
    dispatch(voteNow(id))
    dispatch(createMessage(`You voted "${anecdote}"`))
    setTimeout(() => {
      dispatch(createMessage(null))
    }, 5000)
  }

  return (
      <>
        <Notification />
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
              </div>
            </div>
        )}
      </>
  )
}

export default AnecdoteList