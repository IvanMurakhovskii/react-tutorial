import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import OrderSelect from "./order-select";

export default {
  title: "OrderSelect",
  decorators: [withKnobs]
};

export const ordeSelect: React.FC = () => (
  <OrderSelect
    onOrderChange={action("order changed")} />
);
