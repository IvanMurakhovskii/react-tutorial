import React, { Component } from 'react';
import TodoTimer from '../todo-timer';

import Button from '@material-ui/core/Button';
import styled from '@emotion/styled';

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

const LabelStyle = styled.div<TodoListItemProps>`
    text-decoration: ${(props) => props.done && 'line-through'};
    font-weight: ${(props) => props.important && 'bold'};
    color: ${(props) => props.important && 'steelblue'}; 
    flex: 40%;
    text-align: center;
    margin: auto;
    cursor: pointer;
    user-select: none;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 1.2rem;
`;


const ButtonContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    flex: 25%;
    button {
        margin-right: 5px;
    }
`;

const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 10%;
`;

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

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    updateTimer = (): void => {
        let s = this.state.timerSeconds;
        this.setState({ timerSeconds: --s });

        if (s <= 0) clearInterval(this.intervalId);

        this.forceUpdate();
    }

    startTimer = (): void => {
        if (this.intervalId !== undefined) clearInterval(this.intervalId);
        this.intervalId = window.setInterval(this.updateTimer, 1000);
    }

    render() {

        const { label, onToggleDone, onToggleImportant, onDeleted } = { ...this.props };

        return (
            <Container className="todo-list-item">
                <LabelStyle {...this.props}>
                    <span
                        onClick={onToggleDone}>
                        {label}
                    </span>
                </LabelStyle>

                <ButtonContainer>
                    <Button className="btn-delete"
                        variant="contained" size="small" color="secondary"
                        onClick={onDeleted}>
                        Delete
                    </Button>

                    <Button className="btn-impotrant"
                        variant="contained" size="small" color="primary"
                        onClick={onToggleImportant}>
                        Important
                    </Button>

                    <Button className="btn-start"
                        variant="contained" size="small" color="inherit"
                        onClick={this.startTimer}>
                        Start
                    </Button>
                </ButtonContainer>
                <TimerContainer>
                    <TodoTimer timerSeconds={this.state.timerSeconds} />
                </TimerContainer>
            </Container>
        );
    }
}

export default TodoListItem;