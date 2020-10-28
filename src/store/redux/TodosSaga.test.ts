import { expectSaga } from "redux-saga-test-plan";
import { getTodoData, saveNewTodo } from './TodosSaga';
import { select } from 'redux-saga-test-plan/matchers';
import { todoService } from '@/services/todo-service';

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

describe("Todos saga", () => {
  it("save new todo to storage", () => {
    return expectSaga(saveNewTodo)
      .provide([[select(getTodoData), todos]])
      .call(todoService.saveTodos, todos)
      .run();
  });
})
