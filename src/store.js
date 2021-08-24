import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { beerMiddleware } from './store/actions';
import { beerReducer } from './store/reducer';

export const store = createStore(beerReducer, composeWithDevTools(applyMiddleware(beerMiddleware)));