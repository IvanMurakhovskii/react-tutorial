import React from 'react';
import { shallow } from "enzyme";
import TodoListItem, { TodoListItemProps } from './todo-list-item';

const onDeletedMock = jest.fn();
const onToggleDoneMock = jest.fn();
const onToggleImportantMock = jest.fn();

const props: TodoListItemProps = {
    label: "todo",
    important: true,
    done: false,
    onDeleted: onDeletedMock,
    onToggleDone: onToggleDoneMock,
    onToggleImportant: onToggleImportantMock
}

const item = <TodoListItem {...props} />

describe("TodoListItem", () => {
    const wrapper = shallow(item);

    it("render item with data", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("simulate click impotrant button", () => {
        wrapper.find('.btn-impotrant').simulate('click');
        expect(onToggleImportantMock).toHaveBeenCalled();
    });

    it("simulate click delete button", () => {
        wrapper.find('.btn-delete').simulate('click');
        expect(onDeletedMock).toHaveBeenCalled();
    });

});
