import React, { Component } from 'react';
import TodoList from '../todo-list';
import OrderSelect from '../order-select/order-select';
import OrderEnum from '../../emums/order-enum';
import ErrorBoundry from '../error-boundry';

import { ToDoData } from '../types'

import MockService from '../../services/mock-service';

import './app.css';


interface State {
    todoData: ToDoData[],
    mockService: MockService,
    order: OrderEnum
}

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

    render() {
        return (
            <div className='app'>
                <ErrorBoundry>
                    <OrderSelect
                        onOrderChange={this.onOrderChange} />
                    <TodoList
                        todos={this.state.todoData}
                        order={this.state.order}
                        onDeleted={this.deleteItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleDone={this.onToggleDone} />
                </ErrorBoundry>
            </div>
        );
    };
};



// 1. Написать "сложный" компонент с логикой с рядом дочерних презентационных компонентов(можно как основу взять дз из урока про JSX)
// 2. Описать constructor как минимум в одном компоненте, объявить в конструкторе стейт и привязать контекст методов
// 3. Описать componentDidMount как минимум в одном компоненте, получить в нем данные сервера(можно использовать заглушку или сторонние сервисы, например https://jsonplaceholder.typicode.com/). 
// 4. Описать shouldComponentUpdate как минимум в одном компоненте, произвести в нем оптимизацию производительности(если будет притянутый за уши случай - ничего страшного)
// 5. Описать componentDidUpdate как минимум в одном компоненте, описать в нем условие реализовать обновление стейта при этом условии
// 8. Написать компонент с отловом ошибок, обернуть в него любой компонент

// Описать подписку на событие

// 6. Описать componentWillUnmout в компоненте, где в рамках componentDidMount была подписка на событие, реализовать отписку от этого события
// 7. Описать все остальные методы с каким-либо функционалом
