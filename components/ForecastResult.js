import { StyleSheet, Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import wind_logo from '../assets/Wind.svg';
import splash_logo from '../assets/Cloud-Rain-Sun-Alt.svg';


class ForecastResult extends Component {

render(){
    return (
    <View style={styles.container}>
         <View style={styles.weatherDescriptionsAndIcon}>
            <Image style={styles.logo} source={{ uri: this.props.weatherIcon }}/>
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
        <View style={styles.allWindSeedAndHumidity}>
            <View style={styles.windIconAndWindSeed}>
                <Image style={styles.wind_logo} source={wind_logo}/>
                <Text style={styles.windSeedAndHumidity}>{this.props.windSpeed}km/h</Text>
            </View>
            <View style={styles.humidityIconAndhumidity}>
                <Image style={styles.splash_logo} source={splash_logo}/>
                <Image style={styles.splash_logo2} source={splash_logo}/>

                <Text style={styles.windSeedAndHumidity}>{this.props.humidity}%</Text>
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
        borderRadius: 12,
        width:336,
        height:293,
        left:20,

    },
    logo: {
        width:95,
        height:95,
        borderRadius:50
      },

      weatherDescriptionsAndIcon:{
        flexDirection:'row',
        alignItems:'center',
        left:53,
        top:28,
        marginBottom:28,
    },
      weatherDescriptions:{
          marginLeft:23,
          width:123,
          height:54,
          color: '#404491',
          opacity: 1,
          fontSize: 22,
          fontWeight:'bold',
          textAlign:'left',
          fontFamily:'Montserrat',
      },
      temperatureAll:{
            flexDirection: 'row',
            alignItems:'center',
            left:24,
            top:18,
            marginBottom:12,
           
      },
      temperatureCelsius:{
        fontSize: 64,
        color: '#404491',
        fontWeight:'bold',
        fontFamily:'Montserrat',
        
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
      allWindSeedAndHumidity:{
        backgroundColor: '#404491',
        borderRadius: 12,
        top:31,
        left:20,
        height:70,
        width: 296,
        opacity:1,
        flexDirection:'row',
        justifyContent:'space-around',
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
      windIconAndWindSeed:{
        flexDirection:'row',
        alignItems: 'center',
      },
      wind_logo:{
            height: 28,
            width: 44,

      },
      humidityIconAndhumidity:{
            flexDirection: 'row',
            alignItems: 'center',
      },
      splash_logo:{
        height: 21,
        width: 18,
      },
      splash_logo2:{
        height: 15,
        width: 13,
        top:10
      },
      windSeedAndHumidity:{
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight:'bold',
        alignItems: 'center',
        marginLeft:10,
        fontFamily:'Montserrat',
      },
})