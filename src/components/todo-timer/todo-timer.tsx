import React, { Component } from 'react';

import { Button, IconButton } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import styled from '@emotion/styled';

interface TodoTimerState {
    seconds: number
}

export interface TodoTimerProps {
    seconds: number
}

const Container = styled.div`
    display: flex;
`;

const TimerContainer = styled.div`
    margin: auto;
    font-weight: bold;
`;

const ButtonContainer = styled.div`
    margin: auto;
`;


class TodoTimer extends Component<TodoTimerProps, TodoTimerState> {

    private intervalId: number | undefined;

    constructor(props: TodoTimerProps) {
        super(props);

        this.state = { seconds: this.props.seconds };
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }


    updateTimer = (): void => {
        this.setState((currentState) => {
            let s = currentState.seconds;
            return { seconds: --s };
        });

        if (this.state.seconds <= 0) clearInterval(this.intervalId);
    }

    increaseTimer = (): void => {
        let s = this.state.seconds;
        this.setState({ seconds: s + 60 });
    }

    decreaseTimer = (): void => {
        let s = this.state.seconds;
        let newSeconds = (s - 60) <= 0 ? 0 : (s - 60);
        this.setState({ seconds: newSeconds });
    }

    startTimer = (): void => {
        if (this.intervalId !== undefined) clearInterval(this.intervalId);
        this.intervalId = window.setInterval(this.updateTimer, 1000);
    }

    render() {
        const timerSeconds = this.state.seconds;

        var mimutes = Math.floor(timerSeconds / 60);
        var seconds = timerSeconds - (mimutes * 60);

        const time = (mimutes < 10 ? ("0" + mimutes) : mimutes) + ':' + (seconds < 10 ? ("0" + seconds) : seconds);

        return (
            <Container>

                <IconButton className="btn-decrease"
                    aria-label="delete"
                    color="primary"
                    onClick={this.decreaseTimer}>
                    <ArrowLeftIcon />
                </IconButton>


                <TimerContainer>
                    <span className="timer">{time}</span>
                </TimerContainer>

                <IconButton className="btn-increase"
                    aria-label="delete"
                    color="primary"
                    onClick={this.increaseTimer}>
                    <ArrowRightIcon />
                </IconButton>

                <ButtonContainer>
                    <Button className="btn-start"
                        variant="contained" size="small" color="inherit"
                        onClick={this.startTimer}>
                        Start
                    </Button>
                </ButtonContainer>
            </Container >
        );
    }

}

export default TodoTimer;