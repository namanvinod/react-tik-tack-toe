import './login.css';

import { useRef } from 'react';

import { api } from '../../core/api/api';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const userNameRef = useRef('');
    const passwordRef = useRef('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        console.log('Handle Login1', userNameRef.current, userNameRef.current.value);
        console.log('Handle Login2', userNameRef.current);
        dispatch({ type: 'LOGIN_ASYNC', payload: { userName: userNameRef.current.value || 'Test', password: passwordRef.current.value || 'Test1' } });
    };

    const handleRegister = () => {
        api.post('/register', { userName: userNameRef.current.value, password: passwordRef.current.value })
        .then(response => {
            console.log('Register Log', response);
        })
        .catch(error => {
            console.log('Error', error);
        });
    };

    const state = useSelector(state => state);
    console.log('Login State1', state)
    return (
        <div className="login-container">
            <div className='login-section'>
                <label htmlFor='userName'>User Name</label>
                <input type="text" onChange={(event) => {}} ref={userNameRef} />
            </div>
            <div className='login-section'>
                <label htmlFor='password'>Password</label>
                <input type="password" ref={passwordRef} />
            </div>
            <button onClick={handleLogin}>
                Login
            </button>
            <button onClick={handleRegister}>
                Register
            </button>
        </div>
    );
};

export default Login;