import React, {Component} from 'react';
import {
	AsyncStorage,
	View,
	Alert,
	Image,
	Navigator,
	Text,
	TextInput,
	Dimensions,
	ScrollView,
	StyleSheet
} from 'react-native';

import styles from './styles';
import Button from 'apsl-react-native-button';
import MapView from 'react-native-maps';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 19.0760;
const LONGITUDE = 72.8777;

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export class Map extends Component {
	constructor(props) {
		super(props);

		this.state = {
			region: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA,
			}
		};
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					region: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA
					}
				});
			},
			(error) => alert(error.message),
			{
				enableHighAccuracy: true,
				timeout: 20000,
				maximumAge: 1000
			}
		);
	}

	render() {
		const onRegionChange = region => {
			this.setState({ region });
		}

		const _navigateBack = () => {
			this.props.navigator.pop();	
		}

		return (
			<View style={[styles.fullscreen, styles.greyBackground, styles.absolute]}>
				<View
					style={styles.mapHeader}>
					<Button
						style={{marginLeft: 5, width: 50, borderWidth: 0, marginTop: 15, zIndex: 100}}
						onPress={_navigateBack}
						textStyle={{fontSize: 12}}>
						Return
					</Button>
					<Text
						style={{textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', top: -40, fontSize: 15, zIndex: 50}}>
						Water Locations
					</Text>
				</View>
				<MapView
					initialRegion={this.state.region}
					region={this.state.region}
					onRegionChange={this.onRegionChange}
					style={styles.absolute}
				/>
			</View>
		)
	}
}
module.exports = Map;
