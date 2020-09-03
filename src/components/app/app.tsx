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
    todoData: ToDoData[];
}

export default class App extends Component<{}, State> {

    maxId: number;

    constructor() {
        super({});
        this.maxId = 111;
        this.state = {
            todoData: [
                this.createTodoItem('Task 1'),
                this.createTodoItem('new task 2'),
                this.createTodoItem('somesing')
            ],
        };
    }

    deleteItem(id: number) {

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

    toggleProperty(arr: ToDoData[], id: number, propName: string) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant(id: number) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone(id: number) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    createTodoItem(label: string) {
        return {
            label,
            important: false,
            done: false,
            hidden: false,
            id: this.maxId++
        }
    }


    render() {
        return (
            <div className='app'>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={(id) => this.deleteItem(id)}
                    onToggleImportant={(id) => this.onToggleImportant(id)}
                    onToggleDone={(id) => { this.onToggleDone(id) }} />
            </div>
        );
    };
};