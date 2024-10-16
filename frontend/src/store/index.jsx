import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";
import { thunk } from 'redux-thunk'

const store = configureStore({ 
    reducer: { todos: todoReducer }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
