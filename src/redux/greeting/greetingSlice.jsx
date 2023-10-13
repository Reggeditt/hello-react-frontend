import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create greeting slice to handle fetching data from backend
const initialState = {
    greeting: null,
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
    const response = await fetch('http://localhost:3000/api/messages/random');
    const data = await response.json();
    return data.content;
});

export const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {
        setGreeting: (state, action) => {
            state.greeting = action.payload;
        },
    },
    extraReducers: {
        [fetchGreeting.fulfilled]: (state, action) => {
            state.greeting = action.payload;
        },
    },
});


export const { setGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;