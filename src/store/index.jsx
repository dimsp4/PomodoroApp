import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import AppReducer from './reducers/AppReducer';
import TimeReducer from './reducers/TimeReducer';

const rootReducer = combineReducers({
  AppReducer,
  TimeReducer,
});
function* rootSaga() {
  yield all([]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
