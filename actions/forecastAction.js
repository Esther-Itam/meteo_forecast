import { SET_ERROR, UPDATE_FORECAST, TOGGLE_LOADER, UPDATE_VALUE, CLEAR_VALUE } from '../types';


export const updateForecast = forecast => {
	return {
		type: UPDATE_FORECAST,
		forecast: forecast,
	};
};

export const toggleLoader = status => {
	return {
		type: TOGGLE_LOADER,
		loader: status,
	};
};

export const setError = error => {
	return {
		type: SET_ERROR,
		payload: error,
	};
};

export const updateValue=text=>{
	return{
		type: UPDATE_VALUE,
		text:text,
	};
}

export const clearValue = () => ({
    type: CLEAR_VALUE,
    text: ''
  });

const onError=() => {}
const onSuccess=() => {}

console.log('forecastAction')

export const fetchForecast = (city) => {
    return async dispatch => {
        dispatch(toggleLoader(true));
       
		try {
			
			const res = await fetch ('http://api.weatherstack.com/current?access_key=06e5cd6e82b1724d519965783e0a6fd7&query='+city);
			if (!res.ok) {
				const forecast = await res.json();
				throw new Error(forecast.message);
			}

			const forecast = await res.json();
			dispatch(updateForecast(forecast));
			onSuccess();

			/* dispatch(toggleLoader(false)); */
		} catch (error) {
			dispatch(setError(error.message));
			onError();
			dispatch(toggleLoader(false));
		}
		dispatch(clearValue());
    }
};
