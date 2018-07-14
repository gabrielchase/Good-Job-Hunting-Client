import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchJobs } from '../actions/index'

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        jobs: state.jobs
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchJobs
}, dispatch)

class Dashboard extends Component {
    async componentWillMount() {
        await this.props.fetchJobs()
    }

    renderJobs() {
        const { jobs } = this.props
        return Object.keys(jobs).map(
                            (job_id) => {
                                return (
                                        <div key={job_id}> 
                                            <p>Id: {jobs[job_id]._id}</p>
                                            <p>Job: {jobs[job_id].company}</p>
                                            <p>Position: {jobs[job_id].position}</p>
                                        </div>
                                    )
                            })
    }

    render() {
        return(
            <div>
                <h1>Dashboard</h1>
                {this.renderJobs()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
