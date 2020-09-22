/**
 * @jest-environment jsdom
*/

import React from 'react';
import { mount } from "enzyme";
import AddItemForm from './add-item-form';

const mockMyEventHandler = jest.fn();

const props = {
    addItem: mockMyEventHandler
}

const item = <AddItemForm {...props} />

const wrapper = mount(item);

describe("AddItemForm", () => {
    it("render item with data", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('calls onSubmit function have been called once', () => {
        wrapper.find(AddItemForm).simulate('submit');
        expect(mockMyEventHandler).toHaveBeenCalledTimes(1);
    });

});