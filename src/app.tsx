import { PrivateRoute } from '@/utils';
import { Provider } from "react-redux";
import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from '@/modules/login-form';
import Todos from '@/modules/todo-page';
import { store } from '@/store/store';


const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <PrivateRoute redirectPath="/login" path="/" component={Todos} />
                </Switch>
            </BrowserRouter>
        </Provider >
    );
};

export default App;