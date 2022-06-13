import { createSlice } from "@reduxjs/toolkit";
import { Characters } from "../../interfaces/Characters"
import { getCharactersThunk } from "../thunks/getCharactersThunk"

interface State {
    characters: Characters[],
    status: string
}

const initialState: State = {
    characters: [],
    status: 'idle'
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        // setCharacters: (state, action) => {
        //     state.characters = action.payload
        // }
    },
    extraReducers(builder) {
        builder.addCase(getCharactersThunk.pending, (state) => {            
            state.status = 'pending'
        })
        builder.addCase(getCharactersThunk.fulfilled, (state, action) => {            
            state.status = 'fulfilled';
            state.characters = action.payload
        })
        builder.addCase(getCharactersThunk.rejected, (state) => {
            state.status = 'error'
        })
    }
});

// export const { setCharacters } = charactersSlice.actions;

export default charactersSlice.reducer