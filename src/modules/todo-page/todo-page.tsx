import React, { Component } from 'react';
import TodoList from '@/components/todo-list';
import OrderSelect from '@/components/order-select/order-select';
import ErrorBoundry from '@/components/error-boundry';

import { todoService } from '@/services/todo-service';

import AddItemForm from '@/components/add-item-form';
import styled from '@emotion/styled';
import Header from '@/components/header';
import { actions } from '@/modules/todo-page/slice'
import { connect } from 'react-redux';
import { StoreState } from '@/store/store';
import { isUserAuth } from '@/utils/LogInUtil';

const TodosStyle = styled.div`
    margin: 2rem auto 0 auto;
    width: 60%;
`;

const mapStateToProps = ({ todoReducer }: StoreState) => ({
    ...todoReducer
});

const mapDispatchToProps = {
    addTodo: actions.addTodo,
    loadTodos: actions.loadTodos,
    changeOrder: actions.changeOrder,
    delete: actions.delete,
    done: actions.done,
    important: actions.important,
    getUseraname: actions.getUsername
}

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

class TodoPage extends Component<Props, {}> {

    nextId: Function = () => { };

    constructor(props: Props) {
        super(props);
    }

    async componentDidMount() {
        this.props.loadTodos();
        this.props.getUseraname();
    }

    addItem = (label: string) => {
        const newTodo = todoService.createTodoItem(label, this.nextId());
        this.props.addTodo(newTodo);
    }

    render() {
        return (
            <TodosStyle>
                <Header username={this.props.username} isAuth={isUserAuth(this.props.username)} />
                <ErrorBoundry>
                    <OrderSelect
                        onOrderChange={this.props.changeOrder}
                        order={this.props.order} />
                    <TodoList
                        todos={this.props.todoData}
                        order={this.props.order}
                        onDeleted={this.props.delete}
                        onToggleImportant={this.props.important}
                        onToggleDone={this.props.done} />
                    <AddItemForm addItem={this.addItem} />
                </ErrorBoundry>
            </TodosStyle>
        );
    };
};

export const Todos = connect(mapStateToProps, mapDispatchToProps)(TodoPage);