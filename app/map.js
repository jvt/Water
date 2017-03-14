import React, {Component} from 'react';
import {
	AsyncStorage,
	View,
	Alert,
	Image,
	Navigator,
	Text,
	TextInput,
	ScrollView,
	StyleSheet
} from 'react-native';

import styles from './styles';
import MapView from 'react-native-maps';

export class Map extends Component {
	constructor(props) {
		super(props);

		this.state = {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}
		};
	}

	onRegionChange(region) {
		this.setState({ region });
	}

	render() {
		const _navigateBack = () => {
			this.props.navigator.pop();	
		}

		return (
			<View style={[styles.fullscreen, styles.greyBackground]}>
				<MapView
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					styles={styles.absolute}
				/>
			</View>
		)
	}
}
module.exports = Map;
