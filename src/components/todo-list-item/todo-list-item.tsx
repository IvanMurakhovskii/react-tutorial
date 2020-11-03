import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from '@emotion/styled';

export interface TodoListItemProps {
    label: string,
    done: boolean,
    important: boolean,
    deleteItem(): void,
    toggleImportant(): void,
    toggleDone(): void,
}

const LabelStyle = styled.div<TodoListItemProps>`
    text-decoration: ${(props) => props.done && 'line-through'};
    font-weight: ${(props) => props.important && 'bold'};
    color: ${(props) => props.important && 'steelblue'}; 
    flex: 4 1 auto;
    text-align: center;
    cursor: pointer;
    user-select: none;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: row;
    font-size: 1.2rem;
`;


const ButtonContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    flex: 1 1 25%;
    button {
        margin-right: 5px;
    }
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

        const { label, deleteItem, toggleDone, toggleImportant } = { ...this.props };

        return (
            <Container className="todo-list-item">
                <LabelStyle {...this.props}>
                    <span
                        onClick={toggleDone}>
                        {label}
                    </span>
                </LabelStyle>

                <ButtonContainer>
                    <Button className="btn-delete"
                        variant="contained" size="small" color="secondary"
                        onClick={deleteItem}>
                        Delete
                    </Button>

                    <Button className="btn-impotrant"
                        variant="contained" size="small" color="primary"
                        onClick={toggleImportant}>
                        Important
                    </Button>

                </ButtonContainer>
            </Container>
        );
    }
}

export default TodoListItem;