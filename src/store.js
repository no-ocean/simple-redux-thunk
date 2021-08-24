import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { beerReducer } from './store/reducer';
import thunk from "redux-thunk";

export const store = createStore(beerReducer, composeWithDevTools(applyMiddleware(thunk)));