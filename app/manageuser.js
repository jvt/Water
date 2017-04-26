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
			fetch('https://water.joetorraca.com/api/user/' + row.id  + '/ban',
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
			fetch('https://water.joetorraca.com/api/user/' + row.id  + '/unban',
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
module.exports = ManageUser;
