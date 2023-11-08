import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdote";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    addAnecdote: (state, action) => {
      const newAnecdote = action.payload;
      return [...state, newAnecdote];
    },
    setAnecdotes: (state, action) => {
      return action.payload;
    },
    updateAnecdote: (state, action) => {
      const newAnecdote = action.payload;
      return state.map((anecdote) =>
        anecdote.id === newAnecdote.id ? newAnecdote : anecdote
      );
    },
  },
});

export const { addAnecdote, setAnecdotes, updateAnecdote } =
  anecdoteSlice.actions;
//Async action creators
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAnecdotes();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const addVote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdotes;
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    const updatedVote = anecdote.votes + 1;
    const updatedAnecdote = { ...anecdote, votes: updatedVote };

    //Save update to backend
    const newAnecdote = await anecdoteService.updateAnecdote(
      id,
      updatedAnecdote
    );
    dispatch(updateAnecdote(newAnecdote));
  };
}

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.postAnecdote(anecdote)
    dispatch(addAnecdote(newAnecdote))
  }
}
export default anecdoteSlice.reducer;
