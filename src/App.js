import React, { Component } from 'react'
import { connect } from 'react-redux'

import { simpleAction } from './actions/SimpleAction'

import './App.css'

class App extends Component {
    simpleAction = (e) => {
        this.props.simpleAction()
    }

    render() {
        return (
            <div className="App">
                <pre>
                    {JSON.stringify(this.props)}
                </pre>
                Good Job Hunting
                <button onClick={this.props.simpleAction}>Test Redux Action</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})


export default connect(mapStateToProps, { simpleAction })(App)
