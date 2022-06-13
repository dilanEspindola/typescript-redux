import { createAsyncThunk } from "@reduxjs/toolkit";
import { Data } from "../../interfaces/Characters"


export const getCharactersThunk = createAsyncThunk(
    "fetch/characters",
    async () => {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const {results}: Data = await res.json()
        return results;
    }
);