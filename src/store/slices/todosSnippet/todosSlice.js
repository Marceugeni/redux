import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: 0,
}
export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {


    },
})


// Action creators are generated for each case reducer function
export const { } = todosSlice.actions