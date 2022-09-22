import React, { useState } from 'react'
import { useEffect } from 'react';
import { Router, Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import { authRoutes, publicRoutes } from '../utils';

function AppRouter() {
    const [isLoggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(localStorage.getItem('token') ? true : false)
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                {
                    !isLoggedIn ?
                        publicRoutes.map((route) => (
                            <Route key={route.path} path={route.path} component={route.Component} exact />
                        ))
                        :
                        authRoutes.map((route) => (
                            <Route key={route.path} path={route.path} component={route.Component} exact />
                        ))
                }
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter