import { auth } from './Authentification';
import { expectSaga } from "redux-saga-test-plan";
import { loginUser, logoutUser } from './AuthentificationSaga';
import { logIn, logOut } from '@/utils';

describe("Authentification saga", () => {
  it("login user", () => {
    const username = "test";
    expectSaga(loginUser, auth.actions.login(username)).call(logIn, username).run();
  });
  it("logout user", () => {
    expectSaga(logoutUser).call(logOut).run();
  });
})
