import React, { Component } from 'react';
import { Provider } from "react-redux";

import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Todos from "./index";
import { TodoState } from '@/modules/todo-page/slice'
import { mount, ReactWrapper } from "enzyme";
import OrderEnum from '@/emums/order-enum';

const mockStore = configureStore();

export const initialState: TodoState = {
    todoData: [],
    order: OrderEnum.ASC,
    username: 'username'
};

describe("todo-page", () => {
    let store: MockStoreEnhanced<unknown, {}>;
    let wrapper: ReactWrapper<TodoState, Readonly<{}>, Component<{}, {}, TodoState>>;

    beforeEach(() => {
        store = mockStore(initialState);

        store.dispatch = jest.fn();

        wrapper = mount(
            <Provider store={store}>
                <Todos />
            </Provider>
        );

    });

    it('should render with given state from Redux store', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should dispatch an action when component did mount', () => {
        expect(store.dispatch).toHaveBeenCalledTimes(2);
    });
});