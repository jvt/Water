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
					index: 3
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

export class Main extends Component {
	render() {
		const _navigateToWelcome = () => {
			this.props.navigator.resetTo({
				index: 0
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
				<Text
					style={{fontSize: 20, textAlign: 'center', fontWeight: '200'}}>
					Clean Water
				</Text>
				<Button
					style={{backgroundColor: 'rgba(232, 88, 74, 1)', marginLeft: 20, marginRight: 20, borderWidth: 0, marginTop: 50}}
					onPress={() => _navigateToWelcome()}
					textStyle={{fontSize: 18}}>
					Logout
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

			} else if (route.index === 3) {
				return <Main navigator={navigator}></Main>
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
		alignItems: 'center',
		backgroundColor: 'white'
	},
	fullscreen: {
		backgroundColor: 'white'
	}
});
