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
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	fullscreen: {
		backgroundColor: 'white',
		flex: 1
	},
	header: {
		backgroundColor: 'white',
		padding: 10,
		flex: 1,
		flexDirection: 'row',
		shadowColor: '#000000',
		justifyContent: 'center',
		shadowOpacity: 1,
		shadowRadius: 2,
		shadowOffset: {
			height: 4,
			width: 0
		}
	},
	header_item: {
		paddingLeft: 10,
		paddingRight: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	header_text: {
		color: '#000',
		fontWeight: 'bold',
		justifyContent: 'center',
		fontSize: 18
	},
	leftHeader: {
		position: 'absolute',
		width: 50,
		borderWidth: 0,
		top: 15,
		left: -125,
	},
	rightHeader: {
		position: 'absolute',
		width: 50,
		borderWidth: 0,
		top: 15,
		right: -125,
	},
	listBody: {
		flex: 9
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
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	mapHeader: {
		flex: 1,
		position:'absolute',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1000,
		height: 60,
		backgroundColor: 'white'
	},
	paddedContainer: {
		paddingTop: 50,
		paddingBottom: 50
	}
});

module.exports = styles;