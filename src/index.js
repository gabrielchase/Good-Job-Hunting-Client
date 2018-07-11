import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard'
import PrivateRoute from './components/private_route'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/dashboard"><Dashboard /></PrivateRoute>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
