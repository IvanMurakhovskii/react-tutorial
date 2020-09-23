import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import TodoTimer from "./todo-timer";


export default {
    title: "TodoTimer",
    decorators: [withKnobs],
};

export const todoTimer: React.FC = () => (
    <TodoTimer seconds={number('seconds', 1500)} />
);