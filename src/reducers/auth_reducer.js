export default (state={}, action) => {
    switch(action.type) {
        case 'REGISTER_USER_SUCCESS':
            return action.payload
        case 'REGISTER_USER_FAIL':
            return action.payload
        default: 
            return state
    }
}