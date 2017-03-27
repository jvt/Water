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
import BusyIndicator from 'react-native-busy-indicator';

const loaderHandler = require('react-native-busy-indicator/LoaderHandler');

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Username: '',
			Password: ''
		};
	}

	render() {

		const verifyLogin = () => {
			loaderHandler.showLoader("Loading");
			return fetch('https://water.joetorraca.com/api/session',
				{
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: this.state.Username,
						password: this.state.Password,
					})
				})
				.then((response) => response.json())
				.then((res) => {
					if (res && res.status === 'success' && res.auth === true) {
						console.info('Successful login attempt');
						try {
							AsyncStorage.setItem('@water2340:user', JSON.stringify(res.userData));
						} catch (error) {
							console.error('An error occurred while storing that login data');
							console.error(error);
						}
						this.props.navigator.replacePreviousAndPop({index: 3});
					} else {
						loaderHandler.hideLoader();
						if (res.messages.length > 0) {
							console.log('An error occurred with login!');
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
			<View style={styles.fullscreen}>
		        <ScrollView keyboardDismissMode='on-drag'>
					<View style={{alignItems: 'center'}}>
						<Image
							style={{width: 80, height: 175}}
							source={require('./images/droplet.png')}
						/>
					</View>
					<Text
						style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
						Login
					</Text>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 70, marginLeft: 20, marginRight: 20}}
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
					<Button
						style={{backgroundColor: 'rgba(65, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
						onPress={() => verifyLogin()}
						textStyle={{fontSize: 18}}>
						Login
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

module.exports = Login;
