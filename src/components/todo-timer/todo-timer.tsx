import React, { FC } from 'react';

interface TodoTimerProps {
    timerSeconds: number
}


const TodoTimer: FC<TodoTimerProps> = ({ timerSeconds }) => {

    var mimutes = Math.floor(timerSeconds / 60);
    var seconds = timerSeconds - (mimutes * 60);


    const time = (mimutes < 10 ? ("0" + mimutes) : mimutes) + ':' + (seconds < 10 ? ("0" + seconds) : seconds);

    return (
        <h3 className="timer">{time}</h3>
    );

}

export default TodoTimer;