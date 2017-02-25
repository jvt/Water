import React, {Component} from 'react';
import {
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

let MessageBarAlert = require('react-native-message-bar').MessageBar;
let MessageBarManager = require('react-native-message-bar').MessageBarManager;

const loaderHandler = require('react-native-busy-indicator/LoaderHandler');

export class Registration extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Username: '',
			Password: '',
			ConfirmPassword: '',
			Role: ''
		};
	}

	componentDidMount() {
		MessageBarManager.registerMessageBar(this.refs.alert);
	}

	componentWillUnmount() {
		MessageBarManager.unregisterMessageBar();
	}

	render() {

		const registerUser = () => {
			loaderHandler.showLoader("Loading");
			return fetch('https://water.joetorraca.com/api/user',
				{
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: this.state.Username,
						password: this.state.Password,
						confirm_password: this.state.ConfirmPassword,
						role: this.state.Role
					})
				})
				.then((response) => response.json())
				.then((res) => {
					if (res && res.status === 'success') {
						console.info('New user account created');
						this.props.navigator.replacePreviousAndPop({index: 3});
					} else {
						loaderHandler.hideLoader();
						if (res.messages.length > 0) {
							console.log('An error occurred with registration!');
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
							source={require('./images/droplet.png')}
						/>
					</View>
					<Text
						style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
						Register
					</Text>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 50, marginLeft: 20, marginRight: 20}}
						onChangeText={(Username) => this.setState({Username})}
						placeholder='Username'
						autoCorrect={false}
						returnKeyType='next'
						autoCapitalize='none'
					/>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 20, marginLeft: 20, marginRight: 20}}
						onChangeText={(Password) => this.setState({Password})}
						onFocus= {() => this.setState({text : ''})}
						placeholder='Password'
						secureTextEntry={true}
						returnKeyType='go'
					/>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 20, marginLeft: 20, marginRight: 20}}
						onChangeText={(ConfirmPassword) => this.setState({ConfirmPassword})}
						onFocus= {() => this.setState({text : ''})}
						placeholder='Confirm Password'
						secureTextEntry={true}
						returnKeyType='go'
					/>
					<View
						style={{padding: 20, paddingBottom: 0, marginBottom: -20}}>
						<SegmentedControlTab
							values={['User', 'Worker', 'Manager', 'Admin']}
							onTabPress={(Role) => this.setState({Role})}
						/>
					</View>
					<Button
						style={{backgroundColor: 'rgba(65, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
						onPress={() => registerUser()}
						textStyle={{fontSize: 18}}>
						Register
					</Button>
					<Button
						style={{borderWidth: 0}}
						onPress={() => this.props.navigator.pop()}
						textStyle={{fontSize: 18}}>
						Return
					</Button>
		        </ScrollView>
				<BusyIndicator />
			</View>
		)
	}
}

module.exports = Registration;
