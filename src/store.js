import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import galleryDetailsSaga from './saga/galleryDetailsSaga';

const sagaMiddleware = createSagaMiddleware();
export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(galleryDetailsSaga);
