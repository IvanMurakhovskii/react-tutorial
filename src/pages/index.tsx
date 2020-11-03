import React from 'react';
import { NextPage } from "next";
import Todos from '@/modules/todo-page';
import { redirectIfNotAuth } from '@/utils/LogInUtil';

const TodosPage: NextPage = () => (
    <>
        <Todos/>
    </>
);

TodosPage.getInitialProps = async (context) => {
    redirectIfNotAuth(context);
    return {};
}

export default TodosPage;