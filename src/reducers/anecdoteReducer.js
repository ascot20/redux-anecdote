import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    addVote: (state, action) => {
      const anectdoteID = action.payload;
      const anecdote = state.find((anecdote) => anecdote.id === anectdoteID);
      const updatedVote = anecdote.votes + 1;
      const updatedAnecdote = { ...anecdote, votes: updatedVote };
      const updatedState = state.map((anecdote) =>
        anecdote.id === anectdoteID ? updatedAnecdote : anecdote
      );
      return updatedState;
    },
    newAnecdote: (state, action) => {
      const newAnecdote = action.payload
      return [...state, newAnecdote]
    },
    setAnecdotes: (state, action) => {
      return action.payload
    }
  }
})

export const {addVote, newAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer


