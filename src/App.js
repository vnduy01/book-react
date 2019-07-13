import React, {Component}       from 'react';
import {Router, Route}          from "react-router-dom";
import routes                   from './router';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class App extends Component {

    render() {
        return (
            <Router history={history}>
                {routes.map((route, index) => {
                    return <Route key={index} path={route.path} exact={route.exact} component={ props => {
                        return (
                            <route.layout {...props}>
                                <route.component {...props} />
                            </route.layout>
                        )
                    }} />
                })}
            </Router>
        );
    }
}

export default App;