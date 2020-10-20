/**
 * @jest-environment jsdom
*/

import React from 'react';
import { mount } from "enzyme";
import Header from './header';

const mockHistory = { push: jest.fn() };

jest.mock('react-router-dom', () => ({
    useHistory: () => mockHistory,
}));

const props = {
    username: "test",
    isAuth: true
}

const item = <Header {...props} />

const wrapper = mount(item);

describe("Header", () => {
    it('calls logout', () => {
        wrapper.find('button[type="button"]').simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith("/login");
    });
});