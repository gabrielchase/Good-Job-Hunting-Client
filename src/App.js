import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

class App extends Component {
    render() {
        return(
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </header>
            </div>
        )
    }
}

export default connect(mapStateToProps, {})(App)

