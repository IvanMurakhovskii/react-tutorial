import React from 'react';
import { shallow } from "enzyme";
import TodoTimer from './todo-timer';

const props = {
    seconds: 1500
}

const item = <TodoTimer {...props} />

const wrapper = shallow(item);

describe("TodoTimer", () => {
    it("render item with data", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('increase timer', () => {
        wrapper.find('.btn-increase').simulate('click');
        expect(wrapper.state("seconds")).toEqual(1560);
    });

    it('decrease timer', () => {
        wrapper.find('.btn-decrease').simulate('click');
        expect(wrapper.state("seconds")).toEqual(1500);
    });

});