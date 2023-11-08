import { createSlice } from "@reduxjs/toolkit";

const messageSlice =createSlice({
    name: 'message',
    initialState: '',
    reducers: {
        addMessage: (state,action) => {
            return state = action.payload
        },
        removeMessage: (state,action) => {
            state = ''
            return state

        }
    }
})
export const {addMessage, removeMessage} = messageSlice.actions
export default messageSlice.reducer