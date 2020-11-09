import React from 'react';
import { mount } from "enzyme";
import Header from './header';


const props = {
    username: "test",
    isAuth: true
}

describe("Header", () => {
    const item = <Header {...props} />
    let wrapper = mount(item);

    it('heaeder shapshot test', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
