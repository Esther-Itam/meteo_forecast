import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native';
import React, { Component } from 'react';


class ForecastResult extends Component {

render(){
    return (
    <View style={styles.container}>
        <View style={styles.weatherDescriptionsAndIcon}>
            <Image style={styles.logo} source={{ uri: this.props.weatherIcon }}></Image>
            <Text style={styles.weatherDescriptions}>{this.props.weatherDescriptions}</Text>
        </View>
        <View style={styles.temperatureAll}>
            <Text style={styles.temperatureCelsius}> {this.props.temperature}°C</Text>
                <View style={styles.temperatureAllMaxAndMin}>
                    <Text style={styles.temperatureMinAndMax}>min {this.props.temperatureMin}°C</Text>
                    <View style={styles.temperatureBorder }></View>
                    <Text style={styles.temperatureMinAndMax}>max {this.props.temperatureMax}°C</Text>
                </View>
        </View>
        <View style={styles.CardAllWindSeedAndHumidity}>
            <View style={styles.windIconAndWindSeed}>
         
                <Text style={styles.windSeedAndHumidity}>{this.props.windSpeed} km/h</Text>
            </View>
            <View style={styles.humidityIconAndhumidity}>
        
                <Text style={styles.windSeedAndHumidity}>{this.props.humidity} %</Text>
            </View>
        </View>
    </View>
    )
}
}
export default ForecastResult

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        opacity:0.9,
        alignItems:'center',
        borderRadius: 12,
        margin:50,
    },
    logo: {
        marginTop: 29,
        width: 100,
        height: 100,
      },
      weatherDescriptionsAndIcon:{
          flexDirection:'row',
          alignItems:'center',
          padding: 15,
      },
      weatherDescriptions:{
          padding: 15,
          color: '#404491',
          opacity: 100,
          fontSize: 22,
          fontWeight:'bold'
      },
      temperatureAll:{
            flexDirection: 'row',
            alignItems:'center',
      },
      temperatureCelsius:{
        fontSize: 64,
        color: '#404491',
        fontWeight:'bold',
      },
      temperatureAllMaxAndMin:{
          flexDirection:'column',
          padding: 20,
      },
      temperatureMinAndMax:{
        color:'#707070',
        fontSize: 18,
        fontWeight:'bold',
      },
      temperatureBorder:{
          borderTopWidth:2,
         borderTopColor: '#707070',
         marginTop: 4,
         marginBottom: 1,
      },
      CardAllWindSeedAndHumidity:{
        backgroundColor: '#404491',
        borderRadius: 12,
        height: 'auto',
        width: 250,
        opacity:1,
        marginBottom:-20,
        flexDirection:'row',
        padding:10,
        justifyContent:'space-around',
      },
      windIconAndWindSeed:{
        flexDirection:'row',
        alignItems: 'center',
        

      },
      windIcon:{
            height: 35,
            width: 50,
            maxWidth:'auto',
            resizeMode: 'stretch',
            alignItems: 'center',
      },
      humidityIconAndhumidity:{
            flexDirection: 'row',
            alignItems: 'center',
      },
      humidityIcon:{
        height: 30,
        width: 30,
        maxWidth:'auto',
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      windSeedAndHumidity:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight:'bold',
        alignItems: 'center',
        marginLeft:10,

      },
})