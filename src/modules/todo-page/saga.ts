import { todoService } from '@/services/todo-service';
import { ToDoData } from "@/types";
import { getUsername } from '@/utils';
import { call, put, takeEvery, select } from "redux-saga/effects"
import { StoreState } from '../../store/store';
import { actions } from "./slice";


export const getTodoData = ({ todoReducer }: StoreState): Array<ToDoData> => todoReducer.todoData;

export function* loadTodos() {
    const todos = yield call(todoService.getAllTodos);
    yield put(actions.addTodos(todos));
}

export function* saveTodos() {
    const todos = yield select(getTodoData);
    yield call(todoService.saveTodos, todos);
}

export function* loadUsername() {
    const username = yield call(getUsername);
    yield put(actions.setUsername(username));
}

export function* todoSaga() {
    yield takeEvery(actions.loadTodos.type, loadTodos);
    yield takeEvery(actions.addTodo.type, saveTodos);
    yield takeEvery(actions.getUsername.type, loadUsername);
    yield takeEvery(actions.important.type, saveTodos);
    yield takeEvery(actions.done.type, saveTodos);
    yield takeEvery(actions.delete.type, saveTodos);
}