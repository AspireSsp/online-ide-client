import { addListener, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello sanjay"}]
}

export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action)=>{
                const todo = {
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(todo);
            },
            removeTodo: (state, action)=>{
                state.todos = state.todos.filter((todo)=>{return todo.id !== action.payload})
            }
        }
    }
)

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer;