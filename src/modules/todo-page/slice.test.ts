import OrderEnum from '@/emums/order-enum';
import { actions, reducer, TodoState } from './slice';

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
};

describe("Todos reducer", () => {
  it("set inportant", () => {
    expect(reducer(initialState, actions.important(1)).todoData[0].important).toBeTruthy();
  });
  it("set done", () => {
    expect(reducer(initialState, actions.done(2)).todoData[1].done).toBeFalsy();
  });
  it("remove todos", () => {
    expect(reducer(initialState, actions.delete(2)).todoData.length).toEqual(2);
  });
  it("chenge order", () => {
    expect(reducer(initialState, actions.changeOrder(OrderEnum.IMPORTANT)).order).toEqual(OrderEnum.IMPORTANT);
  });
  it("add new todo", () => {
    expect(reducer(initialState, actions.addTodo(newTodo)).todoData[3]).toEqual(newTodo);
  });
});
