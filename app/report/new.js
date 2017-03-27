import React, {Component} from 'react';
import {
	View,
	AsyncStorage,
	Alert,
	Image,
	Navigator,
	Text,
	TextInput,
	ScrollView,
	StyleSheet
} from 'react-native';

import styles from '../styles';
import Button from 'apsl-react-native-button';
import BusyIndicator from 'react-native-busy-indicator';

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
				setUID(_parsed.id);
				setRole(_parsed.role);
			}
		});

		const setUID = uid => {
			this.setState({
				UserID: uid
			});
		}

		const setRole = role => {
			this.setState({
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
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 50, marginLeft: 20, marginRight: 20}}
						onChangeText={(Latitude) => this.setState({Latitude})}
						placeholder='Latitude'
						returnKeyType='next'
					/>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 20, marginLeft: 20, marginRight: 20}}
						onChangeText={(Longitude) => this.setState({Longitude})}
						placeholder='Longitude'
						returnKeyType='next'
					/>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 20, marginLeft: 20, marginRight: 20}}
						onChangeText={(Type) => this.setState({Type})}
						placeholder='Type'
						returnKeyType='next'
					/>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 20, marginLeft: 20, marginRight: 20}}
						onChangeText={(Condition) => this.setState({Condition})}
						placeholder='Condition'
						returnKeyType='go'
					/>
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
