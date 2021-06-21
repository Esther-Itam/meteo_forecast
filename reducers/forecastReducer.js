import { UPDATE_FORECAST, TOGGLE_LOADER, SET_ERROR, UPDATE_VALUE, CLEAR_VALUE} from '../types';

let initialState = {
	forecast:{},
	loader: false,
	error: '',
	text:''
};

export const forecastReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_FORECAST:
			return {
				...state,
				forecast: action.forecast,
			};
		case TOGGLE_LOADER:
			return {
				...state,
				loader: action.status,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case UPDATE_VALUE:
			return{
				...state,
				text:action.text,
			};
		case CLEAR_VALUE:
			return{
				...state,
				text:action.text,
			};					
		default:
			return state;
	}
};