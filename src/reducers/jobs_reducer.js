export default (state={}, action) => {
    switch(action.type) {
        case 'GET_JOBS_SUCCESS':
            return action.payload
        case 'GET_JOBS_FAIL':
            return action.payload
        default: 
            return state
    }
}
