import axios from "axios"

const baseUrl = 'http://localhost:3000/anecdotes'

const getAnecdotes = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const postAnecdote = async (content) => {
    const newAnecdote = {
        content,
        vote: 0
    }
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

export default {getAnecdotes,postAnecdote}