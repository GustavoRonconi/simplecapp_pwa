// import React from 'react';
// import { Route, Redirect } from 'react-router-dom'
import { isLogged } from '../auth/auth'
import { LOGIN } from './routes'
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


export default function PrivateRoute () {
    const auth = null; 
    return auth ? <Outlet /> : <Navigate to={LOGIN} />;
}