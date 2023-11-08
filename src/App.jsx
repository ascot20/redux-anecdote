import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { useEffect } from 'react'
import anecdoteService from './services/anecdote'
import { setAnecdotes } from './reducers/anecdoteReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAnecdotes().then(res => {
      dispatch(setAnecdotes(res))
    })
  }, [])
  return (
    <div>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App