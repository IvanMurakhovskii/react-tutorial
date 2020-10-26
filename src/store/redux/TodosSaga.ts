import TodoService from "@/services/todo-service";
import { ToDoData } from "@/types";
import { call, fork, put, takeEvery, select, takeLatest } from "redux-saga/effects"
import { todo, TodoState } from "./Todos";

const service = new TodoService();

export const getTodoData = ({ todoData }: TodoState): ToDoData[] => todoData;

export function* loadTodos() {
    const todos = yield call(service.getAllTodos);
    yield put(todo.actions.addTodos(todos));
}

export function* saveNewTodo() {
    const todos = yield select(getTodoData);
    yield call(service.saveTodos, todos);
}

export function* todoSaga() {
    fork(loadTodos);
    yield takeEvery(todo.actions.addTodo.type, saveNewTodo);
}