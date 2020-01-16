import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

let currentRates;

const getRates = axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => {
    console.log(res);
    let currentRates = res;
    });

function* fetchData() {
    try {
        const exchangeData = yield call(getRates);
        console.log(currentRates);
        yield put({type: 'DATA_REQUEST_SUCCESSFUL', currentRates});
    } catch (error) {
        console.log(error);
    }
}

function* rateSaga() {
    yield takeEvery('DATA_FETCH_REQUESTED', fetchData);
}

export default rateSaga;