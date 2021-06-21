import React from 'react';
import { StyleSheet, TextInput, View, SafeAreaView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


const ForecastForm = ({onChangeText, text, onSubmitEditing}) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
			<FontAwesome style={styles.searchIcon} name="search" size={34} color="gray" />
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
				placeholder="Rechercher une ville"
				onSubmitEditing={onSubmitEditing}
			/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container:{
        backgroundColor:'white',
        opacity:0.9,
        alignItems:'center',
        borderRadius: 12,
		flexDirection: 'row',
		top:68,
		left:20,
		width:336,
		height:80,
		opacity:0.9,
		shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.62,
        elevation: 7,
    },
	
	input: {
		width:224,
		height:40,
		margin:12,
		marginLeft:20,
        flex:3,
        fontFamily:'Montserrat',
        fontSize:20,
		fontWeight:'bold',

	},

	searchIcon:{
		marginLeft:20,
		height:37,
	}
        
});

    
export default ForecastForm;