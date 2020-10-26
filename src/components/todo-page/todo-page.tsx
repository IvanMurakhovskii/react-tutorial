import React, { Component } from 'react';
import TodoList from '../todo-list';
import OrderSelect from '../order-select/order-select';
import OrderEnum from '@/emums/order-enum';
import ErrorBoundry from '../error-boundry';

import { ToDoData } from '@/types'

import { default as todoService } from '@/services/todo-service';

import AddItemForm from '../add-item-form';
import styled from '@emotion/styled';
import Header from '../header/intex';
import { getUsername, isUserLoggedIn } from '@/utils';

interface State {
    todoData: ToDoData[],
    order: OrderEnum,
    username: string
}

const AppStyle = styled.div`
    margin: 2rem auto 0 auto;
    width: 60%;
`;

export default class TodoPage extends Component<{}, State> {

    nextId: Function = () => { };

    constructor(props: any) {
        super(props);

        this.state = {
            todoData: [],
            order: OrderEnum.ASC,
            username: ''
        };

        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        todoService.getAllTodos()
            .then((data) => {
                this.setState({
                    todoData: data
                });

                this.nextId = todoService.getNextId(data);
            });

        getUsername().then(name => {
            if (name != null) {
                this.setState({
                    username: name
                });
            }
        });
    }

    deleteItem(id: number) {

        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            todoService.saveTodos(newTodoData);

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

    createTodoItem(label: string) {
        return {
            label,
            important: false,
            done: false,
            hidden: false,
            id: this.nextId()
        }
    }

    onOrderChange = (order: OrderEnum) => {
        this.setState({ order: order })
    }

    addItem = (label: string) => {

        const newTodo = this.createTodoItem(label);

        this.setState(({ todoData }) => {
            const newTodos = [
                ...todoData,
                newTodo
            ];

            todoService.saveTodos(newTodos);

            return {
                todoData: newTodos
            };
        });
    }

    render() {
        return (
            <AppStyle>
                <Header username={this.state.username} isAuth={isUserLoggedIn()} />
                <ErrorBoundry>
                    <OrderSelect
                        onOrderChange={this.onOrderChange}
                        order={this.state.order} />
                    <TodoList
                        todos={this.state.todoData}
                        order={this.state.order}
                        onDeleted={this.deleteItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleDone={this.onToggleDone} />
                    <AddItemForm addItem={this.addItem} />
                </ErrorBoundry>
            </AppStyle>
        );
    };
};