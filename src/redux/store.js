// create redux store

import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingSlice';

export const store = configureStore({
    reducer: {
        // define reducers here
        greeting: greetingReducer,
    },
});

export default store;
