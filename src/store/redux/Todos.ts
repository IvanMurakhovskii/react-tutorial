import OrderEnum from "@/emums/order-enum";
import { ToDoData } from "@/types";
import { getUsername } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type  TodoState = {
    todoData: ToDoData[],
    order: OrderEnum,
    username: string,
    loading: boolean,
    hasError: boolean
}

export const initialState: TodoState = {
    todoData: [],
    order: OrderEnum.ASC,
    username: '',
    loading: false,
    hasError: false
};

export const loadUsername = createAsyncThunk(
    'username', async () => {
       return getUsername(); 
    }
);


export const todo = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        important: (state, action: PayloadAction<number>) => {
            const todos = state.todoData;
            const id = action.payload;
            const idx = todos.findIndex((el) => el.id === id);

            const oldItem = todos[idx];
            const newItem = { ...oldItem, important: !oldItem.important};
    
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
            const newItem = { ...oldItem, done: !oldItem.done};
    
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
        changeOrder: (state, action: PayloadAction<OrderEnum>) => {
            state.order = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(loadUsername.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadUsername.fulfilled, (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            state.loading = false;
        });
        builder.addCase(loadUsername.rejected, (state) => {
            state.loading = false;
            state.hasError = true;
        });
      },
});
