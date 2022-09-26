import { createSlice } from "@reduxjs/toolkit";
// import { Action } from "@remix-run/router";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, Action) => {
            state.value += Action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;