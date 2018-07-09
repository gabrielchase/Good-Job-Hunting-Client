import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Home page</p>
        <button onClick={() => props.gotoRegister()}>Register</button>
        <button onClick={() => props.gotoLogin()}>Login</button>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    gotoRegister: () => push('/register'),
    gotoLogin: () => push('/login')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)
