import React, {Component} from 'react';
import {
	View,
	AsyncStorage,
	Alert,
	Image,
	Navigator,
	Text,
	Picker,
	TextInput,
	ScrollView,
	StyleSheet
} from 'react-native';

import styles from '../styles';
import Button from 'apsl-react-native-button';
import BusyIndicator from 'react-native-busy-indicator';

import ModalPicker from 'react-native-modal-picker'

let MessageBarAlert = require('react-native-message-bar').MessageBar;
let MessageBarManager = require('react-native-message-bar').MessageBarManager;

const loaderHandler = require('react-native-busy-indicator/LoaderHandler');

export class ReportNew extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Latitude: '',
			Longitude: '',
			UserID: '',
			Role: '',
			Condition: '',
			Type: ''
		};

		AsyncStorage.getItem('@water2340:user', function(e, user) {
			if (e) {
				console.log('Error loading user from storage');
				console.log(e);
			} else {
				let _parsed = JSON.parse(user);
				setUserData(_parsed.id, _parsed.role);
			}
		});

		const setUserData = (uid, role) => {
			this.setState({
				UserID: uid,
				Role: role
			});
		}
	}

	componentDidMount() {
		MessageBarManager.registerMessageBar(this.refs.alert);
	}

	componentWillUnmount() {
		MessageBarManager.unregisterMessageBar();
	}

	render() {
		const calculateLocation = () => {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.setState({
						Latitude: String(position.coords.latitude),
						Longitude: String(position.coords.longitude)
					});
					console.log(this.state);
				},
				(error) => alert(error.message),
				{
					enableHighAccuracy: true,
					timeout: 20000,
					maximumAge: 1000
				}
			);
		}
		const submitReport = () => {
			loaderHandler.showLoader("Loading");
			return fetch('https://water.joetorraca.com/api/reports',
				{
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						userID: this.state.UserID,
						condition: this.state.Condition,
						type: this.state.Type,
						latitude: this.state.Latitude,
						longitude: this.state.Longitude
					})
				})
				.then((response) => response.json())
				.then((res) => {
					console.log('Got response');
					if (res && res.status === 'success') {
						console.info('New report created');
						this.props.navigator.pop();
					} else {
						loaderHandler.hideLoader();
						if (res.messages.length > 0) {
							console.log('An error occurred with report!');
							console.log(res.messages);
							// Alert.alert(res.messages[0]);
							MessageBarManager.showAlert({
							  title: 'Error',
							  message: res.messages[0],
							  alertType: 'error',
							});
						} else {
							Alert.alert('An unexpected error occurred. Please try again.');
						}
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}
		let i = 0;
		const waterSources = [
			{
				key: i++,
				label: 'Bottled'
			},
			{
				key: i++,
				label: 'Lake'
			},
			{
				key: i++,
				label: 'Well'
			},
			{
				key: i++,
				label: 'Stream'
			},
			{
				key: i++,
				label: 'Spring'
			}
		];
		let j = 0;
		const conditions = [
			{
				key: j++,
				label: 'Waste'
			},
			{
				key: j++,
				label: 'Treatable-Clear'
			},
			{
				key: j++,
				label: 'Treatable-Muddy'
			},
			{
				key: j++,
				label: 'Potable'
			}
		];

		return (
			<View style={styles.fullscreen}>
				<MessageBarAlert ref="alert"></MessageBarAlert>
				<ScrollView keyboardDismissMode='on-drag'>
					<View style={{alignItems: 'center'}}>
						<Image
							style={{width: 80, height: 175}}
							source={require('../images/droplet.png')}
						/>
					</View>
					<Text
						style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
						New Water Report
					</Text>
					<Button
						style={{borderWidth: 0}}
						onPress={() => calculateLocation()}
						textStyle={{fontSize: 18}}>
						Use My Location
					</Button>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 50, marginLeft: 20, marginRight: 20, borderRadius: 5}}
						onChangeText={(Latitude) => this.setState({Latitude})}
						placeholder='Latitude'
						value={this.state.Latitude}
						returnKeyType='next'
					/>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 20, marginLeft: 20, marginRight: 20, borderRadius: 5}}
						onChangeText={(Longitude) => this.setState({Longitude})}
						placeholder='Longitude'
						value={this.state.Longitude}
						returnKeyType='next'
					/>
					<ModalPicker
						data={waterSources}
						style={{marginTop: 20, marginLeft: 20, marginRight: 20}}
						initValue="Water Type"
						onChange={(Type) => this.setState({Type: Type.label}) } />

					<ModalPicker
						data={conditions}
						style={{marginTop: 20, marginLeft: 20, marginRight: 20}}
						initValue="Water Condition"
						onChange={(Condition) => this.setState({Condition: Condition.label}) } />
					<Button
						style={{backgroundColor: 'rgba(65, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
						onPress={() => submitReport()}
						textStyle={{fontSize: 18}}>
						Submit
					</Button>
					<Button
						style={{borderWidth: 0}}
						onPress={() => this.props.navigator.pop()}
						textStyle={{fontSize: 18}}>
						Cancel
					</Button>
				</ScrollView>
				<BusyIndicator />
			</View>
		)
	}
}

module.exports = ReportNew;
