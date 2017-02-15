// app/index.js

import React, {Component} from 'react';

import {
	View,
	Alert,
	Button,
	Image,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Email: '',
			Password: ''
		};
	}
	render() {
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
					onChangeText={(Email) => this.setState({Email})}
					keyboardType="email-address"
					placeholder='Email'
				/>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 20, marginLeft: 20, marginRight: 20}}
					onChangeText={(Password) => this.setState({Password})}
					placeholder='Password'
					secureTextEntry={true}
				/>
				<Button
					onPress={onButtonPress}
					title="Login"
					color="#841584"
					accessibilityLabel="Login"
				/>
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
		return (
			<View style={styles.fullscreen}>
				<Login></Login>
			</View>
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
	}
});
