import React, { FC, useEffect, useState } from 'react';

import TodoListItem from '../todo-list-item'
import { ToDoData } from '@/types';

import OrderEnum from '@/emums/order-enum';
import styled from '@emotion/styled';
import Row from '../row';
import TodoTimer from '../todo-timer';
import { orderTodos } from '@/utils';

const TodoListItemContainer = styled.div`
    padding: .25rem .75rem;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    margin-bottom: 1rem;
    border-radius: 3px;
    background-color: lightgoldenrodyellow;
`;

export interface TodoListProps {
  todos: Array<ToDoData>,
  order: OrderEnum
  onDeleted(id: number): void,
  onToggleImportant(id: number): void,
  onToggleDone(id: number): void,
}

export interface TodoListState {
  order: OrderEnum
}

const TodoList: FC<TodoListProps> = (props: TodoListProps) => {

  const [order, setOrder] = useState(props.order);
  useEffect(() => {
    setOrder(props.order);
  }, [props.order]);

  const { todos, onDeleted, onToggleImportant, onToggleDone } = props;

  const orderedTodos = orderTodos(todos, order);

  const elements = orderedTodos.map((item) => {

    const { id, ...itemProps } = item;
    return (
      <div key={id} >
        <TodoListItemContainer >
          <Row
            left={<TodoListItem  {...itemProps}
              onDeleted={() => onDeleted(id)}
              onToggleImportant={() => onToggleImportant(id)}
              onToggleDone={() => onToggleDone(id)}
            />}
            leftFlexBasic={70}
            right={<TodoTimer seconds={25 * 60} />}
            rightFlexBasic={20} />
        </TodoListItemContainer>
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