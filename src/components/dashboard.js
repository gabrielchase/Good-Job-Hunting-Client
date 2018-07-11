import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

class Dashboard extends Component {
    render() {
        return(
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, {})(Dashboard)
