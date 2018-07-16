import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

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

    newJobModal() {
        return (
            <Modal trigger={<Button>Show Modal</Button>}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
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
        return (
            <div>
                <h1>Dashboard</h1>
                {this.renderJobs()}
                {this.newJobModal()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
