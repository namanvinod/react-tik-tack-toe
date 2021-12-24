import { put, takeEvery, delay, all } from 'redux-saga/effects';

export function* logAsync() {
    yield console.log('Inside Log Async. It should be called only once');
}

export function* loginAsync() {
    yield delay(2000);
    yield put( { type: 'LOGIN', payload: 1 });    
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