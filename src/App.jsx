import { useSelector, useDispatch } from 'react-redux'

function App() {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({ type: "VOTE", payload: { id } })
  }

  const addAnecdote = (e) => {
    e.preventDefault()

    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''

    dispatch({type:"ADD", payload: {anecdote}})
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App