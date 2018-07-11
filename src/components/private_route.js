import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const PrivateRoute = (props) => (
    <Route {...props.routeProps} 
        render={
            () => (
                props.auth.is_authenticated ? (
                    <div>{props.children}</div>
                ) : (
                    <Redirect to='/login' /> 
                )
        )} 
    />
)


export default connect(mapStateToProps, {})(PrivateRoute)
