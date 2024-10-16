import { createSlice } from "@reduxjs/toolkit";

// todo - status (complete, incomplete), text, id  
const initialState = {
    todos: [
        { id: 1, text: "Create a react app", status: "incomplete", color: 'white' },
        { id: 2, text: "Create a redux app", status: "incomplete", color: 'white' },
        { id: 3, text: "Create a redux toolkit app", status: "incomplete", color: 'white' },
    ],
    apiTodos: [],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToTodos: (state, action) => {
            const newTodo = action.payload;
            state.apiTodos.unshift(newTodo);
        },
        editTodos: (state, action) => {
            const { id, title } = action.payload;
            const existingTodo = state.apiTodos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.title = title;
            }
        },
        removeFromTodos: (state, action) => {
            const id = action.payload;
            state.apiTodos = state.apiTodos.filter((todo) => todo.id !== id);
        },
        changeTodoStatus: (state, action) => {
            const id = action.payload;
            const existingTodo = state.apiTodos.find((todo) => todo.id === id);
            existingTodo.completed = !existingTodo.completed
        },
        setTodos: (state, action) => {
            state.apiTodos = action.payload;
        }
    },
});

export const { addToTodos, editTodos, removeFromTodos, changeTodoStatus, setTodos } = todoSlice.actions;


export const fetchTodos = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await response.json()
    data = data.sort((a, b) => a.id - b.id)
    dispatch(setTodos(data))
    console.log(data)
}

export default todoSlice.reducer;