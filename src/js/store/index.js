import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware/index';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../sagas/api-saga';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
  )
);

// store.subscribe(() => console.log('mahn, redux phew'));

// store.dispatch(addArticle({ TITLE: 'learning redux for beginner', id: 1 }));

initialiseSagaMiddleware.run(apiSaga);
export default store;
