import { PrivateRoute } from '@/utils';
import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from '@/modules/login-form';
import TodoPage from '@/modules/todo-page';


const App: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginForm} />
                <PrivateRoute redirectPath="/login" path="/" component={TodoPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;