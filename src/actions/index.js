import axios from 'axios'

const { API_URL } = require('../config/config')

export function getHeaders(jwt=false) {
    let headers = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    if (jwt) headers.headers['Authorization '] = `JWT ${localStorage.getItem('jwt')}`
    return headers
}


export const registerUser = (user) => async dispatch => {
    const headers = getHeaders(false)
    const res = await axios.post(`${API_URL}/register`, user, headers)

    if (res.data.success) {
        await dispatch({
            type: 'REGISTER_USER_SUCCESS',
            payload: res.data
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