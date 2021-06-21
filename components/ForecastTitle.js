import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ForecastChosenCity from './ForecastChooseCity';
import moment from 'moment';

const ForecastTitle = ({city}) => {

    const locale=moment.locale('fr');
  const date= moment().format('ddd Do MMM');

    return(
        <View style={styles.container}>
              <ForecastChosenCity  
                
                city = {city}/>
              <Text style={styles.date}>
                 {date}
              </Text> 
          </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:336,
        height:103,
        marginTop:39,
        marginLeft:20,
        marginBottom:80,
        textAlign:'center',
    },
    date:{
        fontFamily:'Montserrat',
        fontSize:22,
        color:"white",
        fontWeight:'regular'
    }

});    
export default ForecastTitle;