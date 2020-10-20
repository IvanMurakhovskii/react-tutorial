import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isUserLoggedIn } from './LogInUtil';

export interface PrivateRouteProps {
    redirectPath: string
    path: string
    component: React.ComponentType<any>
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
    return isUserLoggedIn() ? (<Route {...props} component={props.component} />)
        : (<Redirect to={{ pathname: props.redirectPath }} />)
}

export default PrivateRoute;