import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TodoListItem, { TodoListItemProps } from "../todo-list-item/todo-list-item";


export default {
    title: "TodoListItem",
    decorators: [withKnobs],
};

export const itemWithData: React.FC = () => (
    <TodoListItem
        label="todo"
        important={boolean('important', false)}
        done={boolean('done', false)}
        onDeleted={action("deleted")}
        onToggleDone={action("done")}
        onToggleImportant={action("impotrant")}
    />
);