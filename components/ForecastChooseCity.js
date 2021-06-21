import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ForecastChooseCity= ({city}) => {

    return(
        <View>
            <Text style={styles.title}>
                {city}
            </Text>
        </View>
    );
    
 
}
const styles = StyleSheet.create({

    title:{
        fontSize:62,
        color:"white",
        fontWeight:'bold',
        
    },

})   
export default ForecastChooseCity;