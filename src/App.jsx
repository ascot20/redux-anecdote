import { useSelector, useDispatch } from 'react-redux'
import { addVote} from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

function App() {
  return (
    <div>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App