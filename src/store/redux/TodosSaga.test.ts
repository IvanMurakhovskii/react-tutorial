import { expectSaga } from "redux-saga-test-plan";
import { getTodoData, loadTodos, saveNewTodo } from './TodosSaga';
import { select } from 'redux-saga-test-plan/matchers';
import { todoService } from '@/services/todo-service';
import { todo } from "./Todos";

const faker = require('faker/locale/ru');

const todos = [
  {
    label: faker.hacker.phrase(),
    important: faker.random.boolean(),
    done: faker.random.boolean(),
    hidden: false,
    id: 1
  },
  {
    label: faker.hacker.phrase(),
    important: faker.random.boolean(),
    done: faker.random.boolean(),
    hidden: false,
    id: 2
  },
  {
    label: faker.hacker.phrase(),
    important: faker.random.boolean(),
    done: faker.random.boolean(),
    hidden: false,
    id: 3
  }
];

describe("Todos saga", () => {
  it("save new todo to storage", () => {
    return expectSaga(saveNewTodo)
      .provide([[select(getTodoData), todos]])
      .call(todoService.saveTodos, todos)
      .run();
  });
  it("load todos from storage", () => {
    return expectSaga(loadTodos)
      .withState(todos)
      .put(todo.actions.addTodos(todos))
      .run();
  });
})
