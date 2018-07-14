import axios from 'axios'
const _ = require('lodash')

const { API_URL } = require('../config/config')

export function getHeaders(jwt=false) {
    let headers = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const { token } = JSON.parse(localStorage.getItem('user_auth'))
    if (jwt) headers.headers['Authorization'] = `Bearer ${token}`
    return headers
}


export const registerUser = (user) => async dispatch => {
    const headers = getHeaders(false)
    const res = await axios.post(`${API_URL}/register`, user, headers)

    if (res.data.success) {
        await dispatch({
            type: 'REGISTER_USER_SUCCESS',
            payload: { email: res.data.data.email }
        })
        return { success: true }
    } else {
        dispatch({
            type: 'REGISTER_USER_FAIL',
            payload: res.data
        })
        return { success: false }
    }
}

export const loginUser = (user) => async dispatch => {
    const headers = getHeaders(false)
    const res = await axios.post(`${API_URL}/login`, user, headers)
    
    localStorage.setItem('user_auth', JSON.stringify(res.data.data))
    
    if (res.data.success) {
        await dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data.data
        })
        return { success: true }
    } else {
        dispatch({
            type: 'LOGIN_FAIL',
            payload: res.data
        })
        return { success: false }
    }
}

export const fetchJobs = () => async dispatch => {
    const headers = getHeaders(true)
    const { _id } = JSON.parse(localStorage.getItem('user_auth'))
    const res = await axios.get(`${API_URL}/user/${_id}/jobs`, headers)
    const jobs = _.keyBy(res.data.data, '_id')

    if (res.data.success) {
        await dispatch({
            type: 'GET_JOBS_SUCCESS',
            payload: jobs
        })
        return { success: true }
    } else {
        dispatch({
            type: 'GET_JOBS_FAIL',
            payload: res.data
        })
        return { success: false }
    }
}
