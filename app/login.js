import React, {Component} from 'react';
import {
	View,
	Alert,
	Image,
	Navigator,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

import styles from './styles';
import Button from 'apsl-react-native-button';

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
						this.props.navigator.push({
							index: 3
						});
					} else {
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
				<View style={{alignItems: 'center'}}>
					<Image
						style={{width: 80, height: 175}}
						source={require('./images/droplet.png')}
					/>
				</View>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 100, marginLeft: 20, marginRight: 20}}
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
			</View>
		)
	}
}

module.exports = Login;
