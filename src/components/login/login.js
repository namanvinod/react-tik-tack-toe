import './login.css';

import { useEffect, useRef } from 'react';

import { api } from '../../core/api/api';
import { useDispatch } from 'react-redux';

export default () => {
    const userNameRef = useRef('');
    const passwordRef = useRef('');
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('1')
    //     userNameRef.current.value = '';
    // }, []);

    const handleLogin = () => {
        dispatch({ type: 'LOGIN_ASYNC', payload: { userName: userNameRef.current.value, password: passwordRef.current.value } });
    };

    const handleRegister = () => {
        api.post('/register', { userName: userNameRef.current.value, password: passwordRef.current.value })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log('Error', error);
        });
    };

    return (
        <div className="login-container">
            <div className='login-section'>
                <label htmlFor='userName'>User Name</label>
                <input type="text" ref={userNameRef} />
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