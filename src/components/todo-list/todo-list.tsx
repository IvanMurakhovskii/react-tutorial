import React, { FC, Component } from 'react';

import TodoListItem from '../todo-list-item'

import { ToDoData } from '../types/types';

import './todo-list.css';
import OrderEnum from '../../emums/order-enum';

export interface TodoListProos {
  todos: Array<ToDoData>,
  order: OrderEnum
  onDeleted(id: number): void,
  onToggleImportant(id: number): void,
  onToggleDone(id: number): void,
}

class TodoList extends Component<TodoListProos, {}> {

  constructor(props: TodoListProos) {
    super(props);

    this.setState({ order: props.order });
  }

  componentDidUpdate(prevProps: TodoListProos) {
    const currentOrder = this.props.order;
    const prevOrder = prevProps.order;

    if (currentOrder != prevOrder) {
      this.setState({ order: currentOrder });
    }
  }

  orderTodos(todos: Array<ToDoData>, order: OrderEnum): Array<ToDoData> {
    switch (order) {
      case OrderEnum.ASC:
        return todos.sort((a, b) => (a.label > b.label ? 1 : -1));
      case OrderEnum.DESC:
        return todos.sort((a, b) => (a.label > b.label ? -1 : 1));
      case OrderEnum.IMPORTANT:
        return todos.sort((a, b) => (a.important === b.important) ? 0 : a.important ? -1 : 1);
      default:
        return todos.sort();
    }
  }

  render() {
    const { todos, order, onDeleted, onToggleImportant, onToggleDone } = this.props;

    const orderedTodos = this.orderTodos(todos, order);

    const elements = orderedTodos.map((item) => {

      const { id, ...itemProps } = item;
      return (
        <div key={id} className="list-item">
          <TodoListItem  {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </div>
      );
    });

    return (
      <div className="list-group todo-list">
        {elements}
      </div>
    );
  }
}

export default TodoList;