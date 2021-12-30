import { put, takeEvery, delay, all } from 'redux-saga/effects';

import { api } from '../core/api/api';

export function* logAsync() {
    yield console.log('Inside Log Async. It should be called only once');
}

export function* loginAsync({ payload }) {
    let isLoginSuccess = false;
    yield api.post('/login', { userName: payload?.userName, password: payload?.password })
        .then(response => {
            console.log(response);
            isLoginSuccess = true;
        })
        .catch(error => {
            console.log('Error', error);
        });

    if(isLoginSuccess) yield put({ type: 'LOGIN' });    
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