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
import Button from 'apsl-react-native-button';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import BusyIndicator from 'react-native-busy-indicator';
const loaderHandler = require('react-native-busy-indicator/LoaderHandler');


export class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			UID: null,
			Token: null,
			Username: null,
			Role: null,
			HomeAddress: null,
			Title: null
		};

		AsyncStorage.getItem('@water2340:userToken', function(e, token) {
			if (!token) Alert.alert('A fatal internal error has occurred');
			AsyncStorage.getItem('@water2340:userID', function(e, uID) {
				if (!uID) Alert.alert('A fatal internal error has occurred');
				setTokenAndID(uID, token);
				loadUserData(uID, token);
			});
		});

		const setTokenAndID = (uid, token) => {
			this.setState({
				Token: token,
				UID: uid
			});
		}

		const loadUserData = (userID, token) => {
			return fetch('https://water.joetorraca.com/api/user/' + userID,
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

					let data = res.userData;
					this.setState({
						Username: data.username,
						Role: Number(data.role),
						HomeAddress: data.homeaddress || 'Not Set',
						Title: data.title || 'Not Set'
					});
					this.render();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}

	render() {
		const _navigateBack = () => {
			this.props.navigator.pop();	
		}

		const _saveChanges = () => {
			loaderHandler.showLoader();
			return fetch('https://water.joetorraca.com/api/user/update', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userid: this.state.UID,
					username: this.state.Username,
					role: this.state.Role,
					homeAddress: this.state.HomeAddress,
					title: this.state.Title
				})
			})
			.then((response) => response.json())
			.then((res) => {
				loaderHandler.hideLoader();
				if (!res || res.status !== 'success') {
					return Alert.alert('A networking error has occurred.');
				}
				Alert.alert('Successfully updated your account data');
			})
			.catch((error) => {
				console.error(error);
			});
		}

		return (
			<View style={[styles.fullscreen, styles.greyBackground]}>
				<ScrollView>
					<View style={styles.paddedContainer}>
						<View style={styles.card} elevation={1}>
							<Text
								style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
								My Account
							</Text>
						</View>
						<View style={styles.card} elevation={1}>
								<Text
									style={{fontSize: 20, textAlign: 'left', fontWeight: '200'}}>
									Username: 
							</Text>
							<TextInput
								style={{height: 40}}
								value={this.state.Username}
								onChangeText={(Username) => this.setState({Username})}
							/>
						</View>
						<View style={styles.card} elevation={1}>
								<Text
									style={{fontSize: 20, textAlign: 'left', fontWeight: '200'}}>
									Home Address:
							</Text>
							<TextInput
								style={{height: 40}}
								value={this.state.HomeAddress} 
								onChangeText={(HomeAddress) => this.setState({HomeAddress})}
							/>
						</View>
						<View style={styles.card} elevation={1}>
								<Text
									style={{fontSize: 20, textAlign: 'left', fontWeight: '200'}}>
									Role:
							</Text>
							<View
								style={{padding: 20, paddingBottom: 0}}>
								<SegmentedControlTab
									values={['User', 'Worker', 'Manager', 'Admin']}
									selectedIndex={0}
									onTabPress={(Role) => this.setState({Role})}
								/>
							</View>
						</View>
						<View style={styles.card} elevation={1}>
								<Text
									style={{fontSize: 20, textAlign: 'left', fontWeight: '200'}}>
									Title: 
							</Text>
							<TextInput
								style={{height: 40}}
								value={this.state.Title}
								onChangeText={(Title) => this.setState({Title})}
							/>
						</View>
						<View style={styles.card} elevation={1}>
							<Button
								style={{backgroundColor: 'rgba(63, 209, 127, 1)', marginLeft: 10, marginRight: 10, borderWidth: 0, marginTop: 10}}
								onPress={() => _saveChanges()}
								textStyle={{fontSize: 18}}>
								Save
							</Button>
							<Button
								style={{backgroundColor: 'rgba(66, 163, 221, 1)', marginLeft: 10, marginRight: 10, borderWidth: 0, marginTop: 10}}
								onPress={() => _navigateBack()}
								textStyle={{fontSize: 18}}>
								Return
							</Button>
						</View>
					</View>
				</ScrollView>
				<BusyIndicator />
			</View>
		)
	}
}
module.exports = Profile;
