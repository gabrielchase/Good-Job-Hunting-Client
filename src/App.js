import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from './components/home'
import Register from './components/register'
import Login from './components/login'

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </header>
        
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </main>
    </div>
)

export default App
