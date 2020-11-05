import { expectSaga } from "redux-saga-test-plan";
import { getUsername } from ".";
import { isUserAuth, isUserLoggedIn } from "./LogInUtil";

describe("Todos reducer", () => {
    it("isUserAuth with empty username should return false", () => {
        expect(isUserAuth("")).toBeFalsy();
    });

    it("isUserLoggedIn with username should return true", () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: 'username=test',
        });
        expect(isUserLoggedIn()).toBeTruthy();
    });

    it("getUsername should return username", () => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: 'username=test',
        });
        expect(getUsername('username=test')).toEqual("test");
    });
});