import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"
import { addMessage, removeMessage } from "../reducers/messageReducer"
import anecdoteService from '../services/anecdote'

function AnecdoteForm() {
    const dispatch = useDispatch()
    
    const addAnecdote = async (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        const res = await anecdoteService.postAnecdote(anecdote)
        dispatch(newAnecdote(res))
        dispatch(addMessage(`you added ${anecdote}`))
        setTimeout(()=>{
            dispatch(removeMessage())
        },5000)
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