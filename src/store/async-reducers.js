import { put, takeEvery, delay, all, call } from 'redux-saga/effects';

export function* logAsync() {
    console.log('Inside Log Async', yield);
}

export function* loginAsync() {
    yield delay(2000);
    yield put( { type: 'LOGIN', payload: 1 });    
} 

export function* loginAsyncWatch() {
    console.log('Inside loginAsync Watch');
    yield takeEvery('LOGIN_ASYNC', loginAsync);
}

export default function* reducers() {
    yield all([
        loginAsyncWatch(),
        logAsync()
    ]);
};