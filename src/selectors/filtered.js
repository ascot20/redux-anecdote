import { createSelector } from '@reduxjs/toolkit'

const selectAnecdotes = state => state.anecdotes
const selectFilter = state => state.filter

export const selectFilteredAnecdotes = createSelector(
  [selectAnecdotes, selectFilter],
  (anecdotes, filter) => {
    if (!filter) {
      return [...anecdotes].sort((a, b) => b.votes - a.votes)
    } else {
      const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      return filteredAnecdotes
    }
  }
)
