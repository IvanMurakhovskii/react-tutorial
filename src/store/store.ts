import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { auth } from './redux/Authentification';
import { timer } from './redux/Timer'
import { todo } from './redux/Todos'


const authReducer = auth.reducer;
const timerReducer = timer.reducer;
const todoReducer = todo.reducer;

const reducer = combineReducers({
    authReducer,
    timerReducer,
    todoReducer
});

export const store = configureStore({
    reducer,
    middleware: []
});



