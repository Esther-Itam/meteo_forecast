import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';
import { fetchForecast, fetchLocation, updateValue, updateForecast } from '../actions/forecastAction';
import { bindActionCreators } from 'redux';

class Forecast extends Component {
	render() {
		console.log(this.props.forecast);
		return (
			<View>
				<ForecastTitle />
				<ForecastResult />
				<ForecastForm 
					onChangeText={(text) => this.props.updateValue(text)}
					pressHandler={(event)=>this.props.fetchForecast(event.nativeEvent.text)}
					text={this.props.text}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	forecast: 	state.forecast,
	loader: 	state.loader,
	error: 		state.payload,
	text:		state.text
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			fetchForecast,
			updateValue,
			updateForecast
		},
		dispatch,
	);
};
export default connect(mapStateToProps, mapDispatchToProps)(Forecast);