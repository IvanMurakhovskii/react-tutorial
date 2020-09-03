import React, { FC } from 'react';

import TodoListItem from '../todo-list-item'

import { ToDoData } from '../types/types';

import './todo-list.css';

export interface TodoListProos {
  todos: Array<ToDoData>,
  onDeleted(id: number): void,
  onToggleImportant(id: number): void,
  onToggleDone(id: number): void,
}

const TodoList: FC<TodoListProos> = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {

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

export default TodoList;