import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"

function AnecdoteForm() {
    const dispatch = useDispatch()
    
    const addAnecdote = (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(newAnecdote(anecdote))
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