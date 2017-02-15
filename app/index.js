// app/index.js

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
			const username = 'user';
			const password = 'pass';

			if (username != this.state.Username || this.state.Password != password) {
				Alert.alert('Your login was incorrect');
			} else {
				this.props.navigator.push({
					id: 3
				});
			}
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
			</View>
		)
	}
}

export class Welcome extends Component {
	render() {
		const _navigateToLogin = () => {
			this.props.navigator.push({
				index: 1
			});
		}

		const _navigateToRegister = () => {
			this.props.navigator.push({
				index: 2
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
				<Button
					style={{backgroundColor: 'rgba(65, 163, 221, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
					onPress={() => _navigateToLogin()}
					textStyle={{fontSize: 18}}>
					Login
				</Button>
				<Button
					style={{backgroundColor: 'rgba(63, 209, 127, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0}}
					onPress={() => _navigateToRegister()}
					textStyle={{fontSize: 18}}>
					Create an account
				</Button>
			</View>
		)
	}
}

export default class water extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const routes = [
			{title: 'Welcome Screen', index: 0},
			{title: 'Login Screen', index: 1},
			{title: 'Register Screen', index: 2},
			{title: 'Main Application', index: 3},
		];

		const renderScene = (route, navigator) => {
			if (route.index === 0) {
				return <Welcome navigator={navigator}></Welcome>
			} else if (route.index === 1) {
				return <Login navigator={navigator}></Login>
			} else if (route.index === 2) {

			}
		};

		return (
			<Navigator
				initialRoute={routes[0]}
				initialRouteStack={routes}
				renderScene={renderScene}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	fullscreen: {
		// alignItems: 'center'
		backgroundColor: 'white'
	}
});
