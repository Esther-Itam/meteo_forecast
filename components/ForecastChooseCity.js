import React from 'react';
import { 
    View, 
    Image, 
    Text,
    StyleSheet, 
    TextInput,
    Dimensions
} from 'react-native';


const ForecastChooseCity= ({city}) => {

    return(
        <View>
            <Text>
                {city}
            </Text>
        </View>
    );
    
 
}

export default ForecastChooseCity;