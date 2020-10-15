import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TodoList from "./todo-list";
import OrderEnum from "../../emums/order-enum";


export default {
  title: "TodoList",
  decorators: [withKnobs]
};

const createTodoItem = (label: string) => {
  return {
    label,
    important: false,
    done: false,
    hidden: false,
    id: 1
  }
}

export const listWithData: React.FC = () => (
  <TodoList
    todos={object('todos', [{
      label: "todo",
      important: false,
      done: false,
      hidden: false,
      id: 1
    }])}
    order={OrderEnum.ASC}
    onDeleted={action("deleted")}
    onToggleDone={action("done")}
    onToggleImportant={action("impotrant")}
  />
);

export const listWithImportantData: React.FC = () => (
  <TodoList
    todos={object('todos', [{
      label: "todo",
      important: true,
      done: false,
      hidden: false,
      id: 1
    }])}
    order={OrderEnum.ASC}
    onDeleted={action("deleted")}
    onToggleDone={action("done")}
    onToggleImportant={action("impotrant")}
  />
);

export const listWithDoneData: React.FC = () => (
  <TodoList
    todos={object('todos', [{
      label: "todo",
      important: false,
      done: true,
      hidden: false,
      id: 1
    },
    {
      label: "todo 2",
      important: false,
      done: true,
      hidden: false,
      id: 2
    }])}
    order={OrderEnum.ASC}
    onDeleted={action("deleted")}
    onToggleDone={action("done")}
    onToggleImportant={action("impotrant")}
  />
);