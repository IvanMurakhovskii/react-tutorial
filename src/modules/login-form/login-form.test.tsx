import React from 'react';
import { mount } from "enzyme";
import LoginForm from './login-form';

const item = <LoginForm />

const wrapper = mount(item);

describe("LoginForm", () => {
    it("render item with data", () => {
        expect(wrapper).toMatchSnapshot();
    });
});