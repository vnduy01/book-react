import React            from 'react';
import DefaultLayout    from './Layout';
import {Redirect}       from 'react-router-dom';

import HomePage              from './Containers/Home';

export default [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => <Redirect to="/home" />
    },
    {
        path: "/",
        layout: DefaultLayout,
        component: () => <HomePage />
    }
]