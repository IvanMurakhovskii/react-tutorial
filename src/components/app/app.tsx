import React, { Component } from 'react';
import TodoList from '../todo-list';
import OrderSelect from '../order-select/order-select';
import OrderEnum from '../../emums/order-enum';
import ErrorBoundry from '../error-boundry';

import { ToDoData } from '../types'

import MockService from '../../services/mock-service';

import AddItemForm from '../add-item-form';
import styled from '@emotion/styled';


interface State {
    todoData: ToDoData[],
    mockService: MockService,
    order: OrderEnum
}

const AppStyle = styled.div`
    margin: 2rem auto 0 auto;
    width: 60%;
`;

export default class App extends Component<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            todoData: [],
            mockService: new MockService(),
            order: OrderEnum.ASC
        };

        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        const service = new MockService();
        service.getAllTodos()
            .then((data) => {
                this.setState({
                    todoData: data
                });
            });
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

    onOrderChange = (order: OrderEnum) => {
        this.setState({ order: order })
    }

    addItem = (label: string) => {
        const newTodo = this.createTodoItem(label, this.getNewTodoId());

        this.setState(({ todoData }) => {
            const newTodos = [
                ...todoData,
                newTodo
            ];

            return {
                todoData: newTodos
            };
        });
    }

    getNewTodoId = (): number => {
        const todos = this.state.todoData;

        const maxId = Math.max(...todos.map(item => item.id), 0);

        return (maxId + 1);
    }

    render() {
        return (
            <AppStyle>
                <ErrorBoundry>
                    <OrderSelect
                        onOrderChange={this.onOrderChange} />
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
