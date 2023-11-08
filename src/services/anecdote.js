import axios from "axios"

const baseUrl = 'http://localhost:3000/anecdotes'

const getAnecdotes = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const postAnecdote = async (content) => {
    const newAnecdote = {
        content,
        votes: 0
    }
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

const updateAnecdote = async (id, body) => {
    const response = await axios.put(`${baseUrl}/${id}`, body)
    return response.data
}

export default {getAnecdotes,postAnecdote, updateAnecdote}