import {auth, initialState} from './Authentification';

const username = "test"

describe("Authentification reducer", () => {
    it("login add username to state", () => {
      expect(auth.reducer(initialState, auth.actions.login(username))).toEqual({ username: username });
    });
    it("logout", () => {
      expect(auth.reducer({ username: username }, auth.actions.logout)).toEqual(initialState);
    });
  });
