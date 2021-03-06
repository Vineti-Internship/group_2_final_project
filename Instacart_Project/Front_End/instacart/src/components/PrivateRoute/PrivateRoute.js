import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...Component} {...props}/>
            : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    )} />
);

export default PrivateRoute;