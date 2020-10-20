import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import Header from "./header";


export default {
    title: "Header",
    decorators: [withKnobs],
};

export const header: React.FC = () => (
    <Header
        username={text('username', "username")}
        isAuth={boolean('isAuth', true)}
    />
);