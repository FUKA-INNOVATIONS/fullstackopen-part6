import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = props => {
  //const dispatch = useDispatch()

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addNew(content)
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

const mapDispatchToProps = {
  addNew
}

export default connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)