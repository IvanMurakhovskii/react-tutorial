import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import AddItemForm from ".";

export default {
  title: "AddItemForm",
  decorators: [withKnobs]
};

export const addItemForm: React.FC = () => (
  <AddItemForm
    addItem={action("add Item")} />
);
