import { logIn, logOut } from "@/utils";
import { call, takeEvery } from "redux-saga/effects";
import { auth } from "./Authentification";


export function* logoutUser() {
    yield call(logOut);
}

export function* loginUser({ payload }: ReturnType<typeof auth.actions.login>) {
    const username = String(payload);
    yield call(logIn, username);
}

export function* authSaga() {
    yield takeEvery(auth.actions.login.type, loginUser)
    yield takeEvery(auth.actions.logout.type, logoutUser);
}
