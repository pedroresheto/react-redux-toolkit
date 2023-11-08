import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    window: 0,
}

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        show: state => {
            state.window +=1
        },
        close: state => {
            state.window -=1
        }}
    })

export const { show, close } = stateSlice.actions

export default stateSlice.reducer