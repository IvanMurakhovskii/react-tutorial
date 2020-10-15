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

const LabelStyle = styled.div<TodoListItemProps>`
    text-decoration: ${(props) => props.done && 'line-through'};
    font-weight: ${(props) => props.important && 'bold'};
    color: ${(props) => props.important && 'steelblue'}; 
    flex: 60%;
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
    flex: 100%;
`;

class TodoListItem extends Component<TodoListItemProps, {}> {

    shouldComponentUpdate(nextProps: TodoListItemProps) {
        const { done, important, label } = { ...this.props };
        const nextDone = nextProps.done;
        const nextImportant = nextProps.important;
        const nextLabel = nextProps.label;

        return done !== nextDone || important !== nextImportant || label !== nextLabel;
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

                </ButtonContainer>
                <TimerContainer>
                    <TodoTimer seconds={25 * 60} />
                </TimerContainer>
            </Container>
        );
    }
}

export default TodoListItem;