import React from 'react';
import { shallow } from "enzyme";
import OrderSelect from './order-select';

const mockMyEventHandler = jest.fn()

const item = <OrderSelect onOrderChange={mockMyEventHandler} />

const wrapper = shallow(item);

describe("OrderSelect", () => {
    it("render item with data", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("simulate dropdown list change", () => {
        wrapper.find('.order-select').simulate('change', { target: { value: 'ASC' } });
        expect(mockMyEventHandler).toHaveBeenCalledWith('ASC');
    });

});