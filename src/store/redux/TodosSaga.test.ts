import { todo } from './Todos';
import { expectSaga } from "redux-saga-test-plan";
import { getTodoData, loadTodos, saveNewTodo } from './TodosSaga';
import { select } from 'redux-saga-test-plan/matchers';
import TodoService from '@/services/todo-service';
import { ToDoData } from '@/types';

const todos = [
  {
    label: "todo1",
    important: false,
    done: false,
    hidden: false,
    id: 1
  },
  {
    label: "todo2",
    important: false,
    done: true,
    hidden: false,
    id: 2
  },
  {
    label: "todo3",
    important: true,
    done: true,
    hidden: false,
    id: 3
  }
];

const service = new TodoService();

describe("Todos saga", () => {
  it("save new todo to storage", () => {
    return expectSaga(saveNewTodo)
      .provide([[select(getTodoData), todos]])
      .call(service.saveTodos, todos)
      .run();
  });
})
