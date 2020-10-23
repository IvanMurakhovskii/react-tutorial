import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    username: string
}

export const initialState: AuthState = {username : ''};

export const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        logout: () => {
            return initialState;    
        }
    }
});
