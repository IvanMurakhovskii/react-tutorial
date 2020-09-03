import React, { Component } from 'react';
import TodoList from '../todo-list';

import './app.css';

export interface ToDoData {
    label: string,
    important: boolean,
    done: boolean,
    hidden: boolean,
    id: number
}

interface State {
    todoData: ToDoData[],
}

export default class App extends Component<{}, State> {

    constructor() {
        super({});

        this.state = {
            todoData: [
                this.createTodoItem('Task 1', 1),
                this.createTodoItem('new task 2', 2),
                this.createTodoItem('somesing', 3)
            ]
        };
    }

    deleteItem = (id: number) => {

        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            }
        });
    };

    toggleProperty(arr: ToDoData[], id: number, propName: "important" | "done") {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id: number) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id: number) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    createTodoItem(label: string, id: number) {
        return {
            label,
            important: false,
            done: false,
            hidden: false,
            id
        }
    }

    render() {
        return (
            <div className='app'>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
            </div>
        );
    };
};