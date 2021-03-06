import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

/** Executes the async call to Coindesk via axios. */
function* fetchData() {
    const data = yield call([axios, axios.get], 'https://api.coindesk.com/v1/bpi/currentprice.json');
    // let stringifiedResponse = JSON.stringify(data);
    // stringifiedResponse = stringifiedResponse.replace(/"([^"]+)":/g,function($0,$1){return ('"'+$1.toLowerCase()+'":');});
    // const formattedData = JSON.parse(stringifiedResponse);
    yield put({ type: 'DATA_REQUEST_SUCCESSFUL' , payload: data })
}

/** Watches for data fetch requests. */
export default function* fetchDataWatcher() {
    yield takeEvery('FETCH_DATA', fetchData)
}