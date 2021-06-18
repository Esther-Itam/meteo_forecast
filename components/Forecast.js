import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Dimensions, SafeAreaView, styles, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';
import { fetchForecast, fetchLocation, updateValue, updateForecast } from '../actions/forecastAction';
import { bindActionCreators } from 'redux';

class Forecast extends Component {
	render() {
		return (      
		  <SafeAreaView>
			
			{this.props.forecast  && Object.keys(this.props.forecast).length === 0 ? 
			(
			<View>
				<ForecastForm 
					onChangeText={(text) => {this.props.updateValue(text)}}
					onSubmitEditing={(event)=>this.props.fetchForecast(event.nativeEvent.text)}
					text={this.props.text}
				/>
			</View>

        ) : (  
		<ScrollView>
			<View>
				<ForecastTitle  city={this.props.forecast.location.name} />
				<ForecastResult
					weatherIcon={this.props.forecast.current.weather_icons[0]}
					weatherDescriptions={this.props.forecast.current.weather_descriptions[0]}
					temperature={this.props.forecast.current.temperature}
					temperatureMin={this.props.forecast.current.temperature - 7}
					temperatureMax={this.props.forecast.current.temperature + 7}
					windSpeed={this.props.forecast.current.wind_speed}
					humidity={this.props.forecast.current.humidity}
				/>
			</View>
        </ScrollView>
        )}
      </SafeAreaView >
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
		dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Forecast);