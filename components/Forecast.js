import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';
import { fetchForecast, updateValue, updateForecast, clearForecast } from '../actions/forecastAction';
import { bindActionCreators } from 'redux';
import background from '../assets/background.png';
import background_accueil from '../assets/background_accueil.webp'
import moment from 'moment';

class Forecast extends Component {
	
	render() {
		const locale=moment.locale('fr');
		const date= moment().format('ddd Do MMM');
		console.log(this.props.forecast)

		return ( 
		(!this.props.loader) ?
		  <SafeAreaView>
			
			{this.props.forecast  && Object.keys(this.props.forecast).length === 0 ? 
			(
			<View style={styles.container}>
				<ImageBackground 
					source={background_accueil}  
					style={styles.container}
				>
				<View style={styles.containerForm}>
					<Text style={styles.date}>{date}</Text>
					<Text style={styles.title}>Veuillez entrer une destination</Text>
					<ForecastForm 
						onChangeText={(text) => {this.props.updateValue(text)}}
						onSubmitEditing={(event)=>this.props.fetchForecast(event.nativeEvent.text)}
						text={this.props.text}
					/>
				</View>
				</ImageBackground>
			</View>

        ) : (  
		<ScrollView>
			<View style={styles.container}>
				<ImageBackground source={background} style={styles.container}>
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
				<ForecastForm 
					onChangeText={(text) => {this.props.updateValue(text)}}
					onSubmitEditing={(event)=>this.props.fetchForecast(event.nativeEvent.text)}
					text={this.props.text}
				/>
				</ImageBackground>
			</View>
        </ScrollView>
        )}
      </SafeAreaView >
	  :
	  <SafeAreaView>
	  	<ActivityIndicator size="large" color="#00ff00" />
	  	<Text>Chargement en cours</Text>
	  </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
	title: {
		color: 'gray',
		fontSize:30,
		fontWeight:"bold",
		padding:5,
		textAlign:'center',
		fontFamily:'Montserrat',

	},
	container:{
		height:812,
		width:390,
		opacity:1,
		
	},
	containerForm:{
		marginTop:60,
		alignItems:'center',
	},
	date:{
		color:'#404491',
		fontSize:30,
		fontWeight:"bold",
		paddingBottom:140,
		textAlign:'center',
		fontFamily:'Montserrat',
	}

});

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
			updateForecast,
			clearForecast
			
		},
		dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Forecast);