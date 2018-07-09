import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { registerUser } from '../actions/index'

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    registerUser,
    gotoLogin: () => push('/login')
}, dispatch)

class RegisterUser extends Component {
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

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        
        const { email, password } = this.state
        const res = await this.props.registerUser({ email, password})
        
        if (res.success) {
            this.props.gotoLogin()
        }
        else {
            this.setState({ error: this.props.auth.message })
        }
    }

    render() {
        const { email, password, error } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
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
                <button type="submit">Register</button>
            </form>
        )
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)
