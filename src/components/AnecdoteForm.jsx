import { useDispatch } from "react-redux"
import { createAnecdote} from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/messageReducer"

function AnecdoteForm() {
    const dispatch = useDispatch()
    
    const addAnecdote = async (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
        dispatch(setNotification(`you added ${anecdote}`, 5))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm