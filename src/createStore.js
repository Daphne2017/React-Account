import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import reducer from './store/reducer';

export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function configureStore() {
  const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  return store;
}

export default configureStore();
