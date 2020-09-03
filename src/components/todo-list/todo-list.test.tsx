import React from 'react';
import { shallow, mount, render } from "enzyme";
import TodoList, { TodoListProos } from './todo-list';
import TodoListItem from '../todo-list-item';

const onDeletedMock = jest.fn();
const onToggleDoneMock = jest.fn();
const onToggleImportantMock = jest.fn();

const todos = [
  {
    label: 'test 1',
    important: false,
    done: false,
    hidden: false,
    id: 1
  },
  {
    label: 'test 2',
    important: false,
    done: true,
    hidden: false,
    id: 2
  },
  {
    label: 'test 3',
    important: true,
    done: false,
    hidden: false,
    id: 3
  }
]

const props: TodoListProos = {
  todos: todos,
  onDeleted: onDeletedMock,
  onToggleDone: onToggleDoneMock,
  onToggleImportant: onToggleImportantMock
}

const item = <TodoList {...props} />

describe("TodoList", () => {
  it("render item with data", () => {
    const field = shallow(item)
    expect(field).toMatchSnapshot();
  });

  it("lenght of child TodoListItem equals 3", () => {
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper.find(TodoListItem).length).toEqual(3);
  });

});