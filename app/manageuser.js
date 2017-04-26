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


export class ManageUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			UID: props.data.id,
			Username: props.data.username,
			Role: props.data.role,
			HomeAddress: props.data.homeaddress,
			Title: props.data.title,
			Locked: props.data.locked
		};
	}

	render() {
		const _navigateBack = () => {
			this.props.navigator.pop();	
		}

		const _banUser = () => {
			fetch('https://water.joetorraca.com/api/user/' + this.state.UID  + '/ban',
			{
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			})
			.then((response) => response.json())
			.then((res) => {
				if (res && res.status === 'success') {
					Alert.alert("User successfully Banned")
				} else {
					if (res.messages.length > 0) {
						console.log('An error occurred with loading users!');
						console.log(res.messages);
						Alert.alert(res.messages[0]);
					} else {
						Alert.alert('An unexpected error occurred. Please try again.');
					}
				}
			})
			.catch((error) => {
				console.error(error);
			});
		}

		const _unbanUser = () => {
			fetch('https://water.joetorraca.com/api/user/' + this.state.UID  + '/unban',
			{
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			})
			.then((response) => response.json())
			.then((res) => {
				if (res && res.status === 'success') {
					Alert.alert("User successfully Unbanned")
				} else {
					if (res.messages.length > 0) {
						console.log('An error occurred with loading users!');
						console.log(res.messages);
						Alert.alert(res.messages[0]);
					} else {
						Alert.alert('An unexpected error occurred. Please try again.');
					}
				}
			})
			.catch((error) => {
				console.error(error);
			});
		}

		const _deleteUser = () => {
			fetch('https://water.joetorraca.com/api/user/' + this.state.UID  + '/delete',
			{
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			})
			.then((response) => response.json())
			.then((res) => {
				if (res && res.status === 'success') {
					Alert.alert("User successfully Unbanned")
				} else {
					if (res.messages.length > 0) {
						console.log('An error occurred with loading users!');
						console.log(res.messages);
						Alert.alert(res.messages[0]);
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
			<View style={[styles.fullscreen, styles.greyBackground]}>
				<ScrollView>
					<View style={styles.paddedContainer}>
						<View style={styles.card} elevation={1}>
							<Text
								style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
								My Account
							</Text>
						</View>
						<View style={[styles.card, styles.noCardMargin]}>
							<Text>Title: {this.state.Title}</Text>
							<Text>Username: {this.state.Username}</Text>
							{this.state.Locked == 0 &&
							<Text>Banned: False</Text>
							}
							{this.state.Locked == 1 &&
							<Text>Banned: True</Text>
							}
							{this.state.Role == 0 &&
								<Text>Role: User </Text>
							}
							{this.state.Role == 1 &&
								<Text>Role: Worker </Text>
							}
							{this.state.Role == 2 &&
								<Text>Role: Manager </Text>
							}
							{this.state.Role == 3 &&
								<Text>Role: Admin </Text>
							}
						</View>
						<View style={styles.card} elevation={1}>
							{this.state.Locked == 0 &&
							<Button
								style={{backgroundColor: 'rgba(63, 209, 127, 1)', marginLeft: 10, marginRight: 10, borderWidth: 0, marginTop: 10}}
								onPress={() => _unbanUser()}
								textStyle={{fontSize: 18}}>
								Ban
							</Button>
							}
							{this.state.Locked == 1 &&
							<Button
								style={{backgroundColor: 'rgba(63, 209, 127, 1)', marginLeft: 10, marginRight: 10, borderWidth: 0, marginTop: 10}}
								onPress={() => _unbanUser()}
								textStyle={{fontSize: 18}}>
								Unban
							</Button>
							}
							<Button
								style={{backgroundColor: 'rgba(63, 209, 127, 1)', marginLeft: 10, marginRight: 10, borderWidth: 0, marginTop: 10}}
								onPress={() => _deleteUser()}
								textStyle={{fontSize: 18}}>
								Delete
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
module.exports = ManageUser;
