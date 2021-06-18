import React, { useState } from 'react';
import { ViewBase, Text, StyleSheet, TextInput, Button, View, SafeAreaView, TouchableOpacity } from 'react-native';

const ForecastForm = ({onChangeText, pressHandler, text}) => {


	return (
		<SafeAreaView>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
				placeholder="Rechercher une ville"
			/>
			<TouchableOpacity
        		onPress={pressHandler}
        		style={{ backgroundColor: 'blue' }}>
        		<Text style={{ fontSize: 20, color: '#fff' }}>Rechercher</Text>
      		</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
	},
});

export default ForecastForm;