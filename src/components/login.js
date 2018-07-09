import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

class Login extends Component { 
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.auth.data) 
            this.setState({ email: this.props.auth.data.email}) 
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        const { email, password, error } = this.state
        return (
            <div>
                <h1>Login</h1>
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
            </div>
        )
    }
}
    
export default connect(mapStateToProps)(Login)

