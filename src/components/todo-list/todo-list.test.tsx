/**
 * @jest-environment jsdom
*/

import React from 'react';
import { mount } from "enzyme";
import TodoList, { TodoListProps } from './todo-list';
import TodoListItem from '../todo-list-item';
import OrderEnum from '../../emums/order-enum';

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

const props: TodoListProps = {
  todos: todos,
  order: OrderEnum.ASC,
  onDeleted: onDeletedMock,
  onToggleDone: onToggleDoneMock,
  onToggleImportant: onToggleImportantMock
}

const item = <TodoList {...props} />
const wrapper = mount(item);

describe("TodoList", () => {
  it("render item with data", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("lenght of child TodoListItem equals 3", () => {
    expect(wrapper.find(TodoListItem).length).toEqual(3);
  });

});