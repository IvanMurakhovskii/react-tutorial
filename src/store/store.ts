import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fork } from "redux-saga/effects";
import { auth } from './redux/Authentification';
import { authSaga } from "./redux/AuthentificationSaga";
import { todoSaga } from "../modules/todo-page/saga";
import { timer } from './redux/Timer'
import { reducer as todoReducer } from '@/modules/todo-page/slice'
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

const authReducer = auth.reducer;
const timerReducer = timer.reducer;

const reducer = combineReducers({
    authReducer,
    timerReducer,
    todoReducer
});

export type StoreState = ReturnType<typeof reducer>;

function* rootSaga() {
    yield fork(authSaga);
    yield fork(todoSaga);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
});

export const initStore = () => {
    const store = configureStore({reducer,middleware: [sagaMiddleware]});
    sagaMiddleware.run(rootSaga);
    return store;
};

export const wrapper = createWrapper(initStore);



