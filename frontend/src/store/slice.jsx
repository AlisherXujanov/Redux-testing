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
            state.apiTodos.push(newTodo);
        },
        editTodos: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.apiTodos.find((todo) => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
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
            // if (existingTodo.completed === "incomplete") {
            //     existingTodo.completed = "complete";
            // } else {
            //     existingTodo.completed = "incomplete";
            // }
        },
        // changeTodoColor: (state, action) => {
        //     const id = action.payload;
        //     const existingTodo = state.todos.find((todo) => todo.id === id);
        //     if (existingTodo.color === "white") {
        //         existingTodo.color = "red";
        //     } else {
        //         existingTodo.color = "white";
        //     }
        // },
        setTodos: (state, action) => {
            state.apiTodos = action.payload;
        }
    },
});

export const { addToTodos, editTodos, removeFromTodos, changeTodoStatus, setTodos } = todoSlice.actions;


export const fetchTodos = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    dispatch(setTodos(data))
    console.log(data)
}

export default todoSlice.reducer;