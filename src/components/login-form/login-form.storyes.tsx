import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import LoginForm from ".";

export default {
    title: "LoginForm",
    decorators: [withKnobs]
};

export const loginForm: React.FC = () => (
    <LoginForm />
);