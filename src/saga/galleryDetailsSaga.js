import { takeLatest, call, put } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData } from '../action/action';
import { fetchData } from '../api/api';

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* galleryDetailsSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
