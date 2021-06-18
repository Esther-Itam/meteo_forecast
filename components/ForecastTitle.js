import React from 'react';
import { 
    View,
    Text, 
    Image, 
    StyleSheet, 
    TextInput,
    Dimensions
} from 'react-native';
import ForecastChosenCity from './ForecastChooseCity';
import moment from 'moment';

const ForecastTitle = ({city}) => {

    const locale=moment.locale('fr');
  const date= moment().format('ddd Do MMM');

    return(
        <View>
              <ForecastChosenCity  city = {city}/>
              <Text>
                 {date}
              </Text> 
          </View>
    );
}

export default ForecastTitle;