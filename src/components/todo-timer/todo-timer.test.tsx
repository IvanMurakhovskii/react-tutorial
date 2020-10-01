/**
 * @jest-environment jsdom
 */

import React, { Component } from "react";
import { mount, ReactWrapper, shallow } from "enzyme";
import TodoTimer from "./todo-timer";

const props = {
    seconds: 1500,
};


let wrapper: ReactWrapper;

beforeEach(() => wrapper = mount(<TodoTimer {...props} />));

describe("TodoTimer", () => {

    it("render item with data", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("increase timer", () => {
        wrapper.find(".btn-increase").first().simulate("click");
        expect(wrapper.state("seconds")).toEqual(1560);
    });

    it("decrease timer", () => {
        wrapper.find(".btn-decrease").first().simulate("click");
        expect(wrapper.state("seconds")).toEqual(1440);
    });
});
