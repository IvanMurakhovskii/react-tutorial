import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fork } from "redux-saga/effects";
import { auth } from './redux/Authentification';
import { authSaga } from "./redux/AuthentificationSaga";
import { todoSaga } from "./redux/TodosSaga";
import { timer } from './redux/Timer'
import { todo } from './redux/Todos'
import createSagaMiddleware from "redux-saga";


const authReducer = auth.reducer;
const timerReducer = timer.reducer;
const todoReducer = todo.reducer;

const reducer = combineReducers({
    authReducer,
    timerReducer,
    todoReducer
});

function* rootSaga() {
    yield fork(authSaga);
    yield fork(todoSaga);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);



