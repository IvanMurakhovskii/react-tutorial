import { logOut } from '@/utils';
import { actions } from '@storybook/addon-actions';
import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { auth, initialState } from './Authentification';
import { authSaga, loginUser, logoutUser } from './AuthentificationSaga';

const username = "test"

describe("Authentification reducer", () => {
  it("login add username to state", () => {
    expect(auth.reducer(initialState, auth.actions.login(username))).toEqual({ username: username });
  });
  it("logout", () => {
    expect(auth.reducer({ username: username }, auth.actions.logout)).toEqual(initialState);
  });
  it("expect saga - logout", () => {
    return expectSaga(logoutUser)
      .call(logOut)
      .run();
  });
});
