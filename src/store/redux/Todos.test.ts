import OrderEnum from '@/emums/order-enum';
import { loadUsername, todo, TodoState } from './Todos';

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

const newTodo = {
  label: "todo4",
  important: true,
  done: true,
  hidden: false,
  id: 4
}

const initialState: TodoState = {
  todoData: todos,
  order: OrderEnum.ASC,
  username: 'user',
  loading: false,
  hasError: false
};

describe("Todos reducer", () => {
  it("set inportant", () => {
    expect(todo.reducer(initialState, todo.actions.important(1)).todoData[0].important).toBeTruthy();
  });
  it("set done", () => {
    expect(todo.reducer(initialState, todo.actions.done(2)).todoData[1].done).toBeFalsy();
  });
  it("remove todos", () => {
    expect(todo.reducer(initialState, todo.actions.delete(2)).todoData.length).toEqual(2);
  });
  it("chenge order", () => {
    expect(todo.reducer(initialState, todo.actions.changeOrder(OrderEnum.IMPORTANT)).order).toEqual(OrderEnum.IMPORTANT);
  });
  it("add new todo", () => {
    expect(todo.reducer(initialState, todo.actions.addTodo(newTodo)).todoData[3]).toEqual(newTodo);
  });
});
