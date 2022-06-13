import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Counter {
    value: number
}

const initialState: Counter = {
    value: 0    
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            if(state.value > 1) state.value = state.value - 1;            
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {            
            state.value = state.value + action.payload
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;