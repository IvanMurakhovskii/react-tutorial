import React, { Component } from 'react';
import './todo-list-item.css';
import TodoTimer from '../todo-timer';

export interface TodoListItemProps {
    label: string,
    done: boolean,
    important: boolean,
    onToggleImportant(): void,
    onToggleDone(): void,
    onDeleted(): void,
}

interface TodoListState {
    timerSeconds: number
}

class TodoListItem extends Component<TodoListItemProps, TodoListState> {

    private intervalId: number | undefined;

    constructor(props: TodoListItemProps) {
        super(props);

        this.state = { timerSeconds: 25 * 60 };
    }

    shouldComponentUpdate(nextProps: TodoListItemProps) {
        const { done, important, label } = { ...this.props };
        const nextDone = nextProps.done;
        const nextImportant = nextProps.important;
        const nextLabel = nextProps.label;

        return done !== nextDone || important !== nextImportant || label !== nextLabel;
    }

    componentWillMount() {
        clearInterval(this.intervalId);
    }

    updateTimer = (): void => {
        let s = this.state.timerSeconds;
        this.setState({ timerSeconds: --s });

        if (s <= 0) clearInterval(this.intervalId);

        this.forceUpdate();
    }

    startTimer = (): void => {
        this.intervalId = window.setInterval(this.updateTimer, 1000);
    }

    render() {

        const { done, important, label, onToggleDone, onToggleImportant, onDeleted } = { ...this.props };

        let classNames = `todo-list-item ${done ? 'done' : ''} ${important ? 'important' : ''}`;

        return (
            <div>
                <span className={classNames}>
                    <span
                        className="todo-list-item-label"
                        onClick={onToggleDone}>
                        {label}
                    </span>

                    <button type="button"
                        className="btn-start"
                        onClick={this.startTimer} >
                        Start
                </button>

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
                <TodoTimer timerSeconds={this.state.timerSeconds} />
            </div>
        );
    }
}

export default TodoListItem;