const sessionReducer = (state = { loggedIn: false, loginError: '' }, action) => {
    switch(action.type) {
        case 'LOGIN': {
            return {
                ...state,
                loginError: '',
                loggedIn: true
            };
        }
        case 'LOGOUT': {
            localStorage.setItem('auth-token', '');
            return {
                ...state,
                loggedIn: false
            };
        }
        case 'LOGIN_ERROR': {
            return {
                ...state,
                loginError: action.payload?.loginError
            };
        }
        case 'LOGIN_ERROR_RESET': {
            return {
                ...state,
                loginError: ''
            };
        }
        default: return { ...state };
    };
};

export default sessionReducer;