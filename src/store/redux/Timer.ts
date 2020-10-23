import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type  TimerType =  {
    seconds: number
}

export const initialState: TimerType = {seconds : 24 * 60};

export const timer = createSlice({
    name: "timer",
    initialState: initialState,
    reducers: {
        increaseTimer: (state) => {
            state.seconds += 60;
        },
        decreaseTimer: (state) => {
            state.seconds -= 60;
        },
        updateTimer: (state) => {
            state.seconds -= 1;
        },
    }
});
