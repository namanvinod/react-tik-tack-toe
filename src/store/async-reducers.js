import { put, takeEvery, all } from 'redux-saga/effects';

import { api } from '../core/api/api';

export function* logAsync() {
    yield console.log('Inside Log Async. It should be called only once');
}

export function* loginAsync({ payload }) {
    let isLoginSuccess = false;
    let loginError = '';
    yield api.post('/login', { userName: payload?.userName, password: payload?.password })
        .then(response => {
            console.log(response);
            if(response?.data?.token)
            localStorage.setItem('auth-token', response?.data?.token);   
            isLoginSuccess = true;
        })
        .catch(error => {
            console.log('Error', error);
            loginError =  error.response?.data;
            isLoginSuccess = false;
        });

    if(isLoginSuccess) yield put({ type: 'LOGIN' });    
    else yield put({ type: 'LOGIN_ERROR', payload: { loginError } });    
}

export function* loginAsyncWatch() {
    yield takeEvery('LOGIN_ASYNC', loginAsync);
}

export default function* reducers() {
    yield all([
        loginAsyncWatch(),
        logAsync()
    ]);
};