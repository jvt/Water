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

let id = 0;

export class Map extends Component {
	constructor(props) {
		super(props);

		this.state = {
			region: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA,
			},
			markers: []
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
				this.loadNewPins();
			},
			(error) => alert(error.message),
			{
				enableHighAccuracy: true,
				timeout: 20000,
				maximumAge: 1000
			}
		);
	}

	addPins(pins) {
		let formatted = [];
		pins.forEach(pin => {
			id++;
			formatted.push({
				title: pin.type,
				description: pin.condition,
				key: id,
				coordinate: {
					latitude: pin.latitude,
					longitude: pin.longitude,
				}
			});
		});
		this.setState({
			markers: formatted
		});
	}

	loadNewPins() {
		// console.log('Loading pins for %f %f', this.state.region.latitude, this.state.region.longitude);
		return fetch('https://water.joetorraca.com/api/reports/location?lat=' + this.state.region.latitude + '&long=' + this.state.region.longitude,
			{
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			})
			.then((response) => response.json())
			.then((res) => {
				if (!res || res.status !== 'success') {
					return Alert.alert('A networking error has occurred.');
				}

				this.addPins(res.reports);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	onRegionChange(region) {
		this.setState({ region });
	}

	onRegionChangeComplete(region) {
		this.loadNewPins();
	}

	render() {
		this.addPins = this.addPins.bind(this)
		this.loadNewPins = this.loadNewPins.bind(this)
		this.onRegionChange = this.onRegionChange.bind(this)
		this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this)

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
					onRegionChangeComplete={this.onRegionChangeComplete}
					style={styles.absolute}
					showsBuildings={false}
					showsIndoors={false}
					showsPointsOfInterest={false}
				>
				{this.state.markers.map(marker => (
					<MapView.Marker
						coordinate={marker.coordinate}
						title={marker.title}
						key={marker.key}
						description={marker.description}
					/>
					))}
				</MapView>
			</View>
		)
	}
}
module.exports = Map;
