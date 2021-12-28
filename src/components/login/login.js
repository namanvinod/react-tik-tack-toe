import './login.css';

import { useRef } from 'react';

export default () => {
    const userNameRef = useRef('');
    const passwordRef = useRef('');

    const handleLogin = () => {
        console.log(userNameRef.current, passwordRef);
    }

    const handleRegister = () => {
        console.log(userNameRef.current.value, passwordRef);
    }

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