import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        cards: []

    },
    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload;
        }
    }
});

export const { setCards } = dataSlice.actions

export default dataSlice.reducer
