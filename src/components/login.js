import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { loginUser } from '../actions/index'

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser,
    gotoDashboard: () => push('/dashboard')
}, dispatch)

class Login extends Component { 
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.auth.email) 
            this.setState({ email: this.props.auth.email }) 
    }

    
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }
    
    async handleSubmit(e) {
        e.preventDefault()
        
        const { email, password } = this.state
        const res = await this.props.loginUser({ email, password })
        
        if (res.success) {
            console.log(this.props.auth)
            this.props.gotoDashboard()
        }
        else 
            this.setState({ error: this.props.auth.message })
        
    }

    render() {
        const { email, password, error } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <p>{error}</p>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        )
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Login)
