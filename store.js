import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { forecastReducer } from './reducers/forecastReducer';

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

let store = createStore(forecastReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;