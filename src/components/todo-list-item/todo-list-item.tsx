import React, { FC } from 'react';

import './todo-list-item.css';

export interface TodoListItemProps {
    label: string,
    onToggleImportant(): void,
    onToggleDone(): void,
    done: boolean,
    important: boolean,
    onDeleted(): void,
}

const TodoListItem: FC<TodoListItemProps> = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {

    let classNames = `todo-list-item ${done ? 'done' : ''} ${important ? 'important' : ''}`;

    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                {label}
            </span>

            <button type="button"
                className="btn-important"
                onClick={onToggleImportant}>
                Important
            </button>

            <button type="button"
                className="btn-delete"
                onClick={onDeleted}>
                Delete
            </button>
        </span>
    );
}

export default TodoListItem;