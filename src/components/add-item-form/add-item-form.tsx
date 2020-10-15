import React, { Component } from 'react';

import { Input, Button } from '@material-ui/core';
import styled from '@emotion/styled';

interface AddItemFormProps {
    addItem(label: string): void
}

interface AddItemFormState {
    label: string
}

const Container = styled.div`
    display: flex;
`;

const InputStyle = styled.div`
    flex: 4;
`;

const ButtonStyle = styled.div`
    flex: 1;
`;

type inputEvent = React.ChangeEvent<HTMLInputElement>;

export default class AddItemForm extends Component<AddItemFormProps, AddItemFormState> {

    constructor(props: AddItemFormProps) {
        super(props);

        this.state = { label: '' }
    }

    onSubmit = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();

        this.props.addItem(this.state.label);

        this.setState({ label: '' });
    }

    onLabelChange = (event: inputEvent) => {
        this.setState({ label: event.target.value });
    }

    render() {
        return (

            <form
                onSubmit={this.onSubmit}>
                <Container>
                    <InputStyle>
                        <Input
                            fullWidth={true}
                            margin={'dense'}
                            type="text"
                            onChange={this.onLabelChange}
                            placeholder="Add new task"
                            value={this.state.label} />
                    </InputStyle>
                    <ButtonStyle>
                        <Button fullWidth={true}
                            variant="contained"
                            color="primary"
                            size="small"
                            type="submit">
                            Add Item
                    </Button>
                    </ButtonStyle>
                </Container>
            </form>
        );
    }
}
