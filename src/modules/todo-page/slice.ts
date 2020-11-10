import OrderEnum from "@/emums/order-enum";
import { ToDoData } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoState = {
    todoData: Array<ToDoData>,
    order: OrderEnum,
    username: string
}

export const initialState: TodoState = {
    todoData: new Array(),
    order: OrderEnum.ASC,
    username: ''
};

const todo = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        important: (state, action: PayloadAction<number>) => {
            const todos = state.todoData;
            const id = action.payload;
            const idx = todos.findIndex((el) => el.id === id);

            const oldItem = todos[idx];
            const newItem = { ...oldItem, important: !oldItem.important };

            state.todoData = [
                ...todos.slice(0, idx),
                newItem,
                ...todos.slice(idx + 1)
            ];
        },
        done: (state, action: PayloadAction<number>) => {
            const todos = state.todoData;
            const id = action.payload;
            const idx = todos.findIndex((el) => el.id === id);

            const oldItem = todos[idx];
            const newItem = { ...oldItem, done: !oldItem.done };

            state.todoData = [
                ...todos.slice(0, idx),
                newItem,
                ...todos.slice(idx + 1)
            ];
        },
        delete: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const idx = state.todoData.findIndex((el) => el.id === id);

            const newTodoData = [
                ...state.todoData.slice(0, idx),
                ...state.todoData.slice(idx + 1)
            ];

            state.todoData = newTodoData;
        },
        addTodo: (state, action: PayloadAction<ToDoData>) => {
            const newTodos = [
                ...state.todoData,
                action.payload
            ];

            state.todoData = newTodos;
        },
        addTodos: (state, action: PayloadAction<Array<ToDoData>>) => {
            if (action.payload !== undefined) {
                state.todoData = action.payload;
            }
        },
        changeOrder: (state, action: PayloadAction<OrderEnum>) => {
            state.order = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        getUsername: () => {
        },
        loadTodos: () => {
        }
    }
});

export const { actions, reducer } = todo;
