import React, {Component} from 'react';
import {
	StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	fullscreen: {
		backgroundColor: 'white',
		flex: 1
	},
	greyBackground: {
		backgroundColor: 'rgba(240, 240, 240, 1)'
	},
	card: {
		backgroundColor: 'white',
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
		margin: 10,
		padding: 15,
		borderRadius: 2,
		shadowColor: '#000000',
	    shadowOpacity: 0.1,
		shadowRadius: 2,
		shadowOffset: {
			height: 4,
			width: 0
		}
	},
	paddedContainer: {
		paddingTop: 50,
		paddingBottom: 50
	}
});

module.exports = styles;