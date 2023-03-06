import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false,
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        
    }
})

export const { startLoadingPokemons } = pokemonSlice.actions