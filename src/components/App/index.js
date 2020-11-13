import React, { useEffect, useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../../utils/history'
import { Provider } from 'react-redux';

import NavBar from '../NavBar'
import HomeView from '../../views/home/Home.container'
import CustomerView from '../../views/customers/Customer.container'

import store from '../../store'

const App = () => {
    return (
        <Provider store={store}>
            <NavBar />
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/customers" component={CustomerView} />
                    <Redirect from="/home" to="/" />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;