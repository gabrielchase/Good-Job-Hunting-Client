import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Checkbox,  Form, Modal, TextArea } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'

import { fetchJobs } from '../actions/index'
import CountryDropdown from './country_dropdown'


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
    constructor() {
        super()

        this.state = {
            company: '',
            position: '',
            country: '',
            city: '',
            due_date: '',
            priority: true,
            notes: '',
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentWillMount() {
        await this.props.fetchJobs()
    }

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
    }

    newJobModal() {
        return (
            <Modal trigger={<Button>Show Modal</Button>}>
                <Modal.Header>Add Job</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Company' placeholder='Company' onChange={this.handleChange} />
                            <Form.Input fluid label='Position' placeholder='Position' onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Country</label>
                                <CountryDropdown />
                            </Form.Field>
                            <Form.Input fluid label='City' placeholder='City' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input fluid label='Currency' placeholder='Currency' width={4} onChange={this.handleChange} />
                            <Form.Input fluid label='Salary' placeholder='Salary' width={12} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Field>
                            <label>Due Date</label>
                            <DateInput 
                                name="due_date"
                                placeholder="Due Date" 
                                value={this.state.due_date}
                                onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Group width='equal'>
                            <label style={{paddingLeft: 8 + 'px', paddingRight: 10 + 'px'}}><strong>Priority</strong></label>
                            <Checkbox />
                        </Form.Group>
                        <Form.Field>
                            <label>Notes</label>
                            <TextArea placeholder='Other job details' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
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
