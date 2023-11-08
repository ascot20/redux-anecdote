import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { selectFilteredAnecdotes } from "../selectors/filtered"
import Notification from "./Notification"

function AnecdoteList() {
    const anecdotes = useSelector(selectFilteredAnecdotes)
    const message = useSelector(state=>state.message)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(addVote(id))
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {message && <Notification/>}
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
        </div>
    )
}
export default AnecdoteList