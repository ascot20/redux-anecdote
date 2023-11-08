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
//action creator
let timeoutId = null
export const setNotification = (message, duration) => {
    return (dispatch) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        dispatch(addMessage(message))
        timeoutId = setTimeout(() => {
            dispatch(removeMessage())
        }, duration * 1000) ;
    }
}
export default messageSlice.reducer